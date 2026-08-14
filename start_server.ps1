$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://127.0.0.1:8080/")
try {
    $listener.Start()
    Write-Host "Server started on http://127.0.0.1:8080"
} catch {
    Write-Host "Failed to start listener: $_"
    exit 1
}

$rootDir = $PSScriptRoot
$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css"
    ".js"   = "text/javascript"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".png"  = "image/png"
    ".svg"  = "image/svg+xml"
    ".webp" = "image/webp"
    ".json" = "application/json"
}

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = [System.Uri]::UnescapeDataString($request.Url.LocalPath)
        if ($urlPath -eq "/") { $urlPath = "/index.html" }

        $relativePath = $urlPath.TrimStart('/').Replace('/', '\')
        $fullPath = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($rootDir, $relativePath))

        if ($fullPath.StartsWith($rootDir) -and (Test-Path $fullPath -PathType Leaf)) {
            $ext = [System.IO.Path]::GetExtension($fullPath).ToLower()
            if ($mimeTypes.ContainsKey($ext)) {
                $response.ContentType = $mimeTypes[$ext]
            } else {
                $response.ContentType = "application/octet-stream"
            }

            # Enable CORS headers so external tools / crawlers can load assets smoothly
            $response.AddHeader("Access-Control-Allow-Origin", "*")

            $bytes = [System.IO.File]::ReadAllBytes($fullPath)
            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buf = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buf.Length
            $response.OutputStream.Write($buf, 0, $buf.Length)
        }
        $response.Close()
    }
} catch {
    Write-Host "Error in loop: $_"
} finally {
    $listener.Stop()
}
