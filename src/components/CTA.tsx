import Link from "next/link";

interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
  isExternal?: boolean;
}

interface CTAProps {
  title: string;
  description: string;
  buttons: CTAButton[];
}

export function CTA({ title, description, buttons }: CTAProps) {
  return (
    <section className="supplier-cta bg-gray-50">
      <div className="max-w-7xl mx-auto px-5 py-12">
        <div className="relative bg-[#1B2845] rounded-2xl p-12 text-center overflow-hidden">
          {/* Simpler, more subtle background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex gap-4 justify-center">
              {buttons.map((button, index) => {
                const className = `px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  button.variant === 'primary' 
                    ? 'bg-white text-[#1B2845] hover:bg-gray-100' 
                    : 'bg-transparent text-white border-2 border-white hover:bg-white/10'
                }`;

                return button.isExternal ? (
                  <a 
                    key={index}
                    href={button.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {button.text}
                  </a>
                ) : (
                  <Link 
                    key={index}
                    href={button.href}
                    className={className}
                  >
                    {button.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 