import Image from "next/image";

interface BrandHeroProps {
  title: string;
  subtitle: string;
  logo: {
    src: string;
    alt: string;
  };
}

export function BrandHero({ title, subtitle, logo }: BrandHeroProps) {
  return (
    <header className="relative bg-[#1B2845] py-12 text-white">
      {/* Add texture overlays */}
      <div className="absolute inset-0">
        {/* Diagonal stripes overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.05)_75%,transparent_75%)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:16px_16px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B2845]/80 via-transparent to-transparent"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="max-w-3xl w-full">
            <h1 className="text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              {subtitle}
            </p>
          </div>
          <div className="relative w-[300px] h-[200px] bg-white/95 rounded-xl p-8 flex-shrink-0 shadow-lg backdrop-blur-sm">
            {/* Add subtle texture/gradient */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white via-white/98 to-gray-50/95"></div>
            
            {/* Constrain the image to a smaller area within the box */}
            <div className="relative h-full w-full">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain p-2"  // Add base padding to all logos
                priority
                sizes="(max-width: 768px) 300px, 300px"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
} 