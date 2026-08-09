/* ==========================================================================
   LACES & SOLES — OFFICIAL INSTAGRAM FOOTWEAR CATALOG
   REALISTIC RATINGS (4.3 - 4.8), ACCURATE ADIDAS ULTRABOOST LIGHT SPECS,
   EXPANDED SLIDES & SLIPPERS + NEW NIKE & ADIDAS SHOES
   REAL STORE MARKET VALUE PRICING (₹1,299 - ₹3,499)
   ========================================================================== */

let PRODUCTS = [
  {
    id: 1,
    name: "Air Jordan 1 Low x Travis Scott 'Reverse Mocha'",
    category: "nike-jordan",
    brand: "Air Jordan",
    price: 3499,
    oldPrice: 4999,
    rating: 4.8,
    reviewsCount: 246,
    badge: "limited",
    badgeText: "🔥 Top Hype Drop",
    image: "travis_scott_mocha.png",
    inStock: true,
    stockCount: 4,
    description: "As featured on @laces.and.soles Instagram! Iconic reverse mocha brown & sail white low-top Jordan 1 with backwards leather Swoosh and Cactus Jack heel logo.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 2,
    name: "Air Jordan 1 Retro High 'Chicago'",
    category: "nike-jordan",
    brand: "Air Jordan",
    price: 3299,
    oldPrice: 4499,
    rating: 4.7,
    reviewsCount: 189,
    badge: "limited",
    badgeText: "Hype Drop",
    image: "jordan_chicago_real.jpg",
    inStock: true,
    stockCount: 5,
    description: "As featured on @laces.and.soles Instagram. Legendary varsity red, black, and white high-top Air Jordan 1 with full-grain leather upper and ankle collar padding.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 3,
    name: "Adidas Ultraboost Light Running",
    category: "adidas-yeezy",
    brand: "Adidas",
    price: 2799,
    oldPrice: 3799,
    rating: 4.7,
    reviewsCount: 142,
    badge: "sale",
    badgeText: "Gym & Run",
    image: "adidas_ultraboost_light.jpg",
    inStock: true,
    stockCount: 6,
    description: "Engineered with 30% lighter Light BOOST foam midsole, Adidas Linear Energy Push system, breathable Primeknit+ upper, and Continental™ Natural Rubber outsole for ultimate energy return.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 4,
    name: "Onitsuka Tiger Mexico 66 Yellow/Black",
    category: "nike-jordan",
    brand: "Onitsuka Tiger",
    price: 2699,
    oldPrice: 3699,
    rating: 4.6,
    reviewsCount: 118,
    badge: "new",
    badgeText: "Retro Classic",
    image: "onitsuka_tiger.png",
    inStock: true,
    stockCount: 7,
    description: "Classic Kill Bill style iconic yellow & black leather low-top casual sneaker with thin heel cap and signature side stripes.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 5,
    name: "Adidas Samba OG White/Black",
    category: "adidas-yeezy",
    brand: "Adidas",
    price: 2599,
    oldPrice: 3499,
    rating: 4.8,
    reviewsCount: 312,
    badge: "limited",
    badgeText: "Trending Drop",
    image: "adidas_samba.png",
    inStock: true,
    stockCount: 8,
    description: "The street style shoe of the year! Full-grain white leather upper with suede T-toe overlay, 3-Stripes branding, and classic gum rubber outsole.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 6,
    name: "Birkenstock Boston Suede Clog 'Taupe'",
    category: "slides",
    brand: "Birkenstock",
    price: 2299,
    oldPrice: 3199,
    rating: 4.7,
    reviewsCount: 94,
    badge: "new",
    badgeText: "Comfort Clog",
    image: "birkenstock_boston.png",
    inStock: true,
    stockCount: 5,
    description: "Premium velvet suede leather clog with anatomically shaped cork-latex footbed and adjustable pin buckle strap.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 7,
    name: "Yeezy Foam Comfort Slides 'Onyx'",
    category: "slides",
    brand: "Yeezy",
    price: 1499,
    oldPrice: 2299,
    rating: 4.8,
    reviewsCount: 205,
    badge: "sale",
    badgeText: "Best Seller Slide",
    image: "yeezy_slides.jpg",
    inStock: true,
    stockCount: 12,
    description: "Injected EVA foam for lightweight durability. Strategic groove outsole placement for maximum traction and slip-on ease.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 8,
    name: "Nike Victori One Sport Slide",
    category: "slides",
    brand: "Nike",
    price: 1299,
    oldPrice: 1899,
    rating: 4.5,
    reviewsCount: 84,
    badge: "new",
    badgeText: "Daily Wear",
    image: "nike_victori_slide.jpg",
    inStock: true,
    stockCount: 15,
    description: "Padded strap and ultra-soft responsive foam sole for seamless transition from beach to street.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 9,
    name: "Crocs Echo Clog 'Desert Grass'",
    category: "slides",
    brand: "Crocs",
    price: 1799,
    oldPrice: 2499,
    rating: 4.6,
    reviewsCount: 72,
    badge: "new",
    badgeText: "Street Clog",
    image: "crocs_echo_clog.jpg",
    inStock: true,
    stockCount: 8,
    description: "Fully molded Croslite™ construction with LiteRide™ drop-in footbed for dual-density comfort.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 10,
    name: "Nike Air Force 1 '07 Triple White",
    category: "nike-jordan",
    brand: "Nike",
    price: 2499,
    oldPrice: 3299,
    rating: 4.8,
    reviewsCount: 290,
    badge: "limited",
    badgeText: "Essential Drop",
    image: "nike_air_force.jpg",
    inStock: true,
    stockCount: 10,
    description: "Crisp white leather upper, stitched leather overlays, encapsulated Nike Air cushioning, and non-marking rubber sole.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 11,
    name: "Nike Air Max 270 'Crimson Red'",
    category: "athletic",
    brand: "Nike",
    price: 2799,
    oldPrice: 3899,
    rating: 4.6,
    reviewsCount: 135,
    badge: "sale",
    badgeText: "Max Air Cushion",
    image: "nike_red_airmax.jpg",
    inStock: true,
    stockCount: 6,
    description: "Features Nike's largest heel Air unit yet for super-soft stride responsiveness and breathable mesh upper.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 12,
    name: "Nike Air Max 90 'Infrared'",
    category: "nike-jordan",
    brand: "Nike",
    price: 2699,
    oldPrice: 3699,
    rating: 4.7,
    reviewsCount: 168,
    badge: "new",
    badgeText: "Heritage Air",
    image: "nike_air_max_90.jpg",
    inStock: true,
    stockCount: 7,
    description: "Iconic waffle outsole, stitched overlays, and classic TPU accents on the heel and eyestays.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 13,
    name: "Adidas Forum Low White/Royal Blue",
    category: "adidas-yeezy",
    brand: "Adidas",
    price: 2499,
    oldPrice: 3399,
    rating: 4.5,
    reviewsCount: 92,
    badge: "new",
    badgeText: "80s B-Ball",
    image: "adidas_forum_low.jpg",
    inStock: true,
    stockCount: 6,
    description: "Classic 80s basketball sneaker with removable hook-and-loop ankle strap and durable leather upper.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 14,
    name: "New Balance 550 White/Green",
    category: "nike-jordan",
    brand: "New Balance",
    price: 2599,
    oldPrice: 3499,
    rating: 4.7,
    reviewsCount: 178,
    badge: "limited",
    badgeText: "Retro Court",
    image: "new_balance_real.jpg",
    inStock: true,
    stockCount: 5,
    description: "Streamlined low-top silhouette referencing the 1989 original court shoe with heavy-duty leather upper.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 15,
    name: "Handcrafted Italian Leather Oxfords",
    category: "formal",
    brand: "Laces & Soles Executive",
    price: 1999,
    oldPrice: 2999,
    rating: 4.6,
    reviewsCount: 64,
    badge: "new",
    badgeText: "Pure Leather",
    image: "oxford_real.jpg",
    inStock: true,
    stockCount: 8,
    description: "100% genuine full-grain Italian leather with closed lacing system, cushioned memory foam insole, and polished finish.",
    sizes: [41, 42, 43, 44, 45]
  },
  {
    id: 16,
    name: "Vans Old Skool Core Casual Canvas",
    category: "formal",
    brand: "Vans",
    price: 1799,
    oldPrice: 2499,
    rating: 4.5,
    reviewsCount: 110,
    badge: "sale",
    badgeText: "Skate Icon",
    image: "vans_casual.jpg",
    inStock: true,
    stockCount: 9,
    description: "Classic side stripe skate shoe with sturdy canvas and suede uppers, re-enforced toecaps, and signature waffle outsoles.",
    sizes: [41, 42, 43, 44, 45]
  }
];

// App State
let state = {
  cart: [],
  wishlist: [],
  categoryFilter: 'all',
  searchQuery: '',
  sortBy: 'featured',
  inStockOnly: true,
  appliedPromo: null,
  selectedQuickViewProduct: null,
  selectedSize: null,
  displayLimit: 8,
  isOwnerAuthenticated: false,
  ownerPin: '8888',
  checkoutDetails: {
    name: '',
    phone: '',
    deliveryMethod: 'courier',
    address: '',
    paymentMethod: 'upi'
  }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) lucide.createIcons();
  runAdidasIntroSplash();
  loadSavedState();
  updateOwnerUI();
  renderProductGrid();
  updateCartUI();
  updateWishlistUI();
  setupEventListeners();
  
  if (window.location.search.includes('admin=true') || window.location.hash === '#admin') {
    openOwnerLoginModal();
  }
});

// INTERACTIVE MULTI-CAMERA 3D STUDIO VIDEO REEL CONTROLLER
function setShoeAngle(cameraShot) {
  const shoeImg = document.getElementById('nike-360-img');
  if (!shoeImg) return;

  document.querySelectorAll('.angle-btn').forEach(btn => btn.classList.remove('active'));

  if (cameraShot === 'director') {
    shoeImg.style.animation = 'multi-camera-director 16s infinite cubic-bezier(0.4, 0, 0.2, 1)';
    if (event && event.target) event.target.classList.add('active');
  } else if (cameraShot === 'side') {
    shoeImg.style.animation = 'none';
    shoeImg.style.transform = 'scale(1.25) rotateX(12deg) rotateY(-18deg) rotateZ(-6deg) translate3d(-30px, -20px, 50px)';
    if (event && event.target) event.target.classList.add('active');
  } else if (cameraShot === 'front') {
    shoeImg.style.animation = 'none';
    shoeImg.style.transform = 'scale(1.35) rotateX(-28deg) rotateY(25deg) rotateZ(14deg) translate3d(40px, 30px, 80px)';
    if (event && event.target) event.target.classList.add('active');
  } else if (cameraShot === 'back') {
    shoeImg.style.animation = 'none';
    shoeImg.style.transform = 'scale(1.4) rotateX(15deg) rotateY(-35deg) rotateZ(-12deg) translate3d(-50px, -15px, 100px)';
    if (event && event.target) event.target.classList.add('active');
  } else if (cameraShot === 'sole') {
    shoeImg.style.animation = 'none';
    shoeImg.style.transform = 'scale(1.05) rotateX(-5deg) rotateY(10deg) rotateZ(2deg) translate3d(0, -15px, 20px)';
    if (event && event.target) event.target.classList.add('active');
  }
}

// ADIDAS INTRO SPLASH CONTROLLER
function runAdidasIntroSplash() {
  const splash = document.getElementById('adidas-intro-splash');
  const progressFill = document.getElementById('splash-progress-fill');
  const percentText = document.getElementById('splash-percent-text');
  const skipBtn = document.getElementById('skip-intro-btn');
  const replayBtn = document.getElementById('replay-intro-btn');

  if (!splash) return;

  document.body.classList.add('splash-active');
  splash.classList.remove('splash-hidden');
  if (progressFill) progressFill.style.width = '0%';
  if (percentText) percentText.innerText = 'LOADING 0%';

  let currentPercent = 0;
  const countInterval = setInterval(() => {
    currentPercent += 5;
    if (currentPercent > 100) currentPercent = 100;
    if (progressFill) progressFill.style.width = `${currentPercent}%`;
    if (percentText) percentText.innerText = `LOADING ${currentPercent}%`;

    if (currentPercent >= 100) {
      clearInterval(countInterval);
      setTimeout(dismissSplash, 300);
    }
  }, 75);

  if (skipBtn) {
    skipBtn.onclick = () => {
      clearInterval(countInterval);
      dismissSplash();
    };
  }

  if (replayBtn) {
    replayBtn.onclick = () => {
      clearInterval(countInterval);
      runAdidasIntroSplash();
    };
  }
}

function dismissSplash() {
  const splash = document.getElementById('adidas-intro-splash');
  if (splash) {
    splash.classList.add('splash-hidden');
    document.body.classList.remove('splash-active');
  }
}

