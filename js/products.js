// KisanMart — Product Catalogue
// Edit product details here or via Edit Mode on the website

const products = [
  {
    id: 1,
    category: "compost",
    name: { en: "Premium Compost", hi: "प्रीमियम खाद" },
    price: 499,
    originalPrice: 649,
    unit: { en: "5 kg bag", hi: "5 किलो बैग" },
    rating: 4.8,
    reviews: 342,
    badge: { en: "Best Seller", hi: "बेस्ट सेलर" },
    badgeColor: "#D4A017",
    image: "images/products/compost.jpg",
    desc: {
      en: "Rich organic compost made from farm waste. Enriches soil with essential nutrients and improves water retention. Ideal for wheat, rice, vegetables and all crops.",
      hi: "खेत के कचरे से बनी समृद्ध जैविक खाद। मिट्टी को आवश्यक पोषक तत्वों से समृद्ध करती है और जल धारण में सुधार करती है। गेहूं, चावल, सब्जियों और सभी फसलों के लिए आदर्श।"
    },
    highlights: {
      en: ["High NPK content", "Improves soil structure", "Ready to use", "NPOP Certified"],
      hi: ["उच्च NPK सामग्री", "मिट्टी संरचना में सुधार", "उपयोग के लिए तैयार", "NPOP प्रमाणित"]
    }
  },
  {
    id: 2,
    category: "compost",
    name: { en: "Vermicompost", hi: "वर्मीकम्पोस्ट" },
    price: 349,
    originalPrice: 449,
    unit: { en: "5 kg bag", hi: "5 किलो बैग" },
    rating: 4.9,
    reviews: 518,
    badge: { en: "Top Rated", hi: "टॉप रेटेड" },
    badgeColor: "#2D6A4F",
    image: "images/products/vermicompost.jpg",
    desc: {
      en: "Produced by earthworms, vermicompost is the gold standard of organic fertilizers. Boosts microbial activity and releases nutrients slowly over time.",
      hi: "केंचुओं द्वारा उत्पादित, वर्मीकम्पोस्ट जैविक उर्वरकों का स्वर्णिम मानक है। सूक्ष्मजीव गतिविधि को बढ़ाता है और समय के साथ धीरे-धीरे पोषक तत्व छोड़ता है।"
    },
    highlights: {
      en: ["Slow release nutrients", "Earthworm castings", "No chemicals", "All crop types"],
      hi: ["धीमी रिलीज पोषक तत्व", "केंचुआ कास्टिंग", "कोई रसायन नहीं", "सभी फसल प्रकार"]
    }
  },
  {
    id: 3,
    category: "bio",
    name: { en: "Neem Cake", hi: "नीम की खली" },
    price: 299,
    originalPrice: 379,
    unit: { en: "5 kg bag", hi: "5 किलो बैग" },
    rating: 4.7,
    reviews: 201,
    badge: { en: "Pest Control", hi: "कीट नियंत्रण" },
    badgeColor: "#5C3D11",
    image: "images/products/neem.jpg",
    desc: {
      en: "Cold-pressed neem cake acts as a natural pesticide and fertilizer in one. Controls soil-borne pests and nematodes while adding nitrogen.",
      hi: "कोल्ड-प्रेस्ड नीम की खली एक प्राकृतिक कीटनाशक और उर्वरक दोनों की तरह काम करती है। नाइट्रोजन जोड़ते हुए मिट्टी के कीटों और निमेटोड को नियंत्रित करती है।"
    },
    highlights: {
      en: ["Natural pesticide", "Nitrogen rich", "Controls nematodes", "Improves yield"],
      hi: ["प्राकृतिक कीटनाशक", "नाइट्रोजन युक्त", "निमेटोड नियंत्रण", "उपज में सुधार"]
    }
  },
  {
    id: 4,
    category: "bio",
    name: { en: "Bio-Fertilizer Pack", hi: "जैव उर्वरक पैक" },
    price: 599,
    originalPrice: 799,
    unit: { en: "combo pack", hi: "कॉम्बो पैक" },
    rating: 4.6,
    reviews: 156,
    badge: { en: "New Arrival", hi: "नया उत्पाद" },
    badgeColor: "#1B7A6B",
    image: "images/products/biofertilizer.jpg",
    desc: {
      en: "Complete bio-fertilizer combo with Rhizobium, PSB, and KSB cultures. Fixes atmospheric nitrogen, solubilizes phosphorus, and mobilizes potassium naturally.",
      hi: "राइजोबियम, PSB और KSB कल्चर के साथ पूर्ण जैव उर्वरक कॉम्बो। वायुमंडलीय नाइट्रोजन को ठीक करता है, फॉस्फोरस को घोलता है और प्राकृतिक रूप से पोटेशियम को जुटाता है।"
    },
    highlights: {
      en: ["N-P-K fixation", "Microbial cultures", "Reduces chemical use", "3 products in 1"],
      hi: ["N-P-K स्थिरीकरण", "सूक्ष्मजीव कल्चर", "रासायनिक उपयोग कम", "3 उत्पाद एक में"]
    }
  },
  {
    id: 5,
    category: "extract",
    name: { en: "Seaweed Extract", hi: "समुद्री शैवाल अर्क" },
    price: 799,
    originalPrice: 999,
    unit: { en: "1 litre bottle", hi: "1 लीटर बोतल" },
    rating: 4.8,
    reviews: 89,
    badge: { en: "Premium", hi: "प्रीमियम" },
    badgeColor: "#0A6E8A",
    image: "images/products/seaweed.jpg",
    desc: {
      en: "Cold-extracted from deep ocean kelp, this liquid fertilizer is packed with cytokinins, auxins, and 60+ trace minerals. Dramatically boosts flowering and fruiting.",
      hi: "गहरे समुद्री केल्प से कोल्ड-एक्सट्रेक्ट किया गया, यह तरल उर्वरक साइटोकिनिन, ऑक्सिन और 60+ ट्रेस खनिजों से भरपूर है। फूल और फल को नाटकीय रूप से बढ़ाता है।"
    },
    highlights: {
      en: ["60+ trace minerals", "Boosts flowering", "Liquid formula", "Foliar spray ready"],
      hi: ["60+ ट्रेस खनिज", "फूल बढ़ाता है", "तरल फार्मूला", "फोलियर स्प्रे तैयार"]
    }
  }
];

