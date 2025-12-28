import { ReactNode, useEffect } from 'react';
import { XIcon } from '../icons/XIcon';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children, footer }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-b from-matcha-darker via-matcha-dark to-matcha-light animate-slide-up">
      {/* Telegram safe area spacer */}
      <div className="h-[60px] flex-shrink-0" />
      
      {/* Header */}
      <div className="flex-shrink-0 px-4 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <div className="w-5 h-5">
              <XIcon />
            </div>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {children}
      </div>

      {/* Footer */}
      {footer && (
        <div className="flex-shrink-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
          {footer}
        </div>
      )}
    </div>
  );
};
