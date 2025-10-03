'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  permalink: string;
  caption?: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Mock data for demonstration - in production, you'd use Instagram Basic Display API
  const mockPosts: InstagramPost[] = [
    {
      id: '1',
      media_type: 'IMAGE',
      media_url: '/images/instagram/vanilla-gelato.jpg',
      permalink: 'https://www.instagram.com/p/example1/',
      caption: 'Our signature vanilla gelato with real vanilla beans from Madagascar',
      timestamp: '2024-01-15T10:00:00Z'
    },
    {
      id: '2',
      media_type: 'IMAGE',
      media_url: '/images/instagram/strawberry-gelato.jpg',
      permalink: 'https://www.instagram.com/p/example2/',
      caption: 'Fresh strawberry gelato made with local Bulgarian strawberries',
      timestamp: '2024-01-14T15:30:00Z'
    },
    {
      id: '3',
      media_type: 'IMAGE',
      media_url: '/images/instagram/mango-gelato.jpg',
      permalink: 'https://www.instagram.com/p/example3/',
      caption: 'Exotic mango gelato - sweetness from tropical temptation',
      timestamp: '2024-01-13T12:00:00Z'
    },
    {
      id: '4',
      media_type: 'IMAGE',
      media_url: '/images/instagram/pistachio-gelato.jpg',
      permalink: 'https://www.instagram.com/p/example4/',
      caption: 'Bronte pistachio gelato - gelato art at its finest',
      timestamp: '2024-01-12T16:45:00Z'
    },
    {
      id: '5',
      media_type: 'VIDEO',
      media_url: '/images/instagram/gelato-making.jpg',
      permalink: 'https://www.instagram.com/p/example5/',
      caption: 'Behind the scenes: Making our artisanal gelato',
      timestamp: '2024-01-11T09:15:00Z'
    },
    {
      id: '6',
      media_type: 'IMAGE',
      media_url: '/images/instagram/shop-interior.jpg',
      permalink: 'https://www.instagram.com/p/example6/',
      caption: 'Our beautiful atelier in Sofia - come visit us!',
      timestamp: '2024-01-10T14:20:00Z'
    }
  ];

  useEffect(() => {
    // Simulate API call
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // In production, replace this with actual Instagram API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(mockPosts);
        setError(null);
      } catch (err) {
        setError('Failed to load Instagram posts');
        setPosts(mockPosts); // Fallback to mock data
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handlePostClick = (permalink: string) => {
    window.open(permalink, '_blank', 'noopener,noreferrer');
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="py-20 bg-gradient-to-br from-cream to-vanilla">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
              Follow Our Journey
            </h2>
            <p className="text-chocolate/70 text-lg">
              See our latest creations and behind-the-scenes moments on Instagram
            </p>
          </div>
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-cream to-vanilla">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-chocolate mb-6">
            Follow Our Journey
          </h2>
          <p className="text-chocolate/70 text-lg mb-8 max-w-2xl mx-auto">
            See our latest creations and behind-the-scenes moments on Instagram. 
            Click on any post to visit our Instagram page!
          </p>
          <a
            href="https://www.instagram.com/atelierdelgelatobaci/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            Follow @atelierdelgelatobaci
          </a>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group cursor-pointer relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => handlePostClick(post.permalink)}
            >
              <div className="relative w-full h-full">
                <Image
                  src={post.media_url}
                  alt={post.caption || 'Instagram post'}
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
                            <div class="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                              <span class="text-white text-xl">${post.media_type === 'VIDEO' ? '🎥' : '📷'}</span>
                            </div>
                            <p class="text-chocolate text-xs font-medium">${post.media_type === 'VIDEO' ? 'Video' : 'Photo'}</p>
                          </div>
                        </div>
                      `;
                    }
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-chocolate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Media type indicator */}
                {post.media_type === 'VIDEO' && (
                  <div className="absolute top-2 right-2">
                    <div className="w-6 h-6 bg-black/50 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                )}

                {/* Date */}
                <div className="absolute bottom-2 left-2">
                  <span className="text-white text-xs bg-black/50 px-2 py-1 rounded-full">
                    {formatDate(post.timestamp)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <p className="text-chocolate/70 text-lg mb-6">
            Don't miss our daily updates and special offers!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.instagram.com/atelierdelgelatobaci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/atelierdelgelatobaci/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Follow on Facebook
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