// Testimonials data
const testimonials = [
  {
    name: { en: "Ramesh Patel", hi: "रमेश पटेल" },
    location: { en: "Rajkot, Gujarat", hi: "राजकोट, गुजरात" },
    text: {
      en: "After switching to KisanMart's compost, my cotton yield increased by 30%. My land feels alive again. I recommend it to every farmer in my village.",
      hi: "किसानमार्ट की खाद पर जाने के बाद, मेरी कपास की उपज 30% बढ़ गई। मेरी जमीन फिर से जीवंत लग रही है। मैं अपने गाँव के हर किसान को इसकी सिफारिश करता हूं।"
    },
    rating: 5,
    avatar: "RP",
    color: "#2D6A4F"
  },
  {
    name: { en: "Sunita Devi", hi: "सुनीता देवी" },
    location: { en: "Patna, Bihar", hi: "पटना, बिहार" },
    text: {
      en: "The Vermicompost is pure gold. My vegetable garden has never been this productive. My children eat healthy food from our own farm. Thank you KisanMart!",
      hi: "वर्मीकम्पोस्ट शुद्ध सोना है। मेरी सब्जी का बाग इतना उत्पादक कभी नहीं था। मेरे बच्चे अपने खेत का स्वस्थ भोजन खाते हैं। धन्यवाद किसानमार्ट!"
    },
    rating: 5,
    avatar: "SD",
    color: "#D4A017"
  },
  {
    name: { en: "Gurpreet Singh", hi: "गुरप्रीत सिंह" },
    location: { en: "Ludhiana, Punjab", hi: "लुधियाना, पंजाब" },
    text: {
      en: "I was skeptical about organic fertilizers, but after one wheat season with Neem Cake, I'm a believer. No pests, good yield, and my soil smells earthy and healthy.",
      hi: "मुझे जैविक उर्वरकों के बारे में संदेह था, लेकिन नीम की खली के साथ एक गेहूं के मौसम के बाद, मैं विश्वासी हो गया। कोई कीट नहीं, अच्छी उपज, और मेरी मिट्टी मिट्टी जैसी स्वस्थ महकती है।"
    },
    rating: 5,
    avatar: "GS",
    color: "#5C3D11"
  },
  {
    name: { en: "Lakshmi Reddy", hi: "लक्ष्मी रेड्डी" },
    location: { en: "Warangal, Telangana", hi: "वारंगल, तेलंगाना" },
    text: {
      en: "The Bio-Fertilizer Pack saved me nearly ₹8,000 in chemical fertilizer costs this season. My paddy crop looks greener and healthier than my neighbor's chemical fields.",
      hi: "जैव उर्वरक पैक ने इस सीजन में रासायनिक उर्वरक लागत में मुझे लगभग ₹8,000 बचाए। मेरी धान की फसल मेरे पड़ोसी के रासायनिक खेतों से अधिक हरी और स्वस्थ दिखती है।"
    },
    rating: 5,
    avatar: "LR",
    color: "#1B7A6B"
  },
  {
    name: { en: "Mohan Kumbhar", hi: "मोहन कुंभार" },
    location: { en: "Nashik, Maharashtra", hi: "नाशिक, महाराष्ट्र" },
    text: {
      en: "Seaweed Extract on my grapes has been a game changer. Bigger berries, better color, and buyers pay premium price for my organic certified produce now.",
      hi: "मेरे अंगूर पर समुद्री शैवाल अर्क एक गेम चेंजर रहा है। बड़े बेरी, बेहतर रंग, और खरीदार अब मेरे जैविक प्रमाणित उत्पाद के लिए प्रीमियम मूल्य देते हैं।"
    },
    rating: 5,
    avatar: "MK",
    color: "#0A6E8A"
  }
];
