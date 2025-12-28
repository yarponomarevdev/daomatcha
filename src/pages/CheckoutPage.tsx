import { useState } from 'react';
import { Page, CartItem } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Textarea } from '../components/ui/Textarea';

interface CheckoutPageProps {
  cart: CartItem[];
  getCartTotal: () => number;
  onNavigate: (page: Page) => void;
  onClearCart: () => void;
}

export const CheckoutPage = ({ cart, getCartTotal, onNavigate, onClearCart }: CheckoutPageProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    deliveryType: 'courier',
    address: '',
    comment: '',
  });

  const [deliveryCost, setDeliveryCost] = useState(0);
  const subtotal = getCartTotal();
  const total = subtotal + deliveryCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', { formData, cart, total });
    alert('Заказ оформлен! Переход к оплате...');
    onNavigate('payment');
  };

  const handleDeliveryChange = (type: string) => {
    setFormData({ ...formData, deliveryType: type });
    // Mock delivery cost calculation
    if (type === 'courier') setDeliveryCost(350);
    else if (type === 'pvz') setDeliveryCost(200);
    else setDeliveryCost(0);
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Оформление заказа"
        onBack={() => onNavigate('cart')}
      />

      <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-4 pb-4 space-y-6">
        {/* Order Items */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>🛍️</span>
            Ваш заказ
          </h3>
          <div className="space-y-2">
            {cart.map(item => (
              <div key={item.product.id} className="flex justify-between text-sm">
                <span className="text-white/80">
                  {item.product.name} × {item.quantity}
                </span>
                <span className="text-white font-medium">
                  {(item.product.price * item.quantity).toLocaleString('ru-RU')} ₽
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>👤</span>
            Контактные данные
          </h3>
          <Input
            label="Ваше имя"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Телефон"
            type="tel"
            required
            placeholder="+7 (___) ___-__-__"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
          <Input
            label="E-mail"
            type="email"
            placeholder="Для чека (необязательно)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        {/* City */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>📍</span>
            Город
          </h3>
          <Input
            placeholder="Начните вводить название города..."
            required
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          />
        </div>

        {/* Delivery Type */}
        {formData.city && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
              <span>🚚</span>
              Способ доставки (СДЭК)
            </h3>
            <div className="space-y-3">
              {[
                { value: 'courier', icon: '🚗', title: 'Курьером до двери', subtitle: 'Доставим по указанному адресу', price: 350 },
                { value: 'pvz', icon: '📦', title: 'До пункта выдачи', subtitle: 'Заберите в удобное время', price: 200 },
                { value: 'pickup', icon: '🏪', title: 'Самовывоз', subtitle: 'Москва, Тихорецкий бул., 1', price: 0 },
              ].map(option => (
                <label
                  key={option.value}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                    formData.deliveryType === option.value
                      ? 'bg-white/20 border-2 border-white'
                      : 'bg-white/5 border-2 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <input
                    type="radio"
                    name="deliveryType"
                    value={option.value}
                    checked={formData.deliveryType === option.value}
                    onChange={(e) => handleDeliveryChange(e.target.value)}
                    className="hidden"
                  />
                  <span className="text-2xl">{option.icon}</span>
                  <div className="flex-1">
                    <div className="text-white font-medium text-sm">{option.title}</div>
                    <div className="text-white/70 text-xs">{option.subtitle}</div>
                  </div>
                  <span className="text-white font-semibold">{option.price} ₽</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Address (if courier) */}
        {formData.deliveryType === 'courier' && (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <Input
              label="Адрес доставки"
              placeholder="Улица, дом, квартира"
              required
              value={formData.address}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            />
          </div>
        )}

        {/* Comment */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
            <span>💬</span>
            Комментарий
          </h3>
          <Textarea
            placeholder="Комментарий к заказу (необязательно)"
            rows={3}
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          />
        </div>

        {/* Summary */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-2">
          <div className="flex justify-between text-white/80 text-sm">
            <span>Товары ({cart.length} шт.)</span>
            <span>{subtotal.toLocaleString('ru-RU')} ₽</span>
          </div>
          <div className="flex justify-between text-white/80 text-sm">
            <span>Доставка СДЭК</span>
            <span>{deliveryCost} ₽</span>
          </div>
          <div className="h-px bg-white/20 my-2" />
          <div className="flex justify-between text-white font-bold text-lg">
            <span>Итого к оплате</span>
            <span>{total.toLocaleString('ru-RU')} ₽</span>
          </div>
        </div>
      </form>

      {/* Submit Button */}
      <div className="flex-shrink-0 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <Button type="submit" form="checkout-form" variant="primary" className="w-full">
          Перейти к оплате
        </Button>
      </div>
    </div>
  );
};
