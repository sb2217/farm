// KisanMart — Main App Logic

// ── Product Rendering ─────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(product => {
    const name = product.name[currentLang] || product.name.en;
    const desc = product.desc[currentLang] || product.desc.en;
    const unit = product.unit[currentLang] || product.unit.en;
    const badge = product.badge[currentLang] || product.badge.en;
    const highlights = (product.highlights[currentLang] || product.highlights.en).slice(0, 2);
    const stars = '★'.repeat(Math.floor(product.rating)) + (product.rating % 1 >= 0.5 ? '½' : '');
    const discount = Math.round((1 - product.price / product.originalPrice) * 100);

    return `
      <div class="product-card" data-id="${product.id}" data-aos>
        <div class="product-img-wrap">
          <img src="${product.image}" alt="${name}" loading="lazy">
          <span class="product-badge" style="background:${product.badgeColor}">${badge}</span>
          <span class="product-discount">-${discount}%</span>
          <div class="product-overlay">
            <button onclick="addToCart(${product.id})" class="btn btn-overlay">${t('addToCart')}</button>
          </div>
        </div>
        <div class="product-body">
          <h3 class="product-name">${name}</h3>
          <p class="product-unit">📦 ${unit}</p>
          <div class="product-highlights">
            ${highlights.map(h => `<span class="tag">✓ ${h}</span>`).join('')}
          </div>
          <p class="product-desc">${desc.substring(0, 80)}...</p>
          <div class="product-rating">
            <span class="stars">${stars}</span>
            <span class="rating-num">${product.rating}</span>
            <span class="rating-count">(${product.reviews})</span>
          </div>
          <div class="product-price-row">
            <div class="product-price-wrap">
              <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
              <span class="product-original">₹${product.originalPrice.toLocaleString('en-IN')}</span>
            </div>
            <span class="product-instock">✔ ${t('inStock')}</span>
          </div>
          <div class="product-actions">
            <button onclick="addToCart(${product.id})" class="btn btn-outline">${t('addToCart')}</button>
            <button onclick="buyNow(${product.id})" class="btn btn-primary">${t('buyNow')}</button>
          </div>
        </div>
      </div>`;
  }).join('');
}

function buyNow(productId) {
  addToCart(productId);
  window.location.href = 'cart.html';
}

// ── Product Filter ────────────────────────────────────────
function setFilter(filter) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === filter);
  });
  const grid = document.getElementById('products-grid');
  grid.classList.add('fade-out');
  setTimeout(() => {
    renderProducts(filter);
    grid.classList.remove('fade-out');
    attachScrollObserver();
  }, 300);
}

// ── Testimonials Carousel ─────────────────────────────────
let testimonialIndex = 0;
let testimonialTimer;

function renderTestimonials() {
  const container = document.getElementById('testimonials-track');
  if (!container) return;
  container.innerHTML = testimonials.map((t_, i) => `
    <div class="testimonial-card ${i === 0 ? 'active' : ''}">
      <div class="testimonial-avatar" style="background:${t_.color}">${t_.avatar}</div>
      <div class="testimonial-body">
        <div class="testimonial-stars">${'★'.repeat(t_.rating)}</div>
        <p class="testimonial-text">"${(t_.text[currentLang] || t_.text.en)}"</p>
        <div class="testimonial-author">
          <strong>${t_.name[currentLang] || t_.name.en}</strong>
          <span>${t_.location[currentLang] || t_.location.en}</span>
        </div>
      </div>
    </div>`).join('');
  renderDots();
  startTestimonialAuto();
}

function renderDots() {
  const dots = document.getElementById('testimonial-dots');
  if (!dots) return;
  dots.innerHTML = testimonials.map((_, i) => `
    <button class="dot ${i === 0 ? 'active' : ''}" onclick="goToTestimonial(${i})"></button>`).join('');
}

function goToTestimonial(index) {
  testimonialIndex = (index + testimonials.length) % testimonials.length;
  document.querySelectorAll('.testimonial-card').forEach((card, i) => {
    card.classList.toggle('active', i === testimonialIndex);
  });
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === testimonialIndex);
  });
}

function nextTestimonial() { goToTestimonial(testimonialIndex + 1); }
function prevTestimonial() { goToTestimonial(testimonialIndex - 1); }

function startTestimonialAuto() {
  clearInterval(testimonialTimer);
  testimonialTimer = setInterval(nextTestimonial, 4500);
}

// ── Scroll Animations (IntersectionObserver) ──────────────
function attachScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));
}

// ── Navbar Scroll Effect ──────────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });

  // Mobile hamburger
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navMenu.classList.toggle('open');
    });
    // Close on link click
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navMenu.classList.remove('open');
      });
    });
  }
}

// ── Leaf Particle Animation ───────────────────────────────
function createLeaves() {
  const hero = document.getElementById('hero');
  if (!hero) return;
  const leaves = ['🌿', '🍃', '☘️', '🌱'];
  for (let i = 0; i < 12; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'leaf-particle';
    leaf.textContent = leaves[Math.floor(Math.random() * leaves.length)];
    leaf.style.cssText = `
      left: ${Math.random() * 100}%;
      animation-delay: ${Math.random() * 6}s;
      animation-duration: ${6 + Math.random() * 6}s;
      font-size: ${14 + Math.random() * 12}px;
      opacity: ${0.4 + Math.random() * 0.4};
    `;
    hero.appendChild(leaf);
  }
}

// ── Smooth Scroll for anchor links ───────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// ── Init App ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initNavbar();
  renderProducts();
  renderTestimonials();
  createLeaves();
  attachScrollObserver();
  initSmoothScroll();

  // Filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => setFilter(btn.getAttribute('data-filter')));
  });

  // Language toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      toggleLanguage();
      renderTestimonials();
    });
  }

  // WhatsApp float button pulse
  const wa = document.querySelector('.whatsapp-float');
  if (wa) setInterval(() => wa.classList.toggle('pulse'), 2000);
});
