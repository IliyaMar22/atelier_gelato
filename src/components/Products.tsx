'use client';

import { useState } from 'react';

const weeklyFlavors = [
  {
    id: 1,
    name: "Vanilla Bean",
    description: "Classic Madagascar vanilla with real vanilla beans",
    color: "from-yellow-200 to-yellow-300",
    icon: "🍦"
  },
  {
    id: 2,
    name: "Strawberry Dream",
    description: "Fresh Bulgarian strawberries in creamy gelato",
    color: "from-pink-200 to-pink-300",
    icon: "🍓"
  },
  {
    id: 3,
    name: "Chocolate Delight",
    description: "Rich Belgian chocolate with cocoa nibs",
    color: "from-amber-200 to-amber-300",
    icon: "🍫"
  },
  {
    id: 4,
    name: "Mint Fresh",
    description: "Cool mint with fresh mint leaves",
    color: "from-green-200 to-green-300",
    icon: "🌿"
  },
  {
    id: 5,
    name: "Pistachio",
    description: "Authentic Sicilian pistachios",
    color: "from-green-100 to-green-200",
    icon: "🥜"
  },
  {
    id: 6,
    name: "Lemon Sorbet",
    description: "Refreshing lemon with a hint of zest",
    color: "from-yellow-100 to-yellow-200",
    icon: "🍋"
  }
];

export default function Products() {
  const [selectedFlavor, setSelectedFlavor] = useState<number | null>(null);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-lg mb-4">100% Natural</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            This Week's Flavors
          </h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Our artisanal gelato flavors change every week. Each batch is crafted with 
            the finest natural ingredients and traditional Italian techniques.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {weeklyFlavors.map((flavor) => (
            <div
              key={flavor.id}
              className="group cursor-pointer"
              onClick={() => setSelectedFlavor(flavor.id)}
            >
              <div className="bg-gradient-to-br from-cream to-vanilla rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className={`w-20 h-20 bg-gradient-to-br ${flavor.color} rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {flavor.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-chocolate text-center mb-2">
                  {flavor.name}
                </h3>
                <p className="text-chocolate/70 text-center text-sm">
                  {flavor.description}
                </p>
                <div className="mt-4 flex justify-center">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-2">Gluten-Free</h3>
            <p className="text-chocolate/70">All our gelato is naturally gluten-free, perfect for everyone to enjoy.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔄</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-2">Weekly Rotation</h3>
            <p className="text-chocolate/70">New flavors every week to keep your taste buds excited and curious.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🇮🇹</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-2">Authentic Italian</h3>
            <p className="text-chocolate/70">Traditional recipes and techniques passed down through generations.</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-cream to-vanilla rounded-3xl p-12">
          <h3 className="font-display text-3xl font-bold text-chocolate mb-4">
            Ready to Taste the Difference?
          </h3>
          <p className="text-chocolate/70 text-lg mb-8 max-w-2xl mx-auto">
            Visit us at ulitsa Georgi S. Rakovski 149, Sofia, Bulgaria. 
            Open daily from 11:30 AM to 8:00 PM.
          </p>
          <div className="flex justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-colors font-medium text-lg">
              Visit Our Shop
            </button>
          </div>
        </div>
      </div>

      {/* Flavor Detail Modal */}
      {selectedFlavor && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-2xl font-bold text-chocolate">
                {weeklyFlavors.find(f => f.id === selectedFlavor)?.name}
              </h3>
              <button
                onClick={() => setSelectedFlavor(null)}
                className="text-chocolate/60 hover:text-chocolate"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-chocolate/70 mb-6">
              {weeklyFlavors.find(f => f.id === selectedFlavor)?.description}
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedFlavor(null)}
                className="bg-primary text-white py-3 px-8 rounded-full hover:bg-pink-600 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
