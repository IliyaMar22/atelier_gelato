import React from 'react';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Atelier del Gelato Logo"
        width={200}
        height={200}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
};

export default Logo;