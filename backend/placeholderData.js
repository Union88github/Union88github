// Converted from frontend/src/utils/placeholderData.ts

const placeholderProducts = [
  {
    id: '1',
    name: 'Premium Wool Scarf',
    description: 'A luxurious scarf made from the finest merino wool. Keeps you warm and stylish.',
    detailedDescription: 'Crafted from 100% ethically sourced merino wool, this scarf offers unparalleled softness and warmth. Its generous size allows for versatile styling, while the classic design ensures it remains a timeless addition to your wardrobe. Perfect for elevating any winter ensemble.',
    price: '$99.99',
    imageUrl: 'https://via.placeholder.com/400x300?text=Wool+Scarf+Large',
    fabricDetails: ['100% Merino Wool', 'Hypoallergenic', 'Breathable Weave'],
    materialVariants: [
      { color: 'Charcoal Gray', imageUrl: 'https://via.placeholder.com/100x100?text=Gray+Scarf', sku: 'WS-GRY-001' },
      { color: 'Navy Blue', imageUrl: 'https://via.placeholder.com/100x100?text=Navy+Scarf', sku: 'WS-NAV-001' },
      { color: 'Burgundy Red', imageUrl: 'https://via.placeholder.com/100x100?text=Red+Scarf', sku: 'WS-RED-001' },
    ]
  },
  {
    id: '2',
    name: 'Cashmere Blend Sweater',
    description: 'Experience ultimate comfort with our soft and warm cashmere blend sweater.',
    detailedDescription: 'This sweater is a blend of 70% cashmere and 30% silk, providing a lightweight yet incredibly warm feel. The fine gauge knit offers a smooth drape, and the classic crew neck design makes it a versatile piece for layering or wearing on its own.',
    price: '$149.50',
    imageUrl: 'https://via.placeholder.com/400x300?text=Cashmere+Sweater+Large',
    fabricDetails: ['70% Cashmere, 30% Silk', 'Hand-wash or Dry Clean Only', 'Ribbed Cuffs and Hem'],
    materialVariants: [
      { color: 'Heather Grey', imageUrl: 'https://via.placeholder.com/100x100?text=Grey+Sweater', sku: 'CS-GRY-002' },
      { color: 'Cream', imageUrl: 'https://via.placeholder.com/100x100?text=Cream+Sweater', sku: 'CS-CRM-002' },
    ]
  },
  {
    id: '3',
    name: 'Silk Lined Gloves',
    description: 'Elegant gloves with a soft silk lining for extra comfort and warmth.',
    detailedDescription: 'Made from supple lambskin leather and lined with 100% pure silk, these gloves offer both luxury and practicality. The touchscreen-compatible fingertips allow you to use your devices without removing them. A subtle snap closure at the wrist ensures a snug fit.',
    price: '$79.00',
    imageUrl: 'https://via.placeholder.com/400x300?text=Silk+Gloves+Large',
    fabricDetails: ['Outer: 100% Lambskin Leather', 'Lining: 100% Silk', 'Touchscreen Compatible'],
    materialVariants: [
      { color: 'Black', imageUrl: 'https://via.placeholder.com/100x100?text=Black+Gloves', sku: 'SG-BLK-003' },
      { color: 'Brown', imageUrl: 'https://via.placeholder.com/100x100?text=Brown+Gloves', sku: 'SG-BRN-003' },
    ]
  },
  {
    id: '4',
    name: 'Classic Leather Belt',
    description: 'A handcrafted leather belt featuring a classic stainless steel buckle.',
    detailedDescription: 'This belt is constructed from full-grain Italian leather, known for its durability and ability to develop a rich patina over time. The solid stainless steel buckle is both sturdy and stylish. Available in multiple lengths for a perfect fit.',
    price: '$119.99',
    imageUrl: 'https://via.placeholder.com/400x300?text=Leather+Belt+Large',
    fabricDetails: ['100% Full-Grain Italian Leather', 'Stainless Steel Buckle', 'Width: 1.5 inches'],
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    description: 'Protect your eyes with style. These designer sunglasses offer 100% UV protection.',
    detailedDescription: 'Featuring a contemporary frame crafted from lightweight acetate, these sunglasses are fitted with CR-39 lenses that offer 100% UVA/UVB protection. The adjustable nose pads ensure a comfortable fit for all-day wear. Includes a protective hard case and cleaning cloth.',
    price: '$199.00',
    imageUrl: 'https://via.placeholder.com/400x300?text=Sunglasses+Large',
    fabricDetails: ['Acetate Frame', 'CR-39 Lenses', '100% UVA/UVB Protection'],
  }
];

const getProductById = (id) => {
  return placeholderProducts.find(product => product.id === id);
};

module.exports = {
  placeholderProducts,
  getProductById
};
