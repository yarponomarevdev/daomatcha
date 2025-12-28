import { useState } from 'react';
import { Page, PartnershipForm } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';

interface PartnershipPageProps {
  onNavigate: (page: Page) => void;
}

export const PartnershipPage = ({ onNavigate }: PartnershipPageProps) => {
  const [showModal, setShowModal] = useState(false);
  const [expandedFormat, setExpandedFormat] = useState<string | null>(null);
  const [formData, setFormData] = useState<PartnershipForm>({
    fullName: '',
    partnerType: '',
    phone: '',
    email: '',
    companyName: '',
  });

  const formats = [
    {
      id: 'automat',
      icon: '🤖',
      title: 'Аренда автомата',
      desc: 'Готовый бизнес под ключ',
      fullDesc: 'Размещение автомата матча в ТЦ, БЦ, фитнес-клубах и других локациях с трафиком. Мы обеспечиваем оборудование, расходники и сервис — вы получаете долю от продаж.',
    },
    {
      id: 'coffee',
      icon: '☕',
      title: 'Кофейня',
      desc: 'Матча-меню для заведения',
      fullDesc: 'Готовые рецептуры напитков на основе матча для вашего меню. Обучение персонала, POS-материалы и оптовые цены на сырьё премиум-качества.',
    },
    {
      id: 'shop',
      icon: '🏪',
      title: 'Магазин / Ритейл',
      desc: 'Витрина DAO MATCHA',
      fullDesc: 'Брендированная витрина с продукцией DAO MATCHA для розничных магазинов и сетей. Поставка товара, мерчандайзинг и маркетинговая поддержка.',
    },
    {
      id: 'marketplace',
      icon: '📦',
      title: 'Маркетплейсы',
      desc: 'WB, Ozon, Яндекс.Маркет',
      fullDesc: 'Станьте официальным продавцом DAO MATCHA на маркетплейсах. Эксклюзивные оптовые условия, готовый контент для карточек и консультации по продвижению.',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership Form Submitted:', formData);
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
    setShowModal(false);
    setFormData({
      fullName: '',
      partnerType: '',
      phone: '',
      email: '',
      companyName: '',
    });
  };

  return (
    <>
      <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
        <PageHeader
          title="Партнёрам"
          onBack={() => onNavigate('main-menu')}
        />

        <div className="flex-1 overflow-y-auto px-4 pb-4">
          {/* Hero Image Placeholder */}
          <div className="w-full h-48 bg-white/5 rounded-2xl mb-6 flex items-center justify-center">
            <span className="text-white/40 text-sm">Партнёрство</span>
          </div>

          {/* Content */}
          <h2 className="text-2xl font-bold text-white mb-4">Развивайте бизнес вместе с DAO MATCHA</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-6 space-y-4 text-white/80 text-sm leading-relaxed">
            <p>Мы создаём экосистему матча в России и приглашаем к сотрудничеству предпринимателей, которые разделяют наши ценности качества и инноваций.</p>
            <p>Матча — один из самых быстрорастущих сегментов напитков. Станьте частью этого рынка с проверенным продуктом и поддержкой от производителя.</p>
          </div>

          {/* Formats */}
          <div className="space-y-4">
            {formats.map(format => (
              <div key={format.id} className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFormat(expandedFormat === format.id ? null : format.id)}
                  className="w-full p-4 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
                >
                  <div className="text-3xl">{format.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base">{format.title}</h3>
                    <p className="text-white/70 text-sm">{format.desc}</p>
                  </div>
                  <span className="text-white text-xl transform transition-transform" style={{
                    transform: expandedFormat === format.id ? 'rotate(90deg)' : 'rotate(0deg)'
                  }}>→</span>
                </button>
                {expandedFormat === format.id && (
                  <div className="px-4 pb-4 pt-2">
                    <p className="text-white/80 text-sm leading-relaxed">{format.fullDesc}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex-shrink-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
          <Button onClick={() => setShowModal(true)} variant="primary" className="w-full">
            Стать партнёром
          </Button>
        </div>
      </div>

      {/* Partnership Form Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Заявка на партнёрство"
        footer={
          <Button type="submit" form="partnership-form" variant="primary" className="w-full">
            Отправить заявку
          </Button>
        }
      >
        <form id="partnership-form" onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="ФИО"
            placeholder="Иванов Иван Иванович"
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          />

          <div>
            <label className="block text-sm font-medium text-white/80 mb-3">
              Формат сотрудничества <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: 'automat', icon: '🤖', label: 'Автомат' },
                { value: 'coffee', icon: '☕', label: 'Кофейня' },
                { value: 'shop', icon: '🏪', label: 'Магазин' },
                { value: 'marketplace', icon: '📦', label: 'Маркетплейс' },
              ].map(option => (
                <label
                  key={option.value}
                  className={`flex flex-col items-center gap-2 p-4 rounded-xl cursor-pointer transition-all ${
                    formData.partnerType === option.value
                      ? 'bg-white/20 border-2 border-white'
                      : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name="partnerType"
                    value={option.value}
                    checked={formData.partnerType === option.value}
                    onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                    className="hidden"
                    required
                  />
                  <span className="text-2xl">{option.icon}</span>
                  <span className="text-white text-sm font-medium">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          <Input
            label="Телефон"
            type="tel"
            placeholder="+7 (___) ___-__-__"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="example@company.ru"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <Input
            label="Название компании"
            placeholder="ООО «Компания»"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
        </form>
      </Modal>
    </>
  );
};
