// KisanMart — Internationalization (i18n)
// Detects browser language and sets accordingly

const translations = {
  en: {
    // Navbar
    navBrand: "KisanMart",
    navHome: "Home",
    navProducts: "Products",
    navAbout: "About",
    navStats: "Our Stats",
    navTestimonials: "Reviews",
    navContact: "Contact",
    navCart: "Cart",
    langToggle: "Hindi",

    // CTA
    ctaTitle: "Ready to Transform Your Farm?",
    ctaSubtitle: "Join thousands of farmers who have made the switch to organic. Your soil will thank you.",
    ctaBtn: "Explore Products",

    // Misc
    viewAll: "View All Products",

    // Hero
    heroTitle: "Pure Organic Fertilizers for Healthy Crops",
    heroSubtitle: "Trusted by 10,000+ Indian Farmers — 100% Natural, 100% Safe",
    heroCta: "Shop Now",
    heroLearnMore: "Learn More",
    heroTag: "100% Organic Certified",

    // Trust bar
    trust1Num: "10,000+",
    trust1Label: "Farmers Served",
    trust2Num: "100%",
    trust2Label: "Organic Certified",
    trust3Num: "15+",
    trust3Label: "Years Experience",
    trust4Num: "5",
    trust4Label: "Premium Products",

    // Products
    productsTitle: "Our Products",
    productsSubtitle: "Handpicked organic fertilizers for every type of crop and soil",
    addToCart: "Add to Cart",
    buyNow: "Buy Now",
    inStock: "In Stock",
    perBag: "per bag",
    filterAll: "All",
    filterCompost: "Compost",
    filterBio: "Bio-Fertilizer",
    filterExtract: "Extract",

    // Stats section
    statsTitle: "Why Farmers Trust Us",
    statsSubtitle: "Real results backed by data — see the difference organic makes",
    chartYieldTitle: "Yield Improvement by Product (%)",
    chartGrowthTitle: "Farmers Served (2020–2025)",
    chartShareTitle: "Product Sales Share",
    statYears: "Years in Business",
    statFarmers: "Happy Farmers",
    statProducts: "Products Sold",
    statStates: "States Covered",

    // Testimonials
    testimonialsTitle: "What Farmers Say",
    testimonialsSubtitle: "Real reviews from farmers across India",

    // Why Organic
    whyTitle: "Why Choose Organic?",
    whySub: "Organic fertilizers are better for your crops, your soil, and your family",
    why1Title: "Safe for Family",
    why1Desc: "No harmful chemicals. Safe for children and animals on the farm.",
    why2Title: "Better Yield",
    why2Desc: "Organic matter improves soil structure and boosts long-term productivity.",
    why3Title: "Saves Money",
    why3Desc: "Healthier soil needs less input over time. Save more each season.",
    why4Title: "Eco Friendly",
    why4Desc: "Protect rivers, groundwater, and local wildlife with natural inputs.",
    why5Title: "Govt Approved",
    why5Desc: "All products carry NPOP organic certification as per govt standards.",
    why6Title: "Fast Delivery",
    why6Desc: "Delivered to your village in 3–5 days with real-time tracking.",

    // Cart
    cartTitle: "Your Cart",
    cartEmpty: "Your cart is empty",
    cartShop: "Continue Shopping",
    cartRemove: "Remove",
    cartQty: "Qty",
    cartSubtotal: "Subtotal",
    cartDelivery: "Delivery",
    cartFree: "FREE",
    cartTotal: "Total",
    cartCheckout: "Proceed to Checkout",
    cartAddress: "Delivery Address",
    cartName: "Full Name",
    cartPhone: "Phone Number",
    cartAddressLine: "Address",
    cartCity: "City / Village",
    cartState: "State",
    cartPin: "PIN Code",
    cartPayNow: "Pay Now with Razorpay/UPI",
    cartCOD: "Cash on Delivery",

    // Success
    successTitle: "Order Placed Successfully!",
    successMsg: "Thank you for your order. We will deliver it within 3–5 business days.",
    successWhatsapp: "Share on WhatsApp",
    successShop: "Continue Shopping",

    // Footer
    footerTagline: "Bringing nature's best to Indian farms",
    footerContact: "Contact Us",
    footerPhone: "+91 98765 43210",
    footerEmail: "hello@kisanmart.in",
    footerAddress: "123 Green Street, Agra, UP 282001",
    footerWhatsapp: "Chat on WhatsApp",
    footerRights: "© 2025 KisanMart. All rights reserved.",
    footerOrganic: "100% Organic",
  },

  hi: {
    // Navbar
    navBrand: "किसानमार्ट",
    navHome: "होम",
    navProducts: "उत्पाद",
    navAbout: "हमारे बारे में",
    navStats: "हमारे आँकड़े",
    navTestimonials: "समीक्षाएं",
    navContact: "संपर्क",
    navCart: "कार्ट",
    langToggle: "English",

    // CTA
    ctaTitle: "अपना खेत बदलने के लिए तैयार हैं?",
    ctaSubtitle: "हजारों किसानों के साथ जुड़ें जो जैविक खेती अपना चुके हैं।",
    ctaBtn: "उत्पाद देखें",

    // Misc
    viewAll: "सभी उत्पाद देखें",

    // Hero
    heroTitle: "स्वस्थ फसल के लिए शुद्ध जैविक खाद",
    heroSubtitle: "10,000+ भारतीय किसानों का भरोसा — 100% प्राकृतिक, 100% सुरक्षित",
    heroCta: "अभी खरीदें",
    heroLearnMore: "और जानें",
    heroTag: "100% जैविक प्रमाणित",

    // Trust bar
    trust1Num: "10,000+",
    trust1Label: "किसान सेवित",
    trust2Num: "100%",
    trust2Label: "जैविक प्रमाणित",
    trust3Num: "15+",
    trust3Label: "वर्षों का अनुभव",
    trust4Num: "5",
    trust4Label: "प्रीमियम उत्पाद",

    // Products
    productsTitle: "हमारे उत्पाद",
    productsSubtitle: "हर फसल और मिट्टी के लिए चुनिंदा जैविक खाद",
    addToCart: "कार्ट में जोड़ें",
    buyNow: "अभी खरीदें",
    inStock: "उपलब्ध है",
    perBag: "प्रति बैग",
    filterAll: "सभी",
    filterCompost: "कम्पोस्ट",
    filterBio: "जैव उर्वरक",
    filterExtract: "अर्क",

    // Stats
    statsTitle: "किसान हम पर क्यों भरोसा करते हैं",
    statsSubtitle: "आँकड़ों से सिद्ध — जैविक खाद का असल फर्क देखें",
    chartYieldTitle: "उत्पाद के अनुसार उपज में सुधार (%)",
    chartGrowthTitle: "सेवित किसान (2020–2025)",
    chartShareTitle: "उत्पाद बिक्री हिस्सेदारी",
    statYears: "व्यापार के वर्ष",
    statFarmers: "खुश किसान",
    statProducts: "बेचे गए उत्पाद",
    statStates: "राज्य कवर",

    // Testimonials
    testimonialsTitle: "किसान क्या कहते हैं",
    testimonialsSubtitle: "पूरे भारत के किसानों की असल समीक्षाएं",

    // Why Organic
    whyTitle: "जैविक क्यों चुनें?",
    whySub: "जैविक खाद आपकी फसल, मिट्टी और परिवार के लिए बेहतर है",
    why1Title: "परिवार के लिए सुरक्षित",
    why1Desc: "कोई हानिकारक रसायन नहीं। खेत पर बच्चों और जानवरों के लिए सुरक्षित।",
    why2Title: "बेहतर उपज",
    why2Desc: "जैविक पदार्थ मिट्टी की संरचना सुधारता है और दीर्घकालिक उत्पादकता बढ़ाता है।",
    why3Title: "पैसे बचाएं",
    why3Desc: "स्वस्थ मिट्टी को समय के साथ कम इनपुट की जरूरत होती है। हर सीजन में ज्यादा बचत।",
    why4Title: "पर्यावरण अनुकूल",
    why4Desc: "प्राकृतिक इनपुट से नदियों, भूजल और स्थानीय जीव-जंतुओं की रक्षा करें।",
    why5Title: "सरकार अनुमोदित",
    why5Desc: "सभी उत्पादों में सरकारी मानकों के अनुसार NPOP जैविक प्रमाणन है।",
    why6Title: "तेज डिलीवरी",
    why6Desc: "3–5 दिनों में आपके गाँव में डिलीवरी, रियल-टाइम ट्रैकिंग के साथ।",

    // Cart
    cartTitle: "आपका कार्ट",
    cartEmpty: "आपका कार्ट खाली है",
    cartShop: "खरीदारी जारी रखें",
    cartRemove: "हटाएं",
    cartQty: "मात्रा",
    cartSubtotal: "उप-कुल",
    cartDelivery: "डिलीवरी",
    cartFree: "मुफ़्त",
    cartTotal: "कुल",
    cartCheckout: "चेकआउट करें",
    cartAddress: "डिलीवरी पता",
    cartName: "पूरा नाम",
    cartPhone: "फोन नंबर",
    cartAddressLine: "पता",
    cartCity: "शहर / गाँव",
    cartState: "राज्य",
    cartPin: "PIN कोड",
    cartPayNow: "Razorpay/UPI से भुगतान करें",
    cartCOD: "कैश ऑन डिलीवरी",

    // Success
    successTitle: "ऑर्डर सफलतापूर्वक दिया गया!",
    successMsg: "आपके ऑर्डर के लिए धन्यवाद। हम इसे 3–5 कार्य दिवसों में डिलीवर करेंगे।",
    successWhatsapp: "WhatsApp पर शेयर करें",
    successShop: "खरीदारी जारी रखें",

    // Footer
    footerTagline: "भारतीय खेतों के लिए प्रकृति का सर्वश्रेष्ठ",
    footerContact: "संपर्क करें",
    footerPhone: "+91 98765 43210",
    footerEmail: "hello@kisanmart.in",
    footerAddress: "123 ग्रीन स्ट्रीट, आगरा, UP 282001",
    footerWhatsapp: "WhatsApp पर चैट करें",
    footerRights: "© 2025 किसानमार्ट। सर्वाधिकार सुरक्षित।",
    footerOrganic: "100% जैविक",
  }
};

// Detect language from browser
function detectLanguage() {
  const saved = localStorage.getItem('kisanmart_lang');
  if (saved) return saved;
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return browserLang.startsWith('hi') ? 'hi' : 'en';
}

let currentLang = detectLanguage();

function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) ||
         (translations['en'] && translations['en'][key]) || key;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kisanmart_lang', lang);
  applyTranslations();
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'hi' : 'en');
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    el.innerHTML = t(el.getAttribute('data-i18n-html'));
  });
  // Update html lang attribute
  document.documentElement.lang = currentLang;
  // Re-render dynamic components
  if (typeof renderProducts === 'function') renderProducts();
  if (typeof renderCart === 'function') renderCart();
}
