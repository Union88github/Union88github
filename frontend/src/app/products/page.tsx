import ProductCard from '@/components/ProductCard';
import { Product } from '@/types'; // Updated import path for Product interface

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/products`, { cache: 'no-store' }); // Disable cache for dynamic data
    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error('[ProductsPage] Error fetching products:', error);
    return []; // Return empty array on error or throw to let Next.js error boundary handle it
  }
}

export default async function ProductsPage() {
  const products = await getProducts();

  if (products.length === 0) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-16">
            Our Exquisite Collection
          </h1>
          <p className="text-center text-gray-700 text-xl">
            Failed to load products or no products available at the moment. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-10 sm:mb-16">
          Our Exquisite Collection
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product: Product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Optional: Revalidate data at a specific interval if needed
// export const revalidate = 60; // Revalidate every 60 seconds
