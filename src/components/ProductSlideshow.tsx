"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface SlideImage {
  src: string;
  alt: string;
  description: string;
}

interface ProductSlideshowProps {
  images: SlideImage[];
}

export default function ProductSlideshow({ images }: ProductSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Handle auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPlaying, images.length]);

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden bg-white">
      {/* Main Image */}
      <Image
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        fill
        priority
        className="object-contain"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* Controls Overlay */}
      <div className="absolute inset-0 flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={goToPrevious}
          className="m-4 rounded-full bg-black/70 p-2 text-white hover:bg-black/90"
          aria-label="Previous image"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={goToNext}
          className="m-4 rounded-full bg-black/70 p-2 text-white hover:bg-black/90"
          aria-label="Next image"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Top Controls */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="rounded bg-black/70 p-2 text-white hover:bg-black/90"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z" />
            </svg>
          )}
        </button>
        
        <div className="rounded bg-black/70 px-3 py-1 text-sm text-white">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Description Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4 text-white">
        <p className="text-lg font-semibold">
          {images[currentIndex].description}
        </p>
      </div>
    </div>
  );
} 