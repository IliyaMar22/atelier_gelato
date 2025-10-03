'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    id: 1,
    title: "Gelato Display",
    description: "Our beautiful gelato display showcasing this week's flavors",
    image: "/images/gallery/gallery1.jpg",
    placeholder: "🍨"
  },
  {
    id: 2,
    title: "Tiramisu Special",
    description: "Our signature tiramisu dessert",
    image: "/images/gallery/gallery2.jpg",
    placeholder: "🍰"
  },
  {
    id: 3,
    title: "Beverages Menu",
    description: "Refreshing drinks and beverages",
    image: "/images/gallery/gallery3.jpg",
    placeholder: "☕"
  },
  {
    id: 4,
    title: "Gelato Making",
    description: "Our artisanal gelato making process",
    image: "/images/gallery/gallery4.jpg",
    placeholder: "👨‍🍳"
  },
  {
    id: 5,
    title: "Customer Favorites",
    description: "Some of our most popular flavor combinations",
    image: "/images/gallery/gallery5.jpg",
    placeholder: "🍓"
  },
  {
    id: 6,
    title: "Shop Interior",
    description: "The beautiful interior of our Sofia location",
    image: "/images/gallery/inside.jpg",
    placeholder: "🏪"
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Gallery
          </h2>
          <p className="text-chocolate/70 text-lg max-w-2xl mx-auto">
            Explore our complete menu and beautiful shop interior. From our gelato flavors 
            to desserts and beverages, discover everything we have to offer.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.id)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <div className="aspect-square relative">
                  <Image
                    src={image.image}
                    alt={image.title}
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
                              <div class="w-24 h-24 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-4xl">${image.placeholder}</span>
                              </div>
                              <p class="text-chocolate font-medium">${image.title}</p>
                              <p class="text-chocolate/60 text-sm">Click to view</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-chocolate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12">
          <h3 className="font-display text-3xl font-bold text-chocolate mb-4">
            Visit Our Atelier
          </h3>
          <p className="text-chocolate/70 text-lg mb-8 max-w-2xl mx-auto">
            Experience the magic of our gelato and desserts in person. 
            Visit us to taste our authentic Italian creations.
          </p>
          <div className="flex justify-center">
            <a
              href="#products"
              className="bg-primary text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-colors font-medium text-lg"
            >
              View Flavors
            </a>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={galleryImages.find(img => img.id === selectedImage)?.image || ''}
                  alt={galleryImages.find(img => img.id === selectedImage)?.title || ''}
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
                            <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                              <span class="text-white text-6xl">${galleryImages.find(img => img.id === selectedImage)?.placeholder}</span>
                            </div>
                            <h3 class="text-2xl font-bold text-chocolate mb-2">
                              ${galleryImages.find(img => img.id === selectedImage)?.title}
                            </h3>
                            <p class="text-chocolate/70">
                              ${galleryImages.find(img => img.id === selectedImage)?.description}
                            </p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-chocolate mb-2">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-chocolate/80">
                  {galleryImages.find(img => img.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
