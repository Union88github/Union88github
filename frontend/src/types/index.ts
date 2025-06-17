export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category?: string; // Optional category
  detailedDescription?: string; // Optional detailed description
  fabricDetails?: string[]; // Optional fabric details
  materialVariants?: { color: string; imageUrl: string; sku: string }[]; // Optional material variants
}
