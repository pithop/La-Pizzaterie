import React from 'react';
import { Star, Euro, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo } from '../mock';

const HomeSection = () => {
  return (
    <section id="accueil" className="py-20 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif">
            Votre adresse incontournable à Montpellier
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Pour des pizzas artisanales préparées avec passion et des ingrédients frais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Google Rating */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {restaurantInfo.rating} / 5
                </div>
                <p className="text-gray-600 font-medium">
                  {restaurantInfo.reviewCount} avis Google
                </p>
              </div>
              <div className="h-1 bg-yellow-400 rounded-full w-16 mx-auto"></div>
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <Euro className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  10–20 €
                </div>
                <p className="text-gray-600 font-medium">
                  par personne
                </p>
              </div>
              <div className="h-1 bg-green-600 rounded-full w-16 mx-auto"></div>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <MapPin className="h-12 w-12 text-red-600 mx-auto mb-4" />
                <div className="text-lg font-bold text-gray-900 mb-2">
                  Montpellier
                </div>
                <p className="text-gray-600 font-medium">
                  133 Av. du Vert-Bois
                </p>
              </div>
              <div className="h-1 bg-red-600 rounded-full w-16 mx-auto"></div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à savourer nos pizzas ?
            </h3>
            <p className="text-gray-600 mb-6">
              Découvrez notre menu et commandez dès maintenant !
            </p>
            <button
              onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Voir notre menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;