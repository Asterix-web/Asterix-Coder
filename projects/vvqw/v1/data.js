const products = Array.from({ length: 500 }, (_, i) => ({
    id: i + 1,
    name: `منتج ${i + 1}`,
    price: Math.floor(Math.random() * 1000) + 100,
    description: `وصف المنتج رقم ${i + 1}`,
    image: `https://via.placeholder.com/300x200?text=منتج+${i + 1}`,
    category: `قسم ${((i % 5) + 1)}`,
    subcategory: `فئة ${((i % 3) + 1)}`,
    latest: i >= 490,
    popular: i % 10 === 0
  }));
  // Removed invalid syntax
  