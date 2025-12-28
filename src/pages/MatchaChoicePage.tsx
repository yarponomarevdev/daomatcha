import { Page } from '../types';
import { PageHeader } from '../components/PageHeader';

interface MatchaChoicePageProps {
  onNavigate: (page: Page) => void;
}

export const MatchaChoicePage = ({ onNavigate }: MatchaChoicePageProps) => {
  const choices = [
    {
      title: 'Напиток рядом',
      subtitle: 'автоматы, кофейни, магазины',
      emoji: '🏪',
      page: 'nearby' as Page,
    },
    {
      title: 'Заказать с доставкой',
      subtitle: 'доставим домой или в офис',
      emoji: '🚚',
      page: 'shop' as Page,
    },
    {
      title: 'Маркетплейсы',
      subtitle: 'OZON, WB, Яндекс Маркет',
      emoji: '📦',
      page: null,
    },
    {
      title: 'Для партнёров',
      subtitle: 'оптовые поставки B2B',
      emoji: '💼',
      page: 'partnership' as Page,
    },
  ];

  const handleChoiceClick = (choice: typeof choices[0]) => {
    if (choice.page) {
      onNavigate(choice.page);
    } else {
      alert('Ссылка на маркетплейсы откроется в следующей версии');
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Выбор матча"
        onBack={() => onNavigate('main-menu')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="grid grid-cols-1 gap-4">
          {choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => handleChoiceClick(choice)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-white/15 transition-all hover:shadow-matcha-soft"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {choice.emoji}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-lg mb-1">{choice.title}</h3>
                <p className="text-white/70 text-sm">{choice.subtitle}</p>
              </div>
              <span className="text-white text-2xl">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
