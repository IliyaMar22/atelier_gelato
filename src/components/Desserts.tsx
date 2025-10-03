'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Desserts() {
  const [selectedDessert, setSelectedDessert] = useState<number | null>(null);

  const desserts = [
    {
      id: 1,
      name: "Tiramisu",
      description: "Our signature tiramisu - layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder",
      image: "/images/gallery/gallery2.jpg",
      placeholder: "🍰",
      category: "Classic Italian",
      allergens: ["eggs", "milk"],
      isGlutenFree: true,
      isVegan: false
    },
    {
      id: 2,
      name: "Lemon Tart",
      description: "Delicate lemon tart with a golden crust and creamy lemon filling, garnished with fresh lime",
      image: "/images/desserts/lemon-tart.jpg",
      placeholder: "🍋",
      category: "Classic Italian",
      allergens: ["eggs", "milk"],
      isGlutenFree: true,
      isVegan: false
    },
    {
      id: 3,
      name: "Cheesecake",
      description: "Rich and creamy cheesecake with a vibrant red fruit topping and fresh berries",
      image: "/images/desserts/cheesecake.jpg",
      placeholder: "🧀",
      category: "Classic Italian",
      allergens: ["milk", "eggs"],
      isGlutenFree: true,
      isVegan: false
    }
  ];

  return (
    <section id="desserts" className="py-20 bg-gradient-to-br from-cream to-vanilla">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-lg mb-4">Beyond Gelato</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Our Desserts
          </h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Complement your gelato experience with our carefully crafted Italian desserts. 
            Each one tells a story of tradition and passion.
          </p>
        </div>

        {/* Featured Tiramisu */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl font-bold text-chocolate mb-4">
                    Our Signature Tiramisu
                  </h3>
                  <p className="text-lg text-chocolate/80 mb-6">
                    A masterpiece of Italian dessert tradition. Our tiramisu features layers of 
                    coffee-soaked ladyfingers, rich mascarpone cream, and a dusting of premium 
                    cocoa powder. Made fresh daily with authentic Italian ingredients.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">☕</span>
                    </div>
                    <span className="text-chocolate/80">Made with premium Italian coffee</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">🥛</span>
                    </div>
                    <span className="text-chocolate/80">Authentic mascarpone cheese</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary text-sm">🍰</span>
                    </div>
                    <span className="text-chocolate/80">Layered to perfection</span>
                  </div>
                </div>

                <div className="pt-4">
                  <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    Available Daily
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-amber-200 to-amber-300 rounded-2xl p-8 shadow-lg">
                  <div className="aspect-square relative rounded-xl overflow-hidden">
                    <Image
                      src="/images/gallery/gallery2.jpg"
                      alt="Our signature tiramisu"
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to placeholder if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = `
                            <div class="w-full h-full bg-white/50 flex items-center justify-center">
                              <div class="text-center">
                                <div class="w-32 h-32 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                  <span class="text-white text-4xl">🍰</span>
                                </div>
                                <p class="text-chocolate font-medium">Tiramisu</p>
                                <p class="text-chocolate/60 text-sm">Signature dessert</p>
                              </div>
                            </div>
                          `;
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Desserts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {desserts.map((dessert) => (
            <div
              key={dessert.id}
              className="group cursor-pointer"
              onClick={() => setSelectedDessert(dessert.id)}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={dessert.image}
                    alt={dessert.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-cream to-vanilla flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-3xl">${dessert.placeholder}</span>
                              </div>
                              <p class="text-chocolate font-medium">${dessert.name}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-chocolate mb-2">
                  {dessert.name}
                </h3>
                <p className="text-chocolate/70 text-sm mb-4">
                  {dessert.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-primary text-sm font-medium">{dessert.category}</span>
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

      </div>

      {/* Dessert Detail Modal */}
      {selectedDessert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-2xl font-bold text-chocolate">
                {desserts.find(d => d.id === selectedDessert)?.name}
              </h3>
              <button
                onClick={() => setSelectedDessert(null)}
                className="text-chocolate/60 hover:text-chocolate"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-chocolate/70 mb-6">
              {desserts.find(d => d.id === selectedDessert)?.description}
            </p>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span className="text-chocolate/60">Category:</span>
                <span className="text-chocolate">{desserts.find(d => d.id === selectedDessert)?.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-chocolate/60">Gluten Free:</span>
                <span className="text-chocolate">{desserts.find(d => d.id === selectedDessert)?.isGlutenFree ? 'Yes' : 'No'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-chocolate/60">Vegan:</span>
                <span className="text-chocolate">{desserts.find(d => d.id === selectedDessert)?.isVegan ? 'Yes' : 'No'}</span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setSelectedDessert(null)}
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
