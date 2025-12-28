import { Page } from '../types';
import { ShoppingBagIcon } from '../components/icons/ShoppingBagIcon';
import { CoffeeIcon } from '../components/icons/CoffeeIcon';
import { MapPinIcon } from '../components/icons/MapPinIcon';
import { UsersIcon } from '../components/icons/UsersIcon';
import { MessageCircleIcon } from '../components/icons/MessageCircleIcon';
import { BackgroundTexture } from '../components/BackgroundTexture';

interface MainMenuProps {
  onNavigate: (page: Page) => void;
}

export const MainMenu = ({ onNavigate }: MainMenuProps) => {
  const menuItems = [
    {
      icon: <ShoppingBagIcon />,
      title: 'Выбери матча',
      subtitle: 'в автомате / в кофейне / домой',
      page: 'matcha-choice' as Page,
    },
    {
      icon: <CoffeeIcon />,
      title: 'Что такое матча?',
      subtitle: 'напитки из матчи',
      page: 'recipes' as Page,
    },
    {
      icon: <MapPinIcon />,
      title: 'Найти DAO MATCHA',
      subtitle: 'ближайший автомат / кофейня / магазин',
      page: 'find-matcha' as Page,
    },
    {
      icon: <UsersIcon />,
      title: 'Партнёрство',
      subtitle: 'автоматы / кофейни / ритейл',
      page: 'partnership' as Page,
    },
    {
      icon: <MessageCircleIcon />,
      title: 'Поддержка',
      subtitle: 'оставить отзыв',
      page: 'support' as Page,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col p-6 pt-12 animate-fade-in relative">
      <BackgroundTexture />
      
      {/* Header */}
      <header className="flex flex-col items-center mb-12 relative z-10">
        <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6">
          <svg viewBox="0 0 100 100" className="w-16 h-16">
            <circle 
              cx="50" 
              cy="50" 
              r="40" 
              fill="none" 
              stroke="white" 
              strokeWidth="3"
              strokeDasharray="240"
              strokeDashoffset="20"
            />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white mb-2">DAOMATCHA</h1>
        <p className="text-white/80 text-sm">путь к гармонии вкуса</p>
      </header>

      {/* Menu Buttons */}
      <nav className="flex flex-col gap-4 mb-8 relative z-10">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => onNavigate(item.page)}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4 hover:bg-white/15 transition-all duration-300 hover:shadow-matcha-soft"
          >
            <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-white flex-shrink-0">
              <div className="w-6 h-6">{item.icon}</div>
            </div>
            <div className="flex-1 text-left">
              <div className="text-white font-semibold text-base">{item.title}</div>
              <div className="text-white/70 text-sm">{item.subtitle}</div>
            </div>
            <div className="text-white text-xl">→</div>
          </button>
        ))}
      </nav>

      {/* Footer */}
      <footer className="mt-auto text-center text-white/60 text-xs relative z-10">
        © 2025 DAOMATCHA. Все права защищены.
      </footer>
    </div>
  );
};
