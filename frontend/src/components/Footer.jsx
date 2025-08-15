import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-bold text-red-400 mb-4 font-serif">
              La Pizzaterie
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre adresse incontournable à Montpellier pour des pizzas artisanales 
              préparées avec passion et des ingrédients frais.
            </p>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex mr-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-yellow-400 font-semibold">
                {restaurantInfo.rating} / 5 ({restaurantInfo.reviewCount} avis)
              </span>
            </div>

            {/* Italian Colors Decoration */}
            <div className="flex space-x-2">
              <div className="w-8 h-2 bg-green-500 rounded-full"></div>
              <div className="w-8 h-2 bg-white rounded-full"></div>
              <div className="w-8 h-2 bg-red-500 rounded-full"></div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {restaurantInfo.address}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-red-400 mr-3 flex-shrink-0" />
                <a 
                  href={`tel:${restaurantInfo.phone}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {restaurantInfo.phone}
                </a>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  {restaurantInfo.hours}
                </p>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">• Repas sur place</li>
              <li className="text-gray-300 text-sm">• Retrait en bordure</li>
              <li className="text-gray-300 text-sm">• Livraison sans contact</li>
              <li className="text-gray-300 text-sm">• Commande en ligne</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} La Pizzaterie. Tous droits réservés.
            </div>
            
            <div className="flex space-x-6">
              <a
                href={restaurantInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                Google Maps
              </a>
              <button
                onClick={() => window.open(restaurantInfo.orderUrl, '_blank')}
                className="text-gray-400 hover:text-red-400 text-sm transition-colors duration-200 font-semibold"
              >
                Commander en ligne
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;