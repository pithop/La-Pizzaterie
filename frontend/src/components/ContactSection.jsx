import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { restaurantInfo } from '../mock';

const ContactSection = () => {
  const handleMapClick = () => {
    window.open(restaurantInfo.googleMapsUrl, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${restaurantInfo.phone}`, '_self');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Contact & Localisation
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Retrouvez-nous au cœur de Montpellier pour une expérience pizza inoubliable
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Address Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl font-bold">
                  <MapPin className="h-6 w-6 mr-3" />
                  Notre Adresse
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-900 font-semibold text-lg mb-4">
                  {restaurantInfo.address}
                </p>
                <Button
                  onClick={handleMapClick}
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Voir sur Google Maps
                </Button>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl font-bold">
                  <Phone className="h-6 w-6 mr-3" />
                  Téléphone
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-900 font-semibold text-lg mb-4">
                  {restaurantInfo.phone}
                </p>
                <Button
                  onClick={handlePhoneClick}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Appeler maintenant
                </Button>
              </CardContent>
            </Card>

            {/* Hours Card */}
            <Card className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center text-xl font-bold">
                  <Clock className="h-6 w-6 mr-3" />
                  Horaires
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-900 font-semibold text-lg">
                  {restaurantInfo.hours}
                </p>
                <p className="text-gray-600 mt-2">
                  Horaires complets disponibles sur notre page Google
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <Card className="bg-white shadow-2xl border-0 overflow-hidden h-full">
              <div className="relative h-full min-h-96">
                {/* Map placeholder with iframe */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.123456789!2d3.8767!3d43.6047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b6aeb123456789%3A0x987654321!2s133%20Av.%20du%20Vert-Bois%2C%2034090%20Montpellier!5e0!3m2!1sfr!2sfr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location de La Pizzaterie"
                ></iframe>
                
                {/* Overlay for click to maps */}
                <div 
                  onClick={handleMapClick}
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer flex items-center justify-center group"
                >
                  <div className="bg-white bg-opacity-0 group-hover:bg-opacity-90 text-gray-900 px-6 py-3 rounded-full font-semibold transition-all duration-300 opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100">
                    <ExternalLink className="h-5 w-5 inline mr-2" />
                    Ouvrir dans Google Maps
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à commander ?
            </h3>
            <p className="text-gray-600 mb-6">
              Contactez-nous ou commandez directement en ligne
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.open(restaurantInfo.orderUrl, '_blank')}
                className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold hover:from-red-600 hover:to-red-700 transform transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Commander en ligne
              </Button>
              <Button
                onClick={handlePhoneClick}
                variant="outline"
                className="border-2 border-red-200 text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-red-50 hover:border-red-300 transform transition-all duration-300 hover:scale-105"
              >
                Appeler le restaurant
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;