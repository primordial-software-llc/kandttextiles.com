import React from 'react';
import Link from 'next/link';

interface AnimatedButtonOutlineProps {
  href: string;
  children: React.ReactNode;
  textSize?: string;
  width?: string;
  isExternal?: boolean;
}

export const AnimatedButtonOutline: React.FC<AnimatedButtonOutlineProps> = ({
  href,
  children,
  textSize = "text-base",
  isExternal = false
}) => {
  const buttonContent = (
    <>
      <span className="relative z-10 flex items-center">
        {children}
        <svg className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </span>
      
      {/* Animated borders - white borders for outline button */}
      <div className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-500 group-hover:w-full"></div>
      <div className="absolute left-0 top-0 w-px h-0 bg-white transition-all duration-500 group-hover:h-full"></div>
      <div className="absolute right-0 bottom-0 w-px h-0 bg-white transition-all duration-500 group-hover:h-full"></div>
    </>
  );

  const buttonClasses = `group relative inline-flex items-center w-fit px-6 justify-center py-4 text-white font-semibold transition-all duration-500 border border-white/30 hover:text-white hover:border-transparent ${textSize}`;

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