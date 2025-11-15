import { useEffect, useState } from 'react';
import { supabase, type Product } from '../lib/supabase';
import { Check, X } from 'lucide-react';

type ProductsProps = {
  selectedCategory: string | null;
};

export default function Products({ selectedCategory }: ProductsProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory]);

  async function fetchProducts() {
    try {
      setLoading(true);
      let query = supabase.from('products').select('*').order('created_at', { ascending: false });

      if (selectedCategory) {
        query = query.eq('category_id', selectedCategory);
      }

      const { data, error } = await query;

      if (error) throw error;
      setProducts(data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading products...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Our Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked furniture pieces that combine style, comfort, and durability
            </p>
          </div>

          {products.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              No products found in this category
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="relative overflow-hidden rounded-sm mb-4 bg-gray-100 aspect-square">
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                    {!product.in_stock && (
                      <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 text-sm font-medium rounded-sm">
                        Out of Stock
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-normal text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2 text-sm leading-relaxed">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-gray-900">
                      ${product.price.toLocaleString()}
                    </span>
                    <button className="text-amber-600 hover:text-amber-700 font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-sm max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="relative aspect-square bg-gray-100 rounded-sm overflow-hidden">
                <img
                  src={selectedProduct.image_url}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-light text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-3xl font-normal text-amber-600">
                    ${selectedProduct.price.toLocaleString()}
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Features</h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-amber-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center space-x-3 pt-4">
                  {selectedProduct.in_stock ? (
                    <>
                      <div className="flex items-center text-green-600">
                        <Check className="w-5 h-5 mr-1" />
                        <span className="font-medium">In Stock</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <X className="w-5 h-5 mr-1" />
                      <span className="font-medium">Out of Stock</span>
                    </div>
                  )}
                </div>

                <div className="flex space-x-4 pt-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="flex-1 bg-amber-600 text-white px-6 py-3 rounded-sm hover:bg-amber-700 transition-colors text-center font-medium"
                  >
                    Inquire Now
                  </a>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-sm hover:border-gray-400 transition-colors font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
