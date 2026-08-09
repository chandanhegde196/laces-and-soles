# Clean & Robust PowerShell TCP Server for Local Wi-Fi Sharing
$ip = [System.Net.IPAddress]::Parse("0.0.0.0")
$port = 8080
$listener = New-Object System.Net.Sockets.TcpListener($ip, $port)

try {
    $listener.Start()
    Write-Host "Local Wi-Fi Server Active! Open http://192.168.29.28:8080 on your phone!"
    
    while ($true) {
        try {
            $client = $listener.AcceptTcpClient()
            $stream = $client.GetStream()
            $reader = New-Object System.IO.StreamReader($stream)
            $requestLine = $reader.ReadLine()
            
            if ($requestLine) {
                $tokens = $requestLine.Split(" ")
                if ($tokens.Length -ge 2) {
                    $path = $tokens[1]
                    if ($path -eq "/" -or [string]::IsNullOrWhiteSpace($path)) { $path = "/index.html" }
                    
                    if ($path.Contains("?")) { $path = $path.Substring(0, $path.IndexOf("?")) }
                    
                    $cleanPath = [System.Uri]::UnescapeDataString($path)
                    if ($cleanPath.StartsWith("/")) { $cleanPath = $cleanPath.Substring(1) }
                    $cleanPath = $cleanPath.Replace('/', '\')
                    
                    $filePath = Join-Path "C:\Users\Chandan\.gemini\antigravity-ide\scratch\laces-and-soles" $cleanPath
                    
                    if ((Test-Path -LiteralPath $filePath) -and (System.IO.File::Exists($filePath))) {
                        $bytes = [System.IO.File]::ReadAllBytes($filePath)
                        $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                        $contentType = "text/html"
                        switch ($ext) {
                            ".html" { $contentType = "text/html" }
                            ".css"  { $contentType = "text/css" }
                            ".js"   { $contentType = "text/javascript" }
                            ".jpg"  { $contentType = "image/jpeg" }
                            ".jpeg" { $contentType = "image/jpeg" }
                            ".png"  { $contentType = "image/png" }
                            ".svg"  { $contentType = "image/svg+xml" }
                        }
                        
                        $header = "HTTP/1.1 200 OK`r`nContent-Type: $contentType`r`nContent-Length: $($bytes.Length)`r`nAccess-Control-Allow-Origin: *`r`nConnection: close`r`n`r`n"
                        $headerBytes = [System.Text.Encoding]::UTF8.GetBytes($header)
                        $stream.Write($headerBytes, 0, $headerBytes.Length)
                        $stream.Write($bytes, 0, $bytes.Length)
                    } else {
                        $notFound = "HTTP/1.1 404 Not Found`r`nContent-Length: 0`r`nConnection: close`r`n`r`n"
                        $notFoundBytes = [System.Text.Encoding]::UTF8.GetBytes($notFound)
                        $stream.Write($notFoundBytes, 0, $notFoundBytes.Length)
                    }
                }
            }
            $client.Close()
        } catch {
            # Catch per-request exceptions safely
        }
    }
} catch {
    Write-Host $_.Exception.Message
} finally {
    $listener.Stop()
}
