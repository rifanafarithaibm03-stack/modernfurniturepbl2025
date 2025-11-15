import { Sofa, Phone, Mail } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sofa className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
            <span className="text-2xl font-light tracking-wide text-gray-900">
              HAVEN
            </span>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="text-gray-700 hover:text-amber-600 transition-colors">
              Products
            </a>
            <a href="#categories" className="text-gray-700 hover:text-amber-600 transition-colors">
              Categories
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="hidden sm:flex items-center text-sm text-gray-600 hover:text-amber-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-1" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
