import Image from 'next/image';
import Link from 'next/link'; // Import Link from Next.js

interface ProductCardProps {
  id: string; // Added id prop
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

export default function ProductCard({ id, name, description, price, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} legacyBehavior>
      <a className="block border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out bg-white group">
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
          <Image
            src={imageUrl}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2 truncate group-hover:text-indigo-600">{name}</h2>
        <p className="text-gray-600 mb-3 text-sm h-20 overflow-y-auto">{description}</p>
        <p className="text-lg font-bold text-gray-900">{price}</p>
      </a>
    </Link>
  );
}
