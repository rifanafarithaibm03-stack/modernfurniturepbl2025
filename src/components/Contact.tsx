import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our showroom or reach out to our team. We're here to help you find the perfect furniture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-sm">
                <MapPin className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Visit Our Showroom</h3>
                <p className="text-gray-600 leading-relaxed">
                  123 Furniture Lane<br />
                  Design District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-sm">
                <Phone className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  Phone: (123) 456-7890<br />
                  Toll Free: (800) 123-4567
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-sm">
                <Mail className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 leading-relaxed">
                  info@havenfurniture.com<br />
                  sales@havenfurniture.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-sm">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Business Hours</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monday - Friday: 9:00 AM - 7:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 11:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm shadow-sm">
            <h3 className="text-2xl font-light text-gray-900 mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all"
                  placeholder="(123) 456-7890"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-amber-600 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell us about your furniture needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-600 text-white px-6 py-3 rounded-sm hover:bg-amber-700 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
