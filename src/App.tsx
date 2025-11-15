import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    if (categoryId) {
      setTimeout(() => {
        document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Categories onCategorySelect={handleCategorySelect} selectedCategory={selectedCategory} />
      <Products selectedCategory={selectedCategory} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
