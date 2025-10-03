'use client';

import { useState } from 'react';

export default function About() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-cream to-vanilla">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-medium text-lg mb-4">Tradition and Love</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
                How It&apos;s Made?
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-chocolate/80">
                At Atelier del Gelato, we believe that the best gelato comes from the finest ingredients 
                and traditional Italian techniques. Our master gelato maker brings years of experience 
                from the heart of Italy to Sofia.
              </p>

              <p className="text-lg text-chocolate/80">
                Every batch is crafted by hand using only natural ingredients. We source our milk from 
                local Bulgarian farms, our fruits from regional suppliers, and our premium ingredients 
                directly from Italy. No artificial flavors, no preservatives, just pure, authentic gelato.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center text-primary hover:text-pink-600 transition-colors font-medium text-lg group"
              >
                <span>Read More</span>
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl p-8 shadow-2xl">
              <div className="aspect-square bg-white/50 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-4xl">👨‍🍳</span>
                  </div>
                  <p className="text-chocolate font-medium">Gelato Making Process</p>
                  <p className="text-chocolate/60 text-sm">Placeholder for about image</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🥛</span>
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <span className="text-xl">🌿</span>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">1️⃣</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-4">Selection</h3>
            <p className="text-chocolate/70">
              We carefully select the finest natural ingredients, sourcing locally when possible 
              and importing premium Italian products for authentic taste.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">2️⃣</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-4">Crafting</h3>
            <p className="text-chocolate/70">
              Using traditional Italian techniques, we slowly churn our gelato to achieve 
              the perfect texture and density that makes it truly special.
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">3️⃣</span>
            </div>
            <h3 className="font-display text-xl font-bold text-chocolate mb-4">Serving</h3>
            <p className="text-chocolate/70">
              Freshly made and served at the perfect temperature, our gelato is ready 
              to create those special &quot;Baci moments&quot; every day.
            </p>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-6">
              <h3 className="font-display text-3xl font-bold text-chocolate">
                Our Artisanal Process
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-chocolate/60 hover:text-chocolate"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="font-display text-xl font-bold text-chocolate mb-3">Preparation</h4>
                <p className="text-chocolate/80">
                  Every morning, we start fresh. Our ingredients are carefully measured and prepared 
                  according to traditional recipes. We use only the finest milk from local Bulgarian 
                  farms, ensuring freshness and quality in every batch.
                </p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-chocolate mb-3">Production</h4>
                <p className="text-chocolate/80">
                  Our gelato is made in small batches using a traditional Italian gelato machine. 
                  The slow churning process creates the signature dense, creamy texture that sets 
                  gelato apart from regular ice cream. This process takes time, but the result is worth it.
                </p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-chocolate mb-3">Quality Control</h4>
                <p className="text-chocolate/80">
                  Each batch is tested for consistency, flavor, and texture. We maintain strict 
                  temperature controls and follow traditional Italian methods to ensure every 
                  scoop meets our high standards.
                </p>
              </div>

              <div>
                <h4 className="font-display text-xl font-bold text-chocolate mb-3">Weekly Innovation</h4>
                <p className="text-chocolate/80">
                  Our rotating menu keeps things exciting. Every week, we introduce new flavors 
                  while maintaining our core classics. This approach allows us to showcase seasonal 
                  ingredients and experiment with new combinations.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-chocolate/10">
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-full bg-primary text-white py-3 rounded-full hover:bg-pink-600 transition-colors font-medium"
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
