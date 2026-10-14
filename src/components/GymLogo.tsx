import React from 'react';

interface GymLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const GymLogo: React.FC<GymLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'h-14',
    md: 'h-14 sm:h-16',
    lg: 'h-14 sm:h-20',
    xl: 'h-24',
  };

  const textSizes = {
    sm: 'text-xl md:text-2xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl',
    xl: 'text-5xl md:text-6xl',
  };

  const subSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Real GET FIT Logo */}
      <img
        src="/get_fit_mapped_assets/brand/get-fit-logo.png"
        alt="GET FIT Fitness & Gym Logo"
        className={`${iconSizes[size]} w-auto object-contain shrink-0 drop-shadow-[0_2px_8px_rgba(245,158,11,0.35)]`}
      />

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-heading font-extrabold tracking-wider text-white ${textSizes[size]}`}
            style={{ letterSpacing: '0.06em' }}
          >
            GET FIT
          </span>
          <span
            className={`font-sub font-semibold tracking-[0.25em] text-amber-400 ${subSizes[size]}`}
          >
            FITNESS &amp; GYM
          </span>
        </div>
      )}
    </div>
  );
};

