import { Sofa } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Sofa className="w-8 h-8 text-amber-600" strokeWidth={1.5} />
              <span className="text-2xl font-light tracking-wide text-white">
                HAVEN
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Transforming houses into homes with timeless furniture pieces since 2010.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="hover:text-amber-600 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-amber-600 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Customer Service</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  Warranty
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-600 transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li>123 Furniture Lane</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">(123) 456-7890</li>
              <li>info@havenfurniture.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Haven Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
