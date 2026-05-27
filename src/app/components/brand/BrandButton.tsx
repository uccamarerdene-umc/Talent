import { ReactNode } from 'react';

interface BrandButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function BrandButton({ variant = 'primary', children, onClick, href, className = '' }: BrandButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2 transition-all min-h-[48px]';

  const variants = {
    primary: 'bg-[#E63995] text-white hover:bg-[#2A1466]',
    secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-[#2A1466]',
    ghost: 'bg-transparent text-[#E63995] hover:bg-[#FFD6E8]',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
