import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../mock';

const ReviewsSection = () => {
  return (
    <section id="avis" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Avis de nos Clients
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Découvrez ce que nos clients pensent de La Pizzaterie
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-red-100 to-transparent rounded-bl-full"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-green-100 to-transparent rounded-tr-full"></div>
              
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-red-600 opacity-60" />
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <blockquote className="text-gray-700 text-lg font-medium mb-6 text-center italic leading-relaxed">
                  "{review.text}"
                </blockquote>

                {/* Author */}
                <div className="text-center">
                  <div className="w-12 h-1 bg-gradient-to-r from-red-600 to-green-600 rounded-full mx-auto mb-3"></div>
                  <cite className="text-gray-900 font-bold text-lg not-italic">
                    {review.author}
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-2xl shadow-xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Rejoignez nos clients satisfaits !
            </h3>
            <p className="text-gray-600 mb-6">
              Venez goûter nos pizzas artisanales et laissez-nous votre avis
            </p>
            <button
              onClick={() => window.open('https://maps.app.goo.gl/KpwRtcXd9wut84Fx8', '_blank')}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-semibold hover:from-green-600 hover:to-green-700 transform transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Laisser un avis Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;