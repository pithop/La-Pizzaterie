import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-red-600 font-serif">
              La Pizzaterie
            </h1>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-gray-700">
              <Phone className="h-4 w-4 mr-2 text-red-600" />
              <span className="text-sm font-medium">{restaurantInfo.phone}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <MapPin className="h-4 w-4 mr-2 text-red-600" />
              <span className="text-sm font-medium">Montpellier</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('apropos')}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              À propos
            </button>
            <button
              onClick={() => scrollToSection('avis')}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Avis
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-red-600 p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('accueil')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('apropos')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection('avis')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200"
              >
                Avis
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-red-600 hover:bg-gray-50 rounded-md text-base font-medium transition-colors duration-200"
              >
                Contact
              </button>
            </div>
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex items-center text-gray-700 mb-2">
                <Phone className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-sm font-medium">{restaurantInfo.phone}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-red-600" />
                <span className="text-sm font-medium">Montpellier</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;