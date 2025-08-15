// Mock data for La Pizzaterie website

export const restaurantInfo = {
  name: "La Pizzaterie",
  address: "133 Av. du Vert-Bois, 34090 Montpellier",
  phone: "07 86 73 14 93",
  googleMapsUrl: "https://maps.app.goo.gl/KpwRtcXd9wut84Fx8",
  rating: 4.9,
  reviewCount: 216,
  priceRange: "10–20 € par personne",
  orderUrl: "https://example.com/order", // Mock URL - to be replaced with real ordering system
  hours: "Fermé actuellement, ouvre à 11h"
};

export const heroImages = {
  restaurant: "https://images.unsplash.com/photo-1668686376776-df5a9b838896?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGl6emVyaWElMjByZXN0YXVyYW50fGVufDB8fHx8MTc1NTIyNTczM3ww&ixlib=rb-4.1.0&q=85",
  pizza1: "https://images.unsplash.com/photo-1751200884901-c1c6f43ae1d6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwyfHxhcnRpc2FuJTIwcGl6emF8ZW58MHx8fHwxNzU1MjI1NzQxfDA&ixlib=rb-4.1.0&q=85",
  pizza2: "https://images.unsplash.com/photo-1739156202304-5e9e55ad8d46?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwzfHxhcnRpc2FuJTIwcGl6emF8ZW58MHx8fHwxNzU1MjI1NzQxfDA&ixlib=rb-4.1.0&q=85",
  pizza3: "https://images.unsplash.com/photo-1563245738-9169ff58eccf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2MzR8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwcGl6emF8ZW58MHx8fHwxNzU1MjI1NzQxfDA&ixlib=rb-4.1.0&q=85"
};

export const pizzaMenu = [
  { name: "Margarita", size2km: "6,50 €", size3km: "8,90 €" },
  { name: "Chorizo", size2km: "9,50 €", size3km: "11,50 €" },
  { name: "Murata", size2km: "13,90 €", size3km: "13,90 €" },
  { name: "Carriivore", size2km: "12,90 €", size3km: "12,90 €" },
  { name: "Suprême", size2km: "12,90 €", size3km: "12,90 €" },
  { name: "Paysanne", size2km: "12,90 €", size3km: "12,90 €" },
  { name: "Napoli", size2km: "11,90 €", size3km: "11,90 €" },
  { name: "Tartulo", size2km: "13,90 €", size3km: "13,90 €" },
  { name: "Coupé", size2km: "9,50 €", size3km: "11,50 €" },
  { name: "Capbonara", size2km: "9,00 €", size3km: "11,90 €" },
  { name: "Forestière", size2km: "9,50 €", size3km: "11,90 €" },
  { name: "Saumon", size2km: "9,50 €", size3km: "11,90 €" },
  { name: "Fromage", size2km: "9,00 €", size3km: "11,90 €" },
  { name: "Truffe", size2km: "9,00 €", size3km: "11,90 €" },
  { name: "Bolognaise", size2km: "9,00 €", size3km: "11,90 €" },
  { name: "Indienne", size2km: "9,50 €", size3km: "11,90 €" },
  { name: "Pesto", size2km: "9,50 €", size3km: "11,90 €" },
  { name: "Boursin", size2km: "9,50 €", size3km: "11,90 €" },
  { name: "Havaïane", size2km: "9,50 €", size3km: "11,50 €" }
];

export const supplements = [
  { name: "Burrata crémeuse", price: "+1,50 €" },
  { name: "Devil (assaisonnement épicé)", price: "+1,50 €" },
  { name: "Lemon (citron)", price: "+4,15 €" },
  { name: "Vaudès (type d'olive)", price: "+4,15 €" },
  { name: "Fromages supplémentaires", price: "+1,50 €" }
];

export const reviews = [
  {
    text: "Très délicieuses pizzas et personnel au top !",
    author: "Emilka W.",
    rating: 5
  },
  {
    text: "La meilleure pizza de France !",
    author: "Matthias",
    rating: 5
  },
  {
    text: "Excellent rapport qualité-prix et service chaleureux.",
    author: "Andrew M.",
    rating: 5
  }
];

export const services = [
  "Repas sur place",
  "Retrait en bordure", 
  "Livraison sans contact"
];