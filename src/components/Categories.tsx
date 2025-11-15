import { useEffect, useState } from 'react';
import { supabase, type Category } from '../lib/supabase';

type CategoriesProps = {
  onCategorySelect: (categoryId: string | null) => void;
  selectedCategory: string | null;
};

export default function Categories({ onCategorySelect, selectedCategory }: CategoriesProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    try {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');

      if (error) throw error;
      setCategories(data || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">Loading categories...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="categories" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our curated collections designed for every room in your home
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategorySelect(
                selectedCategory === category.id ? null : category.id
              )}
              className={`group relative h-64 overflow-hidden rounded-sm transition-all ${
                selectedCategory === category.id
                  ? 'ring-4 ring-amber-600'
                  : 'hover:scale-105'
              }`}
            >
              <img
                src={category.image_url}
                alt={category.name}
                className="w-full h-full object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-left w-full">
                  <h3 className="text-2xl font-light text-white mb-2">{category.name}</h3>
                  <p className="text-sm text-gray-200">{category.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedCategory && (
          <div className="text-center">
            <button
              onClick={() => onCategorySelect(null)}
              className="text-amber-600 hover:text-amber-700 font-medium"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
