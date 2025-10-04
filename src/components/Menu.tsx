'use client';

import { useState } from 'react';
import Image from 'next/image';

const menuSections = [
  {
    id: 1,
    title: "Gelato Flavors",
    description: "Our weekly rotating selection of artisanal gelato",
    images: [
      "/images/menu/menu1.jpg",
      "/images/menu/menu2.jpg", 
      "/images/menu/menu3.jpg",
      "/images/menu/menu4.jpg",
      "/images/menu/menu5.jpg",
      "/images/menu/menu6.jpg"
    ],
    placeholder: "🍨"
  },
  {
    id: 2,
    title: "Desserts",
    description: "Traditional Italian desserts and sweet treats",
    images: [
      "/images/gallery/gallery2.jpg",
      "/images/desserts/lemon-tart.jpg",
      "/images/desserts/cheesecake.jpg"
    ],
    placeholder: "🍰"
  },
  {
    id: 3,
    title: "Beverages",
    description: "Coffee, tea, and refreshing drinks",
    images: [
      "/images/gallery/gallery3.jpg"
    ],
    placeholder: "☕"
  }
];

export default function Menu() {
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    const currentMenu = menuSections.find(m => m.id === selectedMenu);
    if (currentMenu) {
      setCurrentImageIndex((prev) => 
        prev === currentMenu.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    const currentMenu = menuSections.find(m => m.id === selectedMenu);
    if (currentMenu) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentMenu.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="menu" className="py-20 bg-vanilla">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-lg mb-4">Our Offerings</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">Explore Our Menu</h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Discover our full range of gelato, desserts, and beverages.
          </p>
        </div>

        {/* Menu Sections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {menuSections.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
              onClick={() => {
                setSelectedMenu(menu.id);
                setCurrentImageIndex(0);
              }}
            >
              <div className="relative aspect-video">
                <Image
                  src={menu.images[0]}
                  alt={menu.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cream to-vanilla flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-white text-4xl">${menu.placeholder}</span>
                            </div>
                            <p class="text-chocolate font-medium">${menu.title}</p>
                            <p class="text-chocolate/60 text-sm">Click to view menu</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                {menu.images.length > 1 && (
                  <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 text-xs font-medium text-chocolate">
                    {menu.images.length} photos
                  </div>
                )}
              </div>
              <div className="p-6 text-center">
                <h3 className="font-display text-2xl font-bold text-chocolate mb-2">{menu.title}</h3>
                <p className="text-chocolate/70 text-sm">{menu.description}</p>
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

      {/* Menu Detail Modal with Image Carousel */}
      {selectedMenu && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button
                onClick={() => {
                  setSelectedMenu(null);
                  setCurrentImageIndex(0);
                }}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-chocolate hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="aspect-video relative rounded-t-2xl overflow-hidden">
                <Image
                  src={menuSections.find(m => m.id === selectedMenu)?.images[currentImageIndex] || ''}
                  alt={`${menuSections.find(m => m.id === selectedMenu)?.title} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-cream to-vanilla flex items-center justify-center">
                          <div class="text-center">
                            <div class="w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-white text-6xl">${menuSections.find(m => m.id === selectedMenu)?.placeholder}</span>
                            </div>
                            <h3 class="text-2xl font-bold text-chocolate mb-2">
                              ${menuSections.find(m => m.id === selectedMenu)?.title}
                            </h3>
                            <p class="text-chocolate/70">
                              ${menuSections.find(m => m.id === selectedMenu)?.description}
                            </p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Navigation arrows for multiple images */}
                {menuSections.find(m => m.id === selectedMenu)?.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-chocolate hover:bg-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-chocolate hover:bg-white transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}
                
                {/* Image counter */}
                {menuSections.find(m => m.id === selectedMenu)?.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {menuSections.find(m => m.id === selectedMenu)?.images.length}
                  </div>
                )}
              </div>
              
              <div className="p-6 text-center">
                <h3 className="font-display text-3xl font-bold text-chocolate mb-2">
                  {menuSections.find(m => m.id === selectedMenu)?.title}
                </h3>
                <p className="text-chocolate/80">
                  {menuSections.find(m => m.id === selectedMenu)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}