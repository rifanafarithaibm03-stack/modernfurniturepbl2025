export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              Elevate Your
              <span className="block text-amber-600 font-normal">Living Space</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Discover timeless furniture pieces crafted with care.
              From modern minimalism to classic elegance, find the perfect pieces
              to transform your home into a sanctuary.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-medium rounded-sm hover:bg-amber-700 transition-colors"
              >
                Browse Collection
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-sm hover:bg-gray-900 hover:text-white transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-sm transform rotate-3"></div>
            <div className="absolute inset-0 overflow-hidden rounded-sm">
              <img
                src="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Modern living room furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
