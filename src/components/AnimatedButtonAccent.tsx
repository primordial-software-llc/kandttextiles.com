import React from 'react';
import Link from 'next/link';

interface AnimatedButtonAccentProps {
  href: string;
  children: React.ReactNode;
  textSize?: string;
  width?: string;
  isExternal?: boolean;
}

export const AnimatedButtonAccent: React.FC<AnimatedButtonAccentProps> = ({
  href,
  children,
  textSize = "text-base",
  isExternal = false
}) => {
  const buttonContent = (
    <>
      {/* Shine effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      
      {/* Pulse animation overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2d4a2d]/50 to-[#1f3a1f]/50 opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
      
      <span className="relative z-20 flex items-center">
        {children}
        <svg className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
    </>
  );

  const buttonClasses = `group relative inline-flex items-center w-fit px-6 justify-center py-4 text-white font-semibold transition-all duration-500 bg-gradient-to-r from-[#2d4a2d] to-[#1f3a1f] hover:from-[#3a5a3a] hover:to-[#2d4a2d] shadow-lg hover:shadow-2xl hover:shadow-[#2d4a2d]/25 overflow-hidden ${textSize}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses}>
        {buttonContent}
      </a>
    );
  }

  return (
    <Link href={href} className={buttonClasses}>
      {buttonContent}
    </Link>
  );
}; 