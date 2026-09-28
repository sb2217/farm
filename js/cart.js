// KisanMart — Cart Logic

let cart = JSON.parse(localStorage.getItem('kisanmart_cart')) || [];

function saveCart() {
  localStorage.setItem('kisanmart_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'flex' : 'none';
    if (totalItems > 0) {
      badge.classList.add('bounce');
      setTimeout(() => badge.classList.remove('bounce'), 600);
    }
  });
}

function addToCart(productId, qty = 1) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id: productId, qty: qty });
  }
  saveCart();
  showToast('Added to Cart');
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.id);
    return sum + (product ? product.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const summaryEl = document.getElementById('cart-summary');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon"><i class="fa-solid fa-cart-shopping"></i></div>
        <h3 data-i18n="cartEmpty">${t('cartEmpty')}</h3>
        <a href="products.html" class="btn btn-royal" data-i18n="cartShop">${t('cartShop')}</a>
      </div>`;
    if (summaryEl) summaryEl.style.display = 'none';
    return;
  }

  if (summaryEl) summaryEl.style.display = 'block';

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return '';
    const total = product.price * item.qty;
    return `
      <div class="cart-item" data-id="${product.id}">
        <div class="cart-item-img">
          <img src="${product.image}" alt="${product.name[currentLang]}">
        </div>
        <div class="cart-item-details">
          <h4>${product.name[currentLang]}</h4>
          <p class="cart-item-unit">${product.unit[currentLang]}</p>
          <p class="cart-item-price">₹${product.price.toLocaleString('en-IN')}</p>
        </div>
        <div class="cart-item-controls">
          <div class="qty-control">
            <button onclick="updateQty(${product.id}, -1)" class="qty-btn">−</button>
            <span class="qty-num">${item.qty}</span>
            <button onclick="updateQty(${product.id}, 1)" class="qty-btn">+</button>
          </div>
          <p class="cart-item-total">₹${total.toLocaleString('en-IN')}</p>
          <button onclick="removeFromCart(${product.id})" class="cart-remove" title="${t('cartRemove')}"><i class="fa-solid fa-trash-can"></i></button>
        </div>
      </div>`;
  }).join('');

  // Update summary
  const subtotal = getCartTotal();
  document.getElementById('cart-subtotal').textContent = '₹' + subtotal.toLocaleString('en-IN');
  document.getElementById('cart-delivery').textContent = t('cartFree');
  document.getElementById('cart-total').textContent = '₹' + subtotal.toLocaleString('en-IN');
}

// Toast notification
function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// Initialize badge on load
document.addEventListener('DOMContentLoaded', updateCartBadge);
