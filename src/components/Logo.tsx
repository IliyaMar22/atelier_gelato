import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full"
        fill="none"
        xmlns=" http://www.w3.org/2000/svg"
      >
        {/* Background circle with gradient */}
        <defs>
          <radialGradient id="bgGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2a2a2a"/>
            <stop offset="100%" stopColor="#1a1a1a"/>
          </radialGradient>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700"/>
            <stop offset="50%" stopColor="#D4AF37"/>
            <stop offset="100%" stopColor="#B8860B"/>
          </linearGradient>
        </defs>
        
        <circle cx="100" cy="100" r="95" fill="url(#bgGradient)" stroke="url(#goldGradient)" strokeWidth="3"/>
        
        {/* Gelato cone at top */}
        <g transform="translate(100, 25)">
          {/* Waffle cone pattern */}
          <path
            d="M-18 25 L-12 18 L-6 25 L0 18 L6 25 L12 18 L18 25 L18 40 L-18 40 Z"
            fill="url(#goldGradient)"
            stroke="#B8860B"
            strokeWidth="1"
          />
          
          {/* Gelato scoops with better positioning */}
          <circle cx="-10" cy="12" r="7" fill="url(#goldGradient)"/>
          <circle cx="10" cy="12" r="7" fill="url(#goldGradient)"/>
          <circle cx="0" cy="3" r="7" fill="url(#goldGradient)"/>
        </g>
        
        {/* Curved banner with text */}
        <path
          d="M 25 75 Q 100 50 175 75 Q 100 100 25 75"
          fill="url(#goldGradient)"
          stroke="#B8860B"
          strokeWidth="2"
        />
        
        {/* Banner decorative swirls */}
        <path
          d="M 20 80 Q 15 75 20 70 Q 25 75 20 80"
          fill="url(#goldGradient)"
        />
        <path
          d="M 180 80 Q 185 75 180 70 Q 175 75 180 80"
          fill="url(#goldGradient)"
        />
        
        {/* Text "Atelier Del Gelato" */}
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fill="white"
          fontSize="14"
          fontWeight="bold"
          fontFamily="serif"
          letterSpacing="1px"
        >
          ATELIER DEL GELATO
        </text>
        
        {/* Romantic couple silhouette */}
        <g transform="translate(100, 130)">
          {/* Woman (left) */}
          <g fill="url(#goldGradient)">
            {/* Woman's dress */}
            <ellipse cx="-18" cy="18" rx="10" ry="15"/>
            {/* Woman's head */}
            <circle cx="-18" cy="6" r="5"/>
            {/* Woman's ponytail */}
            <path d="M -23 4 Q -30 0 -26 -4 Q -23 0 -23 4"/>
            {/* Woman's arm */}
            <ellipse cx="-25" cy="12" rx="3" ry="8" transform="rotate(-20 -25 12)"/>
          </g>
          
          {/* Man (right) */}
          <g fill="url(#goldGradient)">
            {/* Man's suit */}
            <rect x="8" y="10" width="20" height="25" rx="3"/>
            {/* Man's head */}
            <circle cx="18" cy="6" r="5"/>
            {/* Man's arm */}
            <ellipse cx="28" cy="12" rx="3" ry="8" transform="rotate(20 28 12)"/>
            {/* Man's bouquet */}
            <circle cx="32" cy="8" r="4" fill="url(#goldGradient)"/>
            <path d="M 32 12 L 32 22" stroke="url(#goldGradient)" strokeWidth="2"/>
          </g>
          
          {/* Heart between them */}
          <path
            d="M -5 15 Q -5 10 0 10 Q 5 10 5 15 Q 5 20 0 25 Q -5 20 -5 15"
            fill="url(#goldGradient)"
          />
        </g>
      </svg>
    </div>
  );
}
