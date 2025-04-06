import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import Layout from '../components/layout/Layout';

const products: Product[] = [
  {
    id: 1,
    name: 'Homemade Chicken Rice',
    price: 4.50,
    description: 'Delicious Hainanese chicken rice with special chili sauce and fragrant rice',
    image: '/products/product1.png',
  },
  {
    id: 2,
    name: 'Traditional Laksa',
    price: 5.00,
    description: 'Spicy coconut milk noodle soup with prawns and fish cake',
    image: '/products/product2.png',
  },
  {
    id: 3,
    name: 'Nasi Lemak',
    price: 3.50,
    description: 'Coconut rice with sambal chili, fried anchovies, peanuts, and egg',
    image: '/products/product3.png',
  },
  {
    id: 4,
    name: 'Mee Goreng',
    price: 4.00,
    description: 'Wok-fried noodles with vegetables and choice of protein',
    image: '/products/product4.png',
  },
  {
    id: 5,
    name: 'Curry Puff (3pcs)',
    price: 2.40,
    description: 'Flaky pastry filled with curried potatoes and chicken',
    image: '/products/product5.png',
  },
  {
    id: 6,
    name: 'Ice Kacang',
    price: 2.50,
    description: 'Shaved ice with red beans, sweet corn, and colorful syrups',
    image: '/products/product6.png',
  }
];

export default function Home() {
  const { addToCart } = useCart();

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Welcome to Marcus's Mama Shop</h1>
        <p className="text-gray-600 mb-8 text-center">Authentic local delights, just like how mama makes them!</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200"
            >
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded-lg w-full h-48"
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {product.name}
              </h2>
              <p className="text-gray-600 mb-4 h-16">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-800">
                  ${product.price.toFixed(2)}
                </span>
                <button
                  type="button"
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-200"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
