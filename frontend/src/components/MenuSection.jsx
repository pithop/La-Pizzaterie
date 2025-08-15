// frontend/src/components/MenuSection.jsx
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { pizzaMenu, supplements, heroMedia } from '../mock';

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-gradient-to-b from-white to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-serif">
            Notre Menu
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Pizzas, pâtes ou desserts, tout est fait maison avec passion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pizza Images - MODIFICATION de la grille d'images */}
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[34rem]">
            <div className="relative col-span-1 row-span-2 overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={heroMedia.pizza1}
                alt="Pizza artisanale"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={heroMedia.pasta1}
                alt="Plat de pâtes"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src={heroMedia.pizza4}
                alt="Pizza en gros plan"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>


          {/* Menu Table */}
          <div className="space-y-8">
            {/* ... (le reste du code de la table de menu et des suppléments ne change pas) */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold text-center">Menu des Pizzas</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-50 border-b">
                        <th className="px-6 py-4 text-left font-semibold text-gray-900">Pizza</th>
                        <th className="px-4 py-4 text-center font-semibold text-gray-900">Taille 29cm</th>
                        <th className="px-4 py-4 text-center font-semibold text-gray-900">Taille 33cm</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pizzaMenu.map((pizza, index) => (
                        <tr
                          key={index}
                          className={`border-b hover:bg-red-50 transition-colors duration-200 ${
                            index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                          }`}
                        >
                          <td className="px-6 py-4 font-medium text-gray-900">{pizza.name}</td>
                          <td className="px-4 py-4 text-center font-semibold text-green-600">{pizza.size2km}</td>
                          <td className="px-4 py-4 text-center font-semibold text-green-600">{pizza.size3km}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Supplements */}
            <Card className="bg-white shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-xl font-bold text-center">Suppléments</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-3">
                  {supplements.map((supplement, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                      <span className="font-medium text-gray-900">{supplement.name}</span>
                      <Badge variant="outline" className="bg-orange-100 text-orange-700 border-orange-300 font-semibold">
                        {supplement.price}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;