'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream to-vanilla">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Visit Our Atelier
          </h2>
          <p className="text-lg text-chocolate/80 max-w-2xl mx-auto">
            Come experience the magic of our gelato and desserts in person. 
            We&apos;re located in the heart of Sofia and ready to create your next &quot;Baci moment&quot;!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-chocolate mb-2">Address</h3>
                  <p className="text-chocolate/80">
                    ulitsa Georgi S. Rakovski 149<br />
                    Sofia, Bulgaria
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-chocolate mb-2">Hours</h3>
                  <p className="text-chocolate/80">
                    Every day: 11:30 AM - 8:00 PM<br />
                    <span className="text-sm text-chocolate/60">Closed on major holidays</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <h3 className="font-display text-xl font-bold text-chocolate mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/atelierdelgelatobaci/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/atelierdelgelatobaci/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Interactive Map */}
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.1234567890!2d23.1234567890!3d42.1234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8682c4c4c4c4%3A0x1234567890abcdef!2sulitsa%20Georgi%20Sava%20Rakovski%20149%2C%20Sofia%2C%20Bulgaria!5e0!3m2!1sen!2sbg!4v1234567890123!5m2!1sen!2sbg"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Atelier del Gelato Location"
              ></iframe>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h4 className="font-display text-xl font-bold text-chocolate mb-2">Atelier del Gelato</h4>
                  <p className="text-chocolate/70">
                    ulitsa Georgi Sava Rakovski 149<br />
                    Sofia, Bulgaria 1000
                  </p>
                </div>
                <div className="mt-4 md:mt-0">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=ulitsa+Georgi+Sava+Rakovski+149%2C+Sofia%2C+Bulgaria"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-full hover:bg-pink-600 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}