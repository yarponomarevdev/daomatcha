import { Page } from '../types';
import { PageHeader } from '../components/PageHeader';

interface SupportPageProps {
  onNavigate: (page: Page) => void;
}

export const SupportPage = ({ onNavigate }: SupportPageProps) => {
  const cards = [
    {
      title: 'Отзыв о напитке',
      desc: 'Поделитесь впечатлениями о вкусе матча',
      emoji: '🍵',
    },
    {
      title: 'Отзыв о сервисе',
      desc: 'Оцените работу автомата или обслуживание',
      emoji: '⭐',
    },
    {
      title: 'Частые вопросы',
      desc: 'Ответы на популярные вопросы о матча',
      emoji: '❓',
      page: 'faq' as Page,
    },
    {
      title: 'Сообщить о проблеме',
      desc: 'Расскажите, если что-то пошло не так',
      emoji: '🔧',
    },
  ];

  const handleCardClick = (index: number) => {
    if (index === 2) {
      onNavigate('faq');
    } else {
      console.log(`Support action ${index} clicked`);
      alert('Форма откроется в следующей версии');
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Поддержка"
        onBack={() => onNavigate('main-menu')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-white/15 transition-all hover:shadow-matcha-soft"
            >
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                {card.emoji}
              </div>
              <div className="flex-1 text-left">
                <h3 className="text-white font-semibold text-base mb-1">{card.title}</h3>
                <p className="text-white/70 text-sm">{card.desc}</p>
              </div>
              <span className="text-white text-xl">→</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
