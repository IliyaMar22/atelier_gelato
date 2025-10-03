'use client';

import { useState } from 'react';
import Image from 'next/image';

const menuSections = [
  {
    id: 1,
    title: "Gelato Flavors",
    description: "Our weekly rotating selection of artisanal gelato",
    image: "/images/menu/menu1.jpg",
    placeholder: "🍨"
  },
  {
    id: 2,
    title: "Desserts",
    description: "Traditional Italian desserts and sweet treats",
    image: "/images/menu/menu2.jpg", 
    placeholder: "🍰"
  },
  {
    id: 3,
    title: "Beverages",
    description: "Coffee, tea, and refreshing drinks",
    image: "/images/gallery/gallery3.jpg",
    placeholder: "☕"
  }
];

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Our Menu
          </h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Discover our complete selection of gelato flavors, desserts, and beverages. 
            Our menu changes weekly to bring you the freshest and most exciting flavors.
          </p>
        </div>

        {/* Menu Sections */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuSections.map((section) => (
            <div
              key={section.id}
              className="group cursor-pointer"
              onClick={() => setSelectedMenu(section.id)}
            >
              <div className="bg-gradient-to-br from-cream to-vanilla rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square relative mb-4 rounded-xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.title}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                            <div class="text-center">
                              <div class="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-3xl">${section.placeholder}</span>
                              </div>
                              <p class="text-chocolate font-medium">${section.title}</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-chocolate mb-2">
                  {section.title}
                </h3>
                <p className="text-chocolate/70 text-sm mb-4">
                  {section.description}
                </p>
                <div className="flex justify-center">
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

        {/* Special Notice */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
          <h3 className="font-display text-3xl font-bold text-chocolate mb-4">
            Weekly Menu Updates
          </h3>
          <p className="text-chocolate/70 text-lg mb-8 max-w-2xl mx-auto">
            Our gelato flavors change every week! Visit us to discover what&apos;s new, 
            or follow us on social media to see our latest creations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-colors font-medium text-lg">
              Visit Our Shop
            </button>
            <a
              href="#products"
              className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-lg text-center"
            >
              View Flavors
            </a>
          </div>
        </div>
      </div>

      {/* Menu Detail Modal */}
      {selectedMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => setSelectedMenu(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-chocolate hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video relative">
                <Image
                  src={menuSections.find(s => s.id === selectedMenu)?.image || ''}
                  alt={menuSections.find(s => s.id === selectedMenu)?.title || ''}
                  fill
                  className="object-cover rounded-t-2xl"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cream to-vanilla flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-white text-6xl">${menuSections.find(s => s.id === selectedMenu)?.placeholder}</span>
                            </div>
                            <h3 class="text-2xl font-bold text-chocolate mb-2">
                              ${menuSections.find(s => s.id === selectedMenu)?.title}
                            </h3>
                            <p class="text-chocolate/70">
                              ${menuSections.find(s => s.id === selectedMenu)?.description}
                            </p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-3xl font-bold text-chocolate mb-4">
                  {menuSections.find(s => s.id === selectedMenu)?.title}
                </h3>
                <p className="text-chocolate/80 text-lg">
                  {menuSections.find(s => s.id === selectedMenu)?.description}
                </p>
                <div className="mt-6 p-4 bg-cream rounded-lg">
                  <p className="text-chocolate/70 text-sm text-center">
                    This is a placeholder for the actual menu image. When you provide the menu photos, 
                    they will be displayed here with proper optimization and responsive sizing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
