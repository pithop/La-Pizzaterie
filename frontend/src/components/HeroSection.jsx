// frontend/src/components/HeroSection.jsx
import React from 'react';
import { Button } from './ui/button';
import { heroMedia, restaurantInfo } from '../mock'; // MODIFICATION : Importe heroMedia

const HeroSection = () => {
  const handleOrderClick = () => {
    window.open(restaurantInfo.orderUrl, '_blank');
  };

  const media = heroMedia.restaurant;

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Arrière-plan Média (Vidéo ou Image) */}
      <div className="absolute inset-0">
        {media.type === 'video' ? (
          <video
            src={media.src}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${media.src})` }}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif">
          Bienvenue à{' '}
          <span className="text-red-500">La Pizzaterie</span>
        </h1>
        
        <p className="text-xl md:text-3xl mb-4 font-light">
          Pizzas artisanales à Montpellier
        </p>
        
        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Sur place, à emporter ou en livraison sans contact
        </p>

        <Button
          onClick={handleOrderClick}
          className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
        >
          Commander maintenant
        </Button>

        {/* Indicateur de défilement */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;