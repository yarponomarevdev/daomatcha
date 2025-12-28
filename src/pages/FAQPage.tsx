import { useState } from 'react';
import { Page } from '../types';
import { PageHeader } from '../components/PageHeader';

interface FAQPageProps {
  onNavigate: (page: Page) => void;
}

export const FAQPage = ({ onNavigate }: FAQPageProps) => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Почему матча готовится 2-3 минуты? Это долго!',
      answer: 'Наш автомат готовит матча по всем традициям китайского чаепития — это полноценный цикл приготовления, который раскрывает весь потенциал напитка. Да, это дольше, чем обычный кофе. Но зато одна чашка матча даёт мягкую энергию на 4-6 часов без скачков и падений. Качество требует времени! ☕',
    },
    {
      question: 'Как оплатить и получить напиток?',
      answer: 'Есть два способа:\n\n1. Через приложение: выберите напиток, оплатите — автомат сразу начнёт готовить.\n\n2. На автомате: оплатите на экране, затем отсканируйте QR-код из приложения — автомат начнёт работу.\n\nОба способа одинаково удобны!',
    },
    {
      question: 'Какого качества матча в автоматах DAO MATCHA?',
      answer: 'Мы используем матча высочайшего качества — церемониальный сорт из лучших чайных регионов. Это не дешёвый порошок из супермаркета. Наша матча проходит тщательный отбор, правильно хранится и готовится по традиционным технологиям. Вы почувствуете разницу с первого глотка!',
    },
    {
      question: 'Можно ли вернуть деньги, если что-то пошло не так?',
      answer: 'Конечно! Если автомат не выдал напиток, качество вас не устроило или возникла любая проблема — напишите нам через раздел «Сообщить о проблеме». Укажите номер автомата и время. Мы обязательно разберёмся и вернём деньги или дадим промокод на бесплатный напиток.',
    },
    {
      question: 'Где найти ближайший автомат DAO MATCHA?',
      answer: 'Откройте раздел «Найти DAO MATCHA» в главном меню. Там карта со всеми нашими автоматами, кофейнями-партнёрами и магазинами. Можно отфильтровать по типу точки и построить маршрут. Сеть постоянно растёт — скоро будем ещё ближе к вам!',
    },
  ];

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Частые вопросы"
        onBack={() => onNavigate('support')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {/* Hero Image Placeholder */}
        <div className="w-full h-32 bg-white/5 rounded-2xl mb-6 flex items-center justify-center">
          <span className="text-5xl">❓</span>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <button
                onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                className="w-full p-4 flex items-start gap-3 text-left hover:bg-white/5 transition-colors"
              >
                <span className="flex-1 text-white font-medium text-sm">{faq.question}</span>
                <span className={`text-white text-xl transform transition-transform flex-shrink-0 ${
                  expandedFAQ === index ? 'rotate-45' : ''
                }`}>+</span>
              </button>
              {expandedFAQ === index && (
                <div className="px-4 pb-4">
                  <p className="text-white/80 text-sm leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
