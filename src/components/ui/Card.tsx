import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Card = ({ children, onClick, className = '' }: CardProps) => {
  const baseStyles = 'bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300';
  const interactiveStyles = onClick ? 'cursor-pointer hover:bg-white/15 hover:shadow-matcha-soft' : '';

  return (
    <div 
      onClick={onClick}
      className={`${baseStyles} ${interactiveStyles} ${className}`}
    >
      {children}
    </div>
  );
};
