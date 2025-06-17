import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types'; // Updated import path for Product interface

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/products/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      if (res.status === 404) {
        return null; // Product not found
      }
      throw new Error(`Failed to fetch product ${id}: ${res.status} ${res.statusText}`);
    }
    return res.json();
  } catch (error) {
    console.error(`[ProductDetailPage id:${id}] Error fetching product:`, error);
    // In a real app, you might throw the error to be caught by an error boundary
    // For this example, returning null will lead to the "not found" page,
    // which is acceptable if the error implies the product isn't accessible.
    return null;
  }
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center min-h-[60vh] flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Product Not Found</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Sorry, we couldn't find the product you're looking for (ID: {params.id}). It might have been removed or the link is incorrect.
        </p>
        <Link href="/products" legacyBehavior>
          <a className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-150 ease-in-out">
            &larr; Back to Catalog
          </a>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link href="/products" legacyBehavior>
            <a className="text-indigo-600 hover:text-indigo-800 font-semibold text-sm">
              &larr; Back to Catalog
            </a>
          </Link>
        </div>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="relative h-96 lg:min-h-[500px] bg-gray-100">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="hover:opacity-90 transition-opacity duration-300"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 lg:p-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>

            <p className="text-2xl lg:text-3xl text-gray-900 font-semibold mb-6">{product.price}</p>

            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {product.detailedDescription || product.description}
              </p>
            </div>

            {product.fabricDetails && product.fabricDetails.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Fabric Detail Zoom</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.fabricDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}

            {product.materialVariants && product.materialVariants.length > 0 && (
              <div className="mb-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">Material Variants</h2>
                <div className="flex space-x-2">
                  {product.materialVariants.map((variant) => (
                    <div key={variant.sku} className="group relative">
                      <Image
                        src={variant.imageUrl}
                        alt={variant.color}
                        width={64}
                        height={64}
                        className="rounded-md border border-gray-300 cursor-pointer group-hover:border-indigo-500 transition"
                      />
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-0.5 bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {variant.color}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-1">More colors/materials might be available.</p>
              </div>
            )}

            {!product.materialVariants && (!product.fabricDetails || product.fabricDetails.length === 0) && (
                 <div className="mb-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Additional Details</h2>
                    <p className="text-gray-600 text-sm">More detailed information about fabric and materials will be available soon.</p>
                 </div>
            )}

            <div className="mt-8">
              <button
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md shadow-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                Request Sample
              </button>
              <p className="text-xs text-gray-500 mt-2 text-center">Availability for samples may vary.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
