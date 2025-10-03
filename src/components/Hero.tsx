'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-cream via-vanilla to-strawberry pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-chocolate leading-tight">
                Natural
                <br />
                <span className="text-primary">Gluten-Free</span>
                <br />
                Gelato
              </h1>
              <p className="text-xl text-chocolate/80 font-medium">
                Creating Baci Moments Daily
              </p>
            </div>

            <p className="text-lg text-chocolate/70 max-w-lg">
              Experience the art of authentic Italian gelato with our weekly changing flavors. 
              Made with natural ingredients and crafted with passion in the heart of Sofia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#products"
                className="bg-primary text-white px-8 py-4 rounded-full hover:bg-pink-600 transition-colors font-medium text-lg inline-flex items-center justify-center"
              >
                Explore Flavors
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="#desserts"
                className="border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors font-medium text-lg inline-flex items-center justify-center"
              >
                Our Desserts
              </Link>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">7</div>
                <div className="text-chocolate/70 text-sm">Days Fresh</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">12+</div>
                <div className="text-chocolate/70 text-sm">Weekly Flavors</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">100%</div>
                <div className="text-chocolate/70 text-sm">Natural</div>
              </div>
            </div>
          </div>

          {/* Right Content - Gelato image */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main gelato image */}
              <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square relative rounded-2xl overflow-hidden">
                  <Image
                    src="/images/gallery/gallery1.jpg"
                    alt="Beautiful gelato display"
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
                              <div class="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span class="text-white text-4xl">🍨</span>
                              </div>
                              <p class="text-chocolate font-medium">Gelato Display</p>
                              <p class="text-chocolate/60 text-sm">Gallery Image 1</p>
                            </div>
                          </div>
                        `;
                      }
                    }}
                  />
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
                <span className="text-2xl">🥛</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-secondary/10 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-chocolate/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
