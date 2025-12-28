import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  type?: 'button' | 'submit';
  className?: string;
  disabled?: boolean;
}

export const Button = ({ 
  children, 
  onClick, 
  variant = 'primary',
  type = 'button',
  className = '',
  disabled = false
}: ButtonProps) => {
  const baseStyles = 'px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-white text-matcha-dark hover:bg-matcha-cream shadow-matcha-soft hover:shadow-matcha-medium',
    secondary: 'bg-matcha-light text-white hover:bg-matcha-dark shadow-matcha-soft hover:shadow-matcha-medium',
    ghost: 'bg-white/10 text-white hover:bg-white/20 border border-white/20',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};