function loadSavedState() {
  const savedCart = localStorage.getItem('ls_cart');
  const savedWishlist = localStorage.getItem('ls_wishlist');
  const savedProducts = localStorage.getItem('ls_products');
  const savedPin = localStorage.getItem('ls_owner_pin');
  const savedSession = sessionStorage.getItem('ls_owner_session');

  if (savedCart) { try { state.cart = JSON.parse(savedCart); } catch (e) {} }
  if (savedWishlist) { try { state.wishlist = JSON.parse(savedWishlist); } catch (e) {} }
  if (savedProducts) {
    try {
      const parsed = JSON.parse(savedProducts);
      if (Array.isArray(parsed)) {
        PRODUCTS = parsed.map(p => ({ ...p, sizes: [41, 42, 43, 44, 45] }));
      }
    } catch (e) {}
  }
  if (savedPin) state.ownerPin = savedPin;
  if (savedSession === 'true') state.isOwnerAuthenticated = true;
}

function saveState() {
  localStorage.setItem('ls_cart', JSON.stringify(state.cart));
  localStorage.setItem('ls_wishlist', JSON.stringify(state.wishlist));
  localStorage.setItem('ls_products', JSON.stringify(PRODUCTS));
}

// STORE OWNER AUTHENTICATION & MANAGEMENT FUNCTIONS
function updateOwnerUI() {
  const bar = document.getElementById('owner-admin-bar');
  if (bar) {
    bar.classList.toggle('hidden', !state.isOwnerAuthenticated);
  }
  document.body.classList.toggle('owner-bar-active', state.isOwnerAuthenticated);
}

function openOwnerLoginModal() {
  if (state.isOwnerAuthenticated) {
    renderAdminProductList();
    document.getElementById('admin-modal')?.classList.add('active');
    return;
  }
  const modal = document.getElementById('owner-login-modal');
  const pinInput = document.getElementById('owner-pin-input');
  if (modal) {
    modal.classList.add('active');
    if (pinInput) {
      pinInput.value = '';
      setTimeout(() => pinInput.focus(), 150);
    }
  }
}

function verifyOwnerPin(enteredPin) {
  if (enteredPin === state.ownerPin) {
    state.isOwnerAuthenticated = true;
    sessionStorage.setItem('ls_owner_session', 'true');
    document.getElementById('owner-login-modal')?.classList.remove('active');
    updateOwnerUI();
    renderAdminProductList();
    document.getElementById('admin-modal')?.classList.add('active');
    showToast("👑 Store Owner Identity Verified! Full admin access unlocked.");
  } else {
    showToast("❌ Access Denied: Incorrect Security PIN!", "error");
    const input = document.getElementById('owner-pin-input');
    if (input) {
      input.value = '';
      input.focus();
    }
  }
}

function logoutOwnerMode() {
  state.isOwnerAuthenticated = false;
  sessionStorage.removeItem('ls_owner_session');
  document.getElementById('admin-modal')?.classList.remove('active');
  document.getElementById('change-pin-modal')?.classList.remove('active');
  updateOwnerUI();
  showToast("🔒 Store Owner Mode locked. Returning to customer view.");
}

// Product Card Interactive State (Size & Qty per card)
let cardState = {};

function getCardState(productId) {
  if (!cardState[productId]) {
    cardState[productId] = { size: 41, qty: 1 };
  }
  return cardState[productId];
}

function selectCardSize(productId, size) {
  const cs = getCardState(productId);
  cs.size = size;
  
  const group = document.getElementById(`size-group-${productId}`);
  if (group) {
    group.querySelectorAll('.size-btn').forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.size) === size);
    });
  }

  const addBtn = document.getElementById(`add-btn-${productId}`);
  if (addBtn) {
    const textSpan = addBtn.querySelector('span');
    if (textSpan) textSpan.textContent = `ADD SIZE ${size} (${cs.qty})`;
  }
}

function changeCardQty(productId, delta) {
  const cs = getCardState(productId);
  cs.qty = Math.max(1, cs.qty + delta);
  
  const valEl = document.getElementById(`card-qty-val-${productId}`);
  if (valEl) valEl.textContent = cs.qty;

  const addBtn = document.getElementById(`add-btn-${productId}`);
  if (addBtn) {
    const textSpan = addBtn.querySelector('span');
    if (textSpan) textSpan.textContent = `ADD SIZE ${cs.size} (${cs.qty})`;
  }
}

function addCardToBag(productId) {
  const cs = getCardState(productId);
  addToCart(productId, cs.size, cs.qty);
}

