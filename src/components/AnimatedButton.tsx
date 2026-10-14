import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

interface AnimatedButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'circle' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: 'arrow' | 'up-right' | 'custom' | 'none';
  customIcon?: React.ReactNode;
  href?: string;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon = 'arrow',
  customIcon,
  href,
  onClick,
  className = '',
  type = 'button',
  fullWidth = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Size styling
  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm md:text-base px-5 py-2.5 gap-2',
    lg: 'text-base md:text-lg px-7 py-3.5 gap-2.5 font-bold',
  };

  // Base variant styles
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      // Golden Amber matching design: #E5A855 / #F59E0B
      variantClasses =
        'bg-[#e5a855] hover:bg-[#f3b562] active:bg-[#d69845] text-slate-950 font-bold shadow-[0_4px_20px_rgba(229,168,85,0.35)] hover:shadow-[0_6px_25px_rgba(229,168,85,0.55)] border border-amber-300/40';
      break;
    case 'secondary':
      variantClasses =
        'bg-slate-900/80 hover:bg-slate-800 text-white font-semibold border border-slate-700/80 hover:border-amber-400/50 backdrop-blur-md shadow-lg';
      break;
    case 'outline':
      variantClasses =
        'bg-transparent hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 font-semibold border border-amber-500/50 hover:border-amber-400 shadow-sm';
      break;
    case 'circle':
      variantClasses =
        'w-10 h-10 rounded-full bg-slate-900/80 border border-amber-500/50 text-amber-400 hover:bg-amber-500 hover:text-slate-950 hover:border-amber-400 shadow-md p-0 flex items-center justify-center';
      break;
    case 'ghost':
      variantClasses =
        'bg-transparent text-slate-300 hover:text-white hover:bg-white/5';
      break;
  }

  const baseClasses = `inline-flex items-center justify-center rounded-full transition-all duration-300 ease-out cursor-pointer select-none ${
    variant === 'circle' ? '' : sizeClasses[size]
  } ${variantClasses} ${fullWidth ? 'w-full' : ''} ${className}`;

  // Framer Motion icon animations on hover
  const iconVariants = {
    initial: { x: 0, y: 0, scale: 1 },
    hover: {
      x: 4,
      scale: 1.12,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 18,
      },
    },
  };

  const circleIconVariants = {
    initial: { x: 0, y: 0, rotate: 0 },
    hover: {
      x: 2,
      rotate: -15,
      scale: 1.18,
      transition: {
        type: 'spring' as const,
        stiffness: 400,
        damping: 18,
      },
    },
  };

  const renderIcon = () => {
    if (icon === 'none') return null;
    if (icon === 'custom' && customIcon) {
      return (
        <motion.span
          animate={isHovered ? 'hover' : 'initial'}
          variants={variant === 'circle' ? circleIconVariants : iconVariants}
          className="inline-flex items-center shrink-0"
        >
          {customIcon}
        </motion.span>
      );
    }
    if (icon === 'up-right') {
      return (
        <motion.span
          animate={isHovered ? 'hover' : 'initial'}
          variants={{
            initial: { x: 0, y: 0 },
            hover: { x: 3, y: -3, transition: { type: 'spring', stiffness: 400 } },
          }}
          className="inline-flex items-center shrink-0"
        >
          <ArrowUpRight className="w-4 h-4" />
        </motion.span>
      );
    }
    return (
      <motion.span
        animate={isHovered ? 'hover' : 'initial'}
        variants={variant === 'circle' ? circleIconVariants : iconVariants}
        className="inline-flex items-center shrink-0"
      >
        <ArrowRight className={variant === 'circle' ? 'w-4 h-4' : 'w-4 h-4'} />
      </motion.span>
    );
  };

  const content = (
    <>
      {children && <span>{children}</span>}
      {renderIcon()}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={baseClasses}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      className={baseClasses}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {content}
    </motion.button>
  );
};
