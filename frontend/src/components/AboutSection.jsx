import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { CheckCircle, Heart, Users, Truck } from 'lucide-react';
import { services } from '../mock';

const AboutSection = () => {
  const features = [
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Passion Artisanale",
      description: "Chaque pizza est préparée avec soin et passion par notre équipe"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-green-600" />,
      title: "Ingrédients Frais",
      description: "Notre pâte maison et sauce tomate cuisinée sur place"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Ambiance Chaleureuse",
      description: "Accueil chaleureux en famille, couple ou entre amis"
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-b from-red-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            À propos de La Pizzaterie
          </h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            À La Pizzaterie, chaque pizza est préparée avec soin et passion. Notre pâte maison, 
            notre sauce tomate cuisinée sur place et nos ingrédients frais font toute la différence. 
            Notre équipe vous accueille dans une ambiance chaleureuse.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-gray-50 rounded-full">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Image and Italian Colors */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-2 mb-6">
                  <div className="w-16 h-4 bg-green-600 rounded-full"></div>
                  <div className="w-16 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
                  <div className="w-16 h-4 bg-red-600 rounded-full"></div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                  Authenticité Italienne
                </h3>
                <p className="text-gray-600">
                  Des saveurs traditionnelles italiennes revisitées avec des ingrédients locaux de qualité.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 font-serif">
            Nos Services
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <Badge 
                key={index} 
                variant="outline" 
                className="px-6 py-3 text-lg font-semibold bg-white border-2 border-red-200 text-red-700 hover:bg-red-50 hover:border-red-300 transition-all duration-300 cursor-default"
              >
                <Truck className="h-5 w-5 mr-2" />
                {service}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;