// Render Products Grid
function renderProductGrid() {
  const grid = document.getElementById('product-grid');
  const resultsCount = document.getElementById('results-count');
  if (!grid) return;

  let filtered = PRODUCTS.filter(product => {
    if (state.categoryFilter !== 'all' && product.category !== state.categoryFilter) {
      return false;
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchName = product.name.toLowerCase().includes(q);
      const matchBrand = product.brand.toLowerCase().includes(q);
      const matchCat = product.category.toLowerCase().includes(q);
      if (!matchName && !matchBrand && !matchCat) return false;
    }
    if (state.inStockOnly && !product.inStock) return false;
    return true;
  });

  filtered.sort((a, b) => {
    if (state.sortBy === 'price-low') return a.price - b.price;
    if (state.sortBy === 'price-high') return b.price - a.price;
    if (state.sortBy === 'rating') return b.rating - a.rating;
    if (state.sortBy === 'newest') return b.id - a.id;
    return 0;
  });

  const totalCount = filtered.length;
  const visibleProducts = filtered.slice(0, state.displayLimit || 8);

  resultsCount.textContent = `Showing ${visibleProducts.length} of ${totalCount} footwear drop${totalCount === 1 ? '' : 's'}`;

  const loadMoreBox = document.getElementById('load-more-container');
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBox && loadMoreBtn) {
    if (totalCount > visibleProducts.length) {
      loadMoreBox.style.display = 'block';
      const remaining = totalCount - visibleProducts.length;
      loadMoreBtn.querySelector('span').textContent = `LOAD MORE DROPS (+${remaining})`;
    } else {
      loadMoreBox.style.display = 'none';
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem;">
        <i data-lucide="package-x" style="width: 48px; height: 48px; color: var(--text-dim); margin-bottom: 1rem;"></i>
        <h3>No Products Found</h3>
        <p style="color: var(--text-muted);">Try adjusting your search query or department filter.</p>
        <button class="btn btn-secondary mt-4" onclick="resetFilters()">Reset All Filters</button>
      </div>
    `;
    if (window.lucide) lucide.createIcons();
    return;
  }

  grid.innerHTML = visibleProducts.map(product => {
    const isWishlisted = state.wishlist.some(item => item.id === product.id);
    const cs = getCardState(product.id);
    const isUnlisted = !product.inStock;

    return `
      <div class="product-card ${isUnlisted ? 'unlisted-card' : ''}" data-id="${product.id}">
        <div class="product-card-head" onclick="openQuickView(${product.id})">
          ${product.badgeText ? `<span class="product-badge badge-${product.badge}">${product.badgeText}</span>` : ''}
          ${isUnlisted ? `<span class="product-badge badge-sale" style="left: auto; right: 3.5rem; background: #dc2626;">Unlisted</span>` : ''}
          <button class="wishlist-toggle ${isWishlisted ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlist(${product.id})" aria-label="Add to Wishlist">
            <i data-lucide="heart" fill="${isWishlisted ? 'currentColor' : 'none'}"></i>
          </button>
          <img src="${product.image}" alt="${product.name}" loading="lazy" style="${isUnlisted ? 'opacity: 0.6; filter: grayscale(0.5);' : ''}">
        </div>

        <div class="product-card-body">
          <span class="product-category">${product.brand}</span>
          <h3 class="product-name" onclick="openQuickView(${product.id})">${product.name}</h3>
          
          <div class="product-rating">
            <span>★ ${product.rating.toFixed(1)}</span>
            <span class="review-count">(${product.reviewsCount} reviews)</span>
          </div>

          <div class="price-box">
            <span class="current-price">₹${product.price.toLocaleString('en-IN')}</span>
            ${product.oldPrice ? `<span class="old-price">₹${product.oldPrice.toLocaleString('en-IN')}</span>` : ''}
          </div>

          <!-- Dedicated Size Selection Buttons Section -->
          <div class="card-size-selector">
            <span class="size-section-label">Select Size:</span>
            <div class="size-btn-group" id="size-group-${product.id}">
              ${(product.sizes || [41,42,43,44,45]).map(s => `
                <button type="button" class="size-btn ${s === cs.size ? 'active' : ''}" data-size="${s}" onclick="selectCardSize(${product.id}, ${s})" ${isUnlisted ? 'disabled' : ''}>${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Quantity Picker & Add to Bag Control Row -->
          <div class="card-qty-row">
            <div class="qty-picker">
              <button type="button" class="card-qty-btn" onclick="changeCardQty(${product.id}, -1)" ${isUnlisted ? 'disabled' : ''}>-</button>
              <span class="card-qty-val" id="card-qty-val-${product.id}">${cs.qty}</span>
              <button type="button" class="card-qty-btn" onclick="changeCardQty(${product.id}, 1)" ${isUnlisted ? 'disabled' : ''}>+</button>
            </div>
            
            ${isUnlisted ? `
              <button type="button" class="btn btn-secondary btn-sm card-add-bag-btn" disabled style="opacity: 0.5; cursor: not-allowed; flex: 1;">
                <i data-lucide="eye-off"></i>
                <span>UNLISTED ITEM</span>
              </button>
            ` : `
              <button type="button" class="btn btn-primary btn-sm card-add-bag-btn" id="add-btn-${product.id}" onclick="addCardToBag(${product.id})">
                <i data-lucide="shopping-bag"></i>
                <span>ADD SIZE ${cs.size} (${cs.qty})</span>
              </button>
            `}
          </div>
        </div>
      </div>
    `;
  }).join('');

  if (window.lucide) lucide.createIcons();
}

function filterByCategory(cat) {
  state.categoryFilter = cat;
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  const targetPill = document.querySelector(`.pill[data-category="${cat}"]`);
  if (targetPill) targetPill.classList.add('active');
  renderProductGrid();
  document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' });
}

function resetFilters() {
  filterByCategory('all');
  state.searchQuery = '';
  document.getElementById('search-input').value = '';
}

// Event Listeners
function setupEventListeners() {
  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      state.categoryFilter = e.target.dataset.category;
      renderProductGrid();
    });
  });

  const searchInput = document.getElementById('search-input');
  const clearSearchBtn = document.getElementById('clear-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      clearSearchBtn.style.display = e.target.value ? 'block' : 'none';
      renderProductGrid();
    });
  }
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      state.searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderProductGrid();
    });
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      renderProductGrid();
    });
  }

  const stockToggle = document.getElementById('in-stock-only');
  if (stockToggle) {
    stockToggle.checked = state.inStockOnly;
    stockToggle.addEventListener('change', (e) => {
      state.inStockOnly = e.target.checked;
      renderProductGrid();
    });
  }

  // Load More Drops Button Listener
  const loadMoreBtn = document.getElementById('load-more-btn');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      state.displayLimit = (state.displayLimit || 8) + 8;
      renderProductGrid();
    });
  }

  // Floating Back to Top Button Listener
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });
  }

  // Drawers
  const cartBtn = document.getElementById('cart-btn');
  const closeCartBtn = document.getElementById('close-cart');
  const cartDrawer = document.getElementById('cart-drawer');
  if (cartBtn && cartDrawer) cartBtn.addEventListener('click', () => cartDrawer.classList.add('active'));
  if (closeCartBtn && cartDrawer) closeCartBtn.addEventListener('click', () => cartDrawer.classList.remove('active'));

  const wishlistBtn = document.getElementById('wishlist-btn');
  const closeWishlistBtn = document.getElementById('close-wishlist');
  const wishlistDrawer = document.getElementById('wishlist-drawer');
  if (wishlistBtn && wishlistDrawer) wishlistBtn.addEventListener('click', () => wishlistDrawer.classList.add('active'));
  if (closeWishlistBtn && wishlistDrawer) closeWishlistBtn.addEventListener('click', () => wishlistDrawer.classList.remove('active'));

  const closeQuickview = document.getElementById('close-quickview');
  const quickviewModal = document.getElementById('quickview-modal');
  if (closeQuickview && quickviewModal) closeQuickview.addEventListener('click', () => quickviewModal.classList.remove('active'));

  const mobileToggle = document.getElementById('mobile-toggle');
  const closeMobileNav = document.getElementById('close-mobile-nav');
  const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
  if (mobileToggle && mobileNavOverlay) mobileToggle.addEventListener('click', () => mobileNavOverlay.classList.add('active'));
  if (closeMobileNav && mobileNavOverlay) closeMobileNav.addEventListener('click', () => mobileNavOverlay.classList.remove('active'));

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => mobileNavOverlay.classList.remove('active'));
  });

  // Store Owner Authentication & Security Event Listeners
  const ownerTrigger = document.getElementById('owner-portal-trigger');
  if (ownerTrigger) ownerTrigger.addEventListener('click', openOwnerLoginModal);

  const openMgrBtn = document.getElementById('open-owner-product-mgr');
  if (openMgrBtn) openMgrBtn.addEventListener('click', () => {
    if (!state.isOwnerAuthenticated) { openOwnerLoginModal(); return; }
    renderAdminProductList();
    document.getElementById('admin-modal')?.classList.add('active');
  });

  const logoutBtn = document.getElementById('owner-logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', logoutOwnerMode);

  const changePinBtn = document.getElementById('owner-change-pin-btn');
  const changePinModal = document.getElementById('change-pin-modal');
  const closeChangePin = document.getElementById('close-change-pin');
  if (changePinBtn && changePinModal) changePinBtn.addEventListener('click', () => changePinModal.classList.add('active'));
  if (closeChangePin && changePinModal) closeChangePin.addEventListener('click', () => changePinModal.classList.remove('active'));

  const ownerLoginForm = document.getElementById('owner-login-form');
  if (ownerLoginForm) {
    ownerLoginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const pin = document.getElementById('owner-pin-input')?.value;
      verifyOwnerPin(pin);
    });
  }

  const closeOwnerLogin = document.getElementById('close-owner-login');
  if (closeOwnerLogin) {
    closeOwnerLogin.addEventListener('click', () => document.getElementById('owner-login-modal')?.classList.remove('active'));
  }

  const changePinForm = document.getElementById('change-pin-form');
  if (changePinForm) {
    changePinForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const curr = document.getElementById('current-pin-input')?.value;
      const next = document.getElementById('new-pin-input')?.value;

      if (curr !== state.ownerPin) {
        showToast("Current PIN is incorrect!", "error");
        return;
      }

      state.ownerPin = next;
      localStorage.setItem('ls_owner_pin', next);
      changePinModal?.classList.remove('active');
      changePinForm.reset();
      showToast("🎉 Security PIN updated successfully!");
    });
  }

  // Global Keyboard Shortcut: Ctrl + Shift + A
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
      e.preventDefault();
      openOwnerLoginModal();
    }
  });

  // Secret Triple-click on Brand Logo to open Owner Login
  const brandLogo = document.getElementById('brand-logo');
  let logoClickCount = 0;
  let logoClickTimer;
  if (brandLogo) {
    brandLogo.addEventListener('click', (e) => {
      logoClickCount++;
      if (logoClickCount === 3) {
        e.preventDefault();
        logoClickCount = 0;
        clearTimeout(logoClickTimer);
        openOwnerLoginModal();
      } else {
        clearTimeout(logoClickTimer);
        logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 1500);
      }
    });
  }

  // Admin Modal Close
  const closeAdmin = document.getElementById('close-admin');
  const adminModal = document.getElementById('admin-modal');
  if (closeAdmin && adminModal) closeAdmin.addEventListener('click', () => adminModal.classList.remove('active'));

  const newProductForm = document.getElementById('add-product-form');
  if (newProductForm) {
    newProductForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!state.isOwnerAuthenticated) {
        openOwnerLoginModal();
        return;
      }
      const name = document.getElementById('new-prod-name').value;
      const brand = document.getElementById('new-prod-brand').value;
      const category = document.getElementById('new-prod-category').value;
      const price = parseFloat(document.getElementById('new-prod-price').value);
      const image = document.getElementById('new-prod-image').value || 'travis_scott_mocha.png';

      const newId = PRODUCTS.length > 0 ? Math.max(...PRODUCTS.map(p => p.id)) + 1 : 1;
      PRODUCTS.push({
        id: newId,
        name,
        brand,
        category,
        price,
        oldPrice: price + 500,
        rating: 4.6,
        reviewsCount: 12,
        badge: "new",
        badgeText: "New Drop",
        image,
        inStock: true,
        stockCount: 5,
        description: "New footwear arrival at Laces & Soles Gokul Road Hubli.",
        sizes: [41, 42, 43, 44, 45]
      });

      saveState();
      renderProductGrid();
      renderAdminProductList();
      newProductForm.reset();
      showToast(`Added ${name} to catalog!`);
    });
  }

  // Promo
  const applyPromoBtn = document.getElementById('apply-promo-btn');
  const promoInput = document.getElementById('promo-input');
  if (applyPromoBtn && promoInput) {
    applyPromoBtn.addEventListener('click', () => {
      const code = promoInput.value.trim().toUpperCase();
      if (code === 'LACES20') {
        state.appliedPromo = { code: 'LACES20', discountPercent: 20 };
        showToast("🎉 Promo Code LACES20 Applied! (20% OFF)");
        updateCartUI();
      } else {
        showToast("Invalid Promo Code", "error");
      }
    });
  }

  const removePromoBtn = document.getElementById('remove-promo');
  if (removePromoBtn) {
    removePromoBtn.addEventListener('click', () => {
      state.appliedPromo = null;
      showToast("Promo Code removed");
      updateCartUI();
    });
  }

  // Checkout Modal & Events
  const checkoutBtn = document.getElementById('checkout-btn');
  const checkoutModal = document.getElementById('checkout-modal');
  const closeCheckoutBtn = document.getElementById('close-checkout');

  if (checkoutBtn && checkoutModal) {
    checkoutBtn.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showToast("Your bag is empty! Add products first.", "error");
        return;
      }
      if (cartDrawer) cartDrawer.classList.remove('active');
      checkoutModal.classList.add('active');
      showCheckoutStep(1);
    });
  }

  if (closeCheckoutBtn && checkoutModal) {
    closeCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
  }

  // Step 1: Shipping / Delivery Form Submission
  const shippingForm = document.getElementById('shipping-form');
  if (shippingForm) {
    shippingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      state.checkoutDetails.name = document.getElementById('customer-name')?.value || 'Customer';
      state.checkoutDetails.phone = document.getElementById('customer-phone')?.value || '';
      state.checkoutDetails.deliveryMethod = document.getElementById('delivery-method-select')?.value || 'courier';
      state.checkoutDetails.address = document.getElementById('customer-address')?.value || '';
      
      showCheckoutStep(2);
    });
  }

  // Step 2: Payment Method Option Toggles
  const paymentGroup = document.getElementById('payment-options-group');
  if (paymentGroup) {
    const paymentOptions = paymentGroup.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
      option.addEventListener('click', () => {
        paymentOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        const radio = option.querySelector('input[type="radio"]');
        if (radio) radio.checked = true;

        const method = option.dataset.method;
        state.checkoutDetails.paymentMethod = method;

        const upiPanel = document.getElementById('payment-fields-upi');
        const cardPanel = document.getElementById('payment-fields-card');
        const codPanel = document.getElementById('payment-fields-cod');

        if (upiPanel) upiPanel.classList.toggle('hidden', method !== 'upi');
        if (cardPanel) cardPanel.classList.toggle('hidden', method !== 'card');
        if (codPanel) codPanel.classList.toggle('hidden', method !== 'cod');
      });
    });
  }

  // Step 2: Payment Form Submission & Receipt / WhatsApp Dispatch
  const paymentForm = document.getElementById('payment-form');
  if (paymentForm) {
    paymentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const payBtn = document.getElementById('pay-now-btn');
      if (payBtn) {
        payBtn.disabled = true;
        payBtn.innerHTML = `<span>PROCESSING PAYMENT...</span>`;
      }

      setTimeout(() => {
        if (payBtn) {
          payBtn.disabled = false;
          payBtn.innerHTML = `<span>CONFIRM & PLACE ORDER</span><i data-lucide="check-circle"></i>`;
        }
        
        const orderId = '#LS-HUB-' + Math.floor(100000 + Math.random() * 900000);
        document.getElementById('confirmed-order-id').textContent = orderId;
        
        const totals = calculateCartTotals();
        const details = state.checkoutDetails;
        const totalItemsCount = state.cart.reduce((sum, i) => sum + i.qty, 0);

        let payModeName = "UPI Payment (QR / GPay / PhonePe)";
        if (details.paymentMethod === 'card') payModeName = "Credit / Debit Card";
        if (details.paymentMethod === 'cod') payModeName = "Cash on Delivery (COD)";

        const deliveryText = details.deliveryMethod === 'pickup'
          ? 'In-Store Pickup (Gokul Road Store, Hubli)'
          : 'Express Delivery (' + (details.address || 'Hubli') + ')';

        // Render HTML Receipt Summary
        const receiptSummaryEl = document.getElementById('receipt-summary');
        if (receiptSummaryEl) {
          receiptSummaryEl.innerHTML = `
            <div style="margin-bottom: 0.8rem; font-weight: bold; border-bottom: 1px solid var(--border-glass); padding-bottom: 0.5rem; color: #fff;">
              Order Confirmation Breakdown
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.88rem; text-align: left;">
              <div>Customer Name: <strong style="color: #fff;">${details.name}</strong></div>
              <div>Mobile Number: <strong style="color: #fff;">${details.phone}</strong></div>
              <div>Delivery Option: <strong style="color: var(--accent-gold);">${deliveryText}</strong></div>
              <div>Payment Mode: <strong style="color: #fff;">${payModeName}</strong></div>
              <div style="margin-top: 0.5rem; font-weight: 700; color: #fff;">Ordered Sneakers & Slides (${totalItemsCount} pairs):</div>
              <div style="background: rgba(255,255,255,0.03); border-radius: 6px; padding: 0.6rem; margin-top: 0.2rem;">
                ${state.cart.map(item => `
                  <div style="display: flex; justify-content: space-between; border-bottom: 1px dashed rgba(255,255,255,0.1); padding: 0.3rem 0;">
                    <span>• ${item.name} <small style="color: var(--text-muted);">(Size: ${item.size || '41'})</small> x${item.qty}</span>
                    <strong style="color: var(--accent-gold);">₹${(item.price * item.qty).toLocaleString('en-IN')}</strong>
                  </div>
                `).join('')}
              </div>
              <div style="margin-top: 0.8rem; font-size: 1.15rem; font-weight: 800; text-align: right; color: var(--accent-gold);">
                Total Amount Paid/Payable: ₹${totals.grandTotal.toLocaleString('en-IN')}
              </div>
            </div>
          `;
        }

        // Formatted Text Message for WhatsApp Order Dispatch
        const waMessageText = 
          `🛍️ *NEW ORDER - LACES & SOLES HUBLI*\n` +
          `=================================\n` +
          `🆔 *Order ID:* ${orderId}\n` +
          `👤 *Name:* ${details.name}\n` +
          `📱 *Phone:* ${details.phone}\n` +
          `🚚 *Delivery Option:* ${deliveryText}\n` +
          `📍 *Address:* ${details.address}\n\n` +
          `👟 *ORDERED DROPS (${totalItemsCount} pairs):*\n` +
          state.cart.map(i => `• ${i.name} (Size: ${i.size || '41'}) x${i.qty} - ₹${(i.price * i.qty).toLocaleString('en-IN')}`).join('\n') + `\n\n` +
          `💰 *TOTAL AMOUNT:* ₹${totals.grandTotal.toLocaleString('en-IN')}\n` +
          `💳 *Payment Method:* ${payModeName}\n` +
          `=================================\n` +
          `Please confirm my order dispatch! Thank you @laces.and.soles`;

        const whatsappBtn = document.getElementById('whatsapp-order-btn');
        if (whatsappBtn) {
          whatsappBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(waMessageText)}`;
        }

        // Copy Order Text logic
        const copyBtn = document.getElementById('copy-receipt-btn');
        if (copyBtn) {
          copyBtn.onclick = () => {
            navigator.clipboard.writeText(waMessageText);
            showToast("📋 Order details copied to clipboard!");
          };
        }

        // Reset Cart and state
        state.cart = [];
        state.appliedPromo = null;
        saveState();
        updateCartUI();

        showCheckoutStep(3);
        showToast("🎉 Order Placed Successfully!");
      }, 1500);
    });
  }

  const finishCheckoutBtn = document.getElementById('finish-checkout-btn');
  if (finishCheckoutBtn) {
    finishCheckoutBtn.addEventListener('click', () => checkoutModal.classList.remove('active'));
  }
}

// Render Admin Product Manage List
function renderAdminProductList() {
  const container = document.getElementById('admin-product-list');
  if (!container) return;

  container.innerHTML = PRODUCTS.map(p => `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.8rem; background: var(--bg-card); border-radius: var(--radius-sm); border: 1px solid var(--border-glass);">
      <div style="display: flex; align-items: center; gap: 0.8rem;">
        <img src="${p.image}" style="width: 45px; height: 45px; border-radius: 4px; object-fit: cover; ${!p.inStock ? 'opacity: 0.5; filter: grayscale(1);' : ''}">
        <div>
          <strong style="display: block; font-size: 0.9rem;">${p.name}</strong>
          <span style="font-size: 0.75rem; color: ${p.inStock ? 'var(--accent-gold)' : 'var(--accent-red)'}; font-weight: 600;">
            ₹${p.price.toLocaleString('en-IN')} | Status: ${p.inStock ? '✅ Listed in Store' : '❌ Unlisted'}
          </span>
        </div>
      </div>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn ${p.inStock ? 'btn-secondary' : 'btn-primary'} btn-sm" onclick="toggleProductStock(${p.id})">
          ${p.inStock ? 'Unlist' : 'Relist / List'}
        </button>
        <button class="btn btn-secondary btn-sm" style="color: var(--accent-red);" onclick="deleteProduct(${p.id})">
          Delete
        </button>
      </div>
    </div>
  `).join('');
}

function toggleProductStock(id) {
  if (!state.isOwnerAuthenticated) {
    openOwnerLoginModal();
    return;
  }
  const prod = PRODUCTS.find(p => p.id === id);
  if (prod) {
    prod.inStock = !prod.inStock;
    saveState();
    renderProductGrid();
    renderAdminProductList();
    showToast(`${prod.name} status updated: ${prod.inStock ? 'Listed in Store' : 'Unlisted'}`);
  }
}

function deleteProduct(id) {
  if (!state.isOwnerAuthenticated) {
    openOwnerLoginModal();
    return;
  }
  PRODUCTS = PRODUCTS.filter(p => p.id !== id);
  saveState();
  renderProductGrid();
  renderAdminProductList();
  showToast("Product removed from catalog");
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  state.selectedQuickViewProduct = product;
  state.selectedSize = product.sizes[0];

  const modalBody = document.getElementById('quickview-body');
  const quickviewModal = document.getElementById('quickview-modal');

  modalBody.innerHTML = `
    <div class="quickview-grid">
      <div class="quickview-gallery">
        <div class="main-image-box">
          <img src="${product.image}" alt="${product.name}">
        </div>
      </div>

      <div class="quickview-details">
        <span class="product-category">${product.brand}</span>
        <h2 style="font-family: var(--font-display); font-size: 1.8rem;">${product.name}</h2>
        
        <div class="product-rating" style="margin-bottom: 1rem;">
          <span>★ ${product.rating.toFixed(1)}</span>
          <span class="review-count">(${product.reviewsCount} verified reviews)</span>
        </div>

        <div class="quickview-price">₹${product.price.toLocaleString('en-IN')}</div>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.6;">
          ${product.description}
        </p>

        <!-- Size Picker -->
        <div class="option-group">
          <span class="option-label">Select Available Size (41 to 45): <strong id="selected-size-val" class="accent-glow-text">Size ${state.selectedSize}</strong></span>
          <div class="size-chips">
            ${product.sizes.map(size => `
              <button class="size-chip ${size === state.selectedSize ? 'selected' : ''}" onclick="selectModalSize(${size})">
                Size ${size}
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Action buttons -->
        <div style="display: flex; gap: 0.8rem; flex-wrap: wrap;" class="mt-4">
          ${!product.inStock ? `
            <button class="btn btn-secondary" style="flex: 1; opacity: 0.5; cursor: not-allowed;" disabled>
              <i data-lucide="eye-off"></i>
              <span>CURRENTLY UNLISTED</span>
            </button>
          ` : `
            <button class="btn btn-primary btn-glow" style="flex: 1;" onclick="addQuickViewToCart()">
              <span>ADD TO BAG</span>
              <i data-lucide="shopping-bag"></i>
            </button>
          `}
          
          <button class="btn btn-secondary" onclick="orderViaInstagram('${product.name}')">
            <i data-lucide="instagram"></i>
            <span>ORDER ON IG</span>
          </button>
        </div>

        <p style="font-size: 0.78rem; color: var(--text-dim); margin-top: 1rem; text-align: center;">
          📍 Available for in-store try-on at Gokul Road, Hubli.
        </p>
      </div>
    </div>
  `;

  if (window.lucide) lucide.createIcons();
  quickviewModal.classList.add('active');
}

function selectModalSize(size) {
  state.selectedSize = size;
  document.getElementById('selected-size-val').textContent = `Size ${size}`;
  document.querySelectorAll('.size-chip').forEach(chip => {
    chip.classList.toggle('selected', parseInt(chip.textContent.replace('Size', '').trim()) === size);
  });
}

function addQuickViewToCart() {
  if (!state.selectedQuickViewProduct) return;
  if (!state.selectedQuickViewProduct.inStock) {
    showToast("This item is unlisted and cannot be added to bag.", "error");
    return;
  }
  addToCart(state.selectedQuickViewProduct.id, state.selectedSize);
  document.getElementById('quickview-modal').classList.remove('active');
}

function orderViaInstagram(productName) {
  window.open(`https://www.instagram.com/laces.and.soles/`, '_blank');
  showToast("Opening Instagram @laces.and.soles...");
}

function openWhatsAppOrder(contextMsg = 'General Inquiries') {
  const text = encodeURIComponent(`Hi Laces & Soles Hubli! I have an inquiry regarding: ${contextMsg}.`);
  window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
}

function orderCartViaWhatsApp() {
  if (state.cart.length === 0) return;
  const itemsStr = state.cart.map(i => `${i.name} (Size ${i.size}, Qty: ${i.qty})`).join('\n- ');
  const totals = calculateCartTotals();
  const text = encodeURIComponent(`Hi Laces & Soles Hubli! I would like to order the following footwear from your website:\n\n- ${itemsStr}\n\nTotal Payable: ₹${totals.grandTotal.toLocaleString('en-IN')}`);
  window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
}

function addToCart(productId, size = 41, qty = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (!product.inStock) {
    showToast(`${product.name} is unlisted by store admin.`, "error");
    return;
  }

  const cartKey = `${product.id}_${size}`;
  const existingIndex = state.cart.findIndex(item => item.cartKey === cartKey);
  if (existingIndex > -1) {
    state.cart[existingIndex].qty += qty;
  } else {
    state.cart.push({
      cartKey,
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      qty: qty
    });
  }

  saveState();
  updateCartUI();
  showToast(`Added ${product.name} (Size ${size}) to Bag!`);
}

function updateCartQuantity(cartKey, delta) {
  const itemIndex = state.cart.findIndex(item => item.cartKey === cartKey);
  if (itemIndex === -1) return;

  state.cart[itemIndex].qty += delta;
  if (state.cart[itemIndex].qty <= 0) {
    state.cart.splice(itemIndex, 1);
  }

  saveState();
  updateCartUI();
}

function removeFromCart(cartKey) {
  state.cart = state.cart.filter(item => item.cartKey !== cartKey);
  saveState();
  updateCartUI();
}

function calculateCartTotals() {
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let discountAmount = 0;

  if (state.appliedPromo) {
    discountAmount = subtotal * (state.appliedPromo.discountPercent / 100);
  }

  const shippingCost = subtotal > 1500 || subtotal === 0 ? 0 : 150;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingCost);

  return { subtotal, discountAmount, shippingCost, grandTotal };
}

function updateCartUI() {
  const cartBadge = document.getElementById('cart-badge');
  const cartItemCount = document.getElementById('cart-item-count');
  const cartTotalPreview = document.getElementById('cart-total-preview');
  const container = document.getElementById('cart-items-container');

  const totalItems = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const totals = calculateCartTotals();

  if (cartBadge) cartBadge.textContent = totalItems;
  if (cartItemCount) cartItemCount.textContent = totalItems;
  if (cartTotalPreview) cartTotalPreview.textContent = `₹${totals.grandTotal.toLocaleString('en-IN')}`;

  const freeShipText = document.getElementById('free-shipping-text');
  const freeShipFill = document.getElementById('shipping-progress-fill');
  if (freeShipText && freeShipFill) {
    if (totals.subtotal >= 1500) {
      freeShipText.innerHTML = `🎉 You've unlocked <strong>FREE Express Shipping across India!</strong>`;
      freeShipFill.style.width = '100%';
    } else {
      const remaining = 1500 - totals.subtotal;
      freeShipText.innerHTML = `Add <strong>₹${remaining.toLocaleString('en-IN')}</strong> more for <strong>FREE Shipping</strong>`;
      const pct = Math.min(100, (totals.subtotal / 1500) * 100);
      freeShipFill.style.width = `${pct}%`;
    }
  }

  if (container) {
    if (state.cart.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i data-lucide="shopping-bag" style="width: 48px; height: 48px; opacity: 0.3; margin-bottom: 1rem;"></i>
          <p style="font-weight: 700; font-size: 1.1rem; color: var(--text-main);">Your bag is empty</p>
          <p style="font-size: 0.88rem;">Find your authentic Air Jordan Chicago, Ultraboost, or Yeezy sneakers.</p>
        </div>
      `;
    } else {
      container.innerHTML = state.cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.name}</h4>
            <div class="cart-item-meta">Size: ${item.size}</div>
            <div class="cart-item-bottom">
              <div class="qty-controls">
                <button class="qty-btn" onclick="updateCartQuantity('${item.cartKey}', -1)">-</button>
                <span class="qty-num">${item.qty}</span>
                <button class="qty-btn" onclick="updateCartQuantity('${item.cartKey}', 1)">+</button>
              </div>
              <strong style="font-family: var(--font-bebas); font-size: 1.2rem;">₹${(item.price * item.qty).toLocaleString('en-IN')}</strong>
            </div>
          </div>
          <button class="remove-item-btn" onclick="removeFromCart('${item.cartKey}')" title="Remove">✕</button>
        </div>
      `).join('');
    }
    if (window.lucide) lucide.createIcons();
  }

  document.getElementById('cart-subtotal').textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
  
  const discountRow = document.getElementById('discount-row');
  if (totals.discountAmount > 0) {
    discountRow.style.display = 'flex';
    document.getElementById('cart-discount').textContent = `-₹${totals.discountAmount.toLocaleString('en-IN')}`;
  } else {
    discountRow.style.display = 'none';
  }

  document.getElementById('cart-shipping').textContent = totals.shippingCost === 0 ? 'FREE' : `₹${totals.shippingCost}`;
  document.getElementById('cart-grand-total').textContent = `₹${totals.grandTotal.toLocaleString('en-IN')}`;

  document.getElementById('co-subtotal').textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
  document.getElementById('co-shipping').textContent = totals.shippingCost === 0 ? 'FREE' : `₹${totals.shippingCost}`;
  document.getElementById('co-total').textContent = `₹${totals.grandTotal.toLocaleString('en-IN')}`;

  const promoTag = document.getElementById('promo-applied-tag');
  if (promoTag) promoTag.classList.toggle('hidden', !state.appliedPromo);
}

function toggleWishlist(productId) {
  const index = state.wishlist.findIndex(item => item.id === productId);
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Removed ${product.name} from Wishlist`);
  } else {
    state.wishlist.push(product);
    showToast(`Saved ${product.name} to Wishlist! ❤️`);
  }

  saveState();
  updateWishlistUI();
  renderProductGrid();
}

function updateWishlistUI() {
  const badge = document.getElementById('wishlist-badge');
  const count = document.getElementById('wishlist-item-count');
  const container = document.getElementById('wishlist-items-container');

  if (badge) badge.textContent = state.wishlist.length;
  if (count) count.textContent = state.wishlist.length;

  if (container) {
    if (state.wishlist.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <i data-lucide="heart" style="width: 48px; height: 48px; opacity: 0.3; margin-bottom: 1rem;"></i>
          <p style="font-weight: 700; font-size: 1.1rem; color: var(--text-main);">No saved footwear</p>
          <p style="font-size: 0.88rem;">Click the heart icon on any product to save it.</p>
        </div>
      `;
    } else {
      container.innerHTML = state.wishlist.map(product => `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.name}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${product.name}</h4>
            <div class="cart-item-meta">₹${product.price.toLocaleString('en-IN')}</div>
            <button class="btn btn-primary btn-sm mt-4" onclick="addToCart(${product.id}); toggleWishlist(${product.id})">
              Move to Bag
            </button>
          </div>
          <button class="remove-item-btn" onclick="toggleWishlist(${product.id})" title="Remove">✕</button>
        </div>
      `).join('');
    }
    if (window.lucide) lucide.createIcons();
  }
}

function showCheckoutStep(stepNumber) {
  document.getElementById('checkout-step-1').classList.toggle('hidden', stepNumber !== 1);
  document.getElementById('checkout-step-2').classList.toggle('hidden', stepNumber !== 2);
  document.getElementById('checkout-step-3').classList.toggle('hidden', stepNumber !== 3);

  document.getElementById('step-1-label').classList.toggle('active', stepNumber >= 1);
  document.getElementById('step-2-label').classList.toggle('active', stepNumber >= 2);
  document.getElementById('step-3-label').classList.toggle('active', stepNumber === 3);

  if (stepNumber === 2) {
    const totals = calculateCartTotals();
    const subtotalEl = document.getElementById('co-subtotal');
    const shippingEl = document.getElementById('co-shipping');
    const totalEl = document.getElementById('co-total');

    if (subtotalEl) subtotalEl.textContent = `₹${totals.subtotal.toLocaleString('en-IN')}`;
    if (shippingEl) shippingEl.textContent = totals.shipping === 0 ? 'FREE' : `₹${totals.shipping.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹${totals.grandTotal.toLocaleString('en-IN')}`;

    const upiQrImg = document.getElementById('upi-qr-image');
    if (upiQrImg) {
      const upiString = `upi://pay?pa=lacesandsoles@upi&pn=LacesAndSolesHubli&am=${totals.grandTotal}&cu=INR`;
      upiQrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiString)}`;
    }
  }
  if (window.lucide) lucide.createIcons();
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i data-lucide="${type === 'success' ? 'check-circle-2' : 'alert-circle'}" style="color: ${type === 'success' ? 'var(--accent-gold)' : 'var(--accent-red)'}"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  if (window.lucide) lucide.createIcons();

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
