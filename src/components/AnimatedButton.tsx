import Link from "next/link";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isExternal?: boolean;
  textSize?: string;
}

export function AnimatedButton({ 
  href, 
  children, 
  className = "", 
  isExternal = false,
  textSize = "text-base"
}: AnimatedButtonProps) {
  const Component = isExternal ? "a" : Link;
  const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <div className={`group inline-block ${className}`}>
      <Component 
        href={href}
        className={`relative inline-flex items-center px-8 py-4 text-[#1B2845] font-semibold transition-all duration-500 hover:text-[#34495e] ${textSize}`}
        {...externalProps}
      >
        <span className="relative z-10 flex items-center">
          {children}
          <svg className="w-4 h-4 ml-2 transition-transform duration-500 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
        
        {/* Animated solid underline */}
        <div className="absolute bottom-0 left-0 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
        
        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-[#1B2845] transition-all duration-500 group-hover:w-full"></div>
        
        {/* Left border - slides down from top */}
        <div className="absolute left-0 top-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
        
        {/* Right border - slides up from bottom */}
        <div className="absolute right-0 bottom-0 w-px h-0 bg-[#1B2845] transition-all duration-500 group-hover:h-full"></div>
      </Component>
    </div>
  );
} 