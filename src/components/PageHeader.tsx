import { ReactNode } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface PageHeaderProps {
  title: string;
  onBack: () => void;
  rightContent?: ReactNode;
}

export const PageHeader = ({ title, onBack, rightContent }: PageHeaderProps) => {
  return (
    <div className="flex-shrink-0">
      <div className="h-[60px]" />
      <header className="px-4 py-4 flex items-center justify-between">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
        >
          <div className="w-6 h-6">
            <ArrowLeftIcon />
          </div>
        </button>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
        {rightContent ? rightContent : <div className="w-10" />}
      </header>
    </div>
  );
};
