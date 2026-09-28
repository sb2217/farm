// KisanMart — Checkout & Payment

// ⚠️ REPLACE with your actual Razorpay live key before going live
const RAZORPAY_KEY = "rzp_test_XXXXXXXXXXXXXXXX";

function validateForm() {
  const fields = ['checkout-name', 'checkout-phone', 'checkout-address', 'checkout-city', 'checkout-state', 'checkout-pin'];
  let valid = true;
  fields.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if (!el.value.trim()) {
      el.classList.add('error');
      valid = false;
    } else {
      el.classList.remove('error');
    }
  });
  if (!valid) {
    showToast('Please fill all delivery details');
    return false;
  }
  const phone = document.getElementById('checkout-phone').value.trim();
  if (!/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById('checkout-phone').classList.add('error');
    showToast('Please enter a valid 10-digit Indian mobile number');
    return false;
  }
  return true;
}

function initRazorpay() {
  if (!validateForm()) return;
  const totalAmount = getCartTotal();
  if (totalAmount === 0) {
    showToast('Your cart is empty');
    return;
  }

  const name = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();

  const options = {
    key: RAZORPAY_KEY,
    amount: totalAmount * 100, // in paise
    currency: "INR",
    name: "KisanMart",
    description: "Organic Fertilizer Order",
    image: "images/logo.png",
    handler: function(response) {
      // Payment successful
      saveOrder(response.razorpay_payment_id, 'razorpay');
      cart = [];
      saveCart();
      window.location.href = 'success.html?method=razorpay&id=' + response.razorpay_payment_id;
    },
    prefill: {
      name: name,
      contact: phone,
    },
    notes: {
      address: document.getElementById('checkout-address').value.trim()
    },
    theme: {
      color: "#2D6A4F"
    },
    modal: {
      ondismiss: function() {
        showToast('Payment cancelled. Please try again.');
      }
    }
  };

  try {
    const rzp = new Razorpay(options);
    rzp.on('payment.failed', function(response) {
      showToast('Payment failed: ' + response.error.description);
    });
    rzp.open();
  } catch(e) {
    showToast('Payment gateway unavailable. Check your internet connection.');
    console.error(e);
  }
}

function placeCOD() {
  if (!validateForm()) return;
  const totalAmount = getCartTotal();
  if (totalAmount === 0) {
    showToast('Your cart is empty');
    return;
  }
  const orderId = 'COD' + Date.now();
  saveOrder(orderId, 'cod');
  cart = [];
  saveCart();
  window.location.href = 'success.html?method=cod&id=' + orderId;
}

function saveOrder(paymentId, method) {
  const orders = JSON.parse(localStorage.getItem('kisanmart_orders') || '[]');
  const order = {
    id: paymentId,
    method: method,
    date: new Date().toISOString(),
    items: cart.map(item => {
      const p = products.find(prod => prod.id === item.id);
      return { name: p.name.en, qty: item.qty, price: p.price };
    }),
    total: getCartTotal(),
    address: {
      name: document.getElementById('checkout-name')?.value,
      phone: document.getElementById('checkout-phone')?.value,
      address: document.getElementById('checkout-address')?.value,
      city: document.getElementById('checkout-city')?.value,
      state: document.getElementById('checkout-state')?.value,
      pin: document.getElementById('checkout-pin')?.value,
    }
  };
  orders.push(order);
  localStorage.setItem('kisanmart_orders', JSON.stringify(orders));
  localStorage.setItem('kisanmart_last_order', JSON.stringify(order));
}
