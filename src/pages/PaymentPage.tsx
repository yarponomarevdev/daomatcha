import { useEffect, useState } from 'react';
import { Page } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';

interface PaymentPageProps {
  onNavigate: (page: Page, data?: any) => void;
  cart: any[];
  getCartTotal: () => number;
}

export const PaymentPage = ({ onNavigate, cart, getCartTotal }: PaymentPageProps) => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const handlePayment = () => {
    // Simulate payment processing
    const orderId = Date.now().toString().slice(-6);
    setTimeout(() => {
      onNavigate('payment-success', { orderId });
    }, 2000);
  };

  const total = getCartTotal() + 350; // Including delivery

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Оплата заказа"
        onBack={() => onNavigate('checkout')}
      />

      <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-6">
        {/* Order Info */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-white/80">К оплате:</span>
            <span className="text-white text-2xl font-bold">{total.toLocaleString('ru-RU')} ₽</span>
          </div>
          <p className="text-white/60 text-sm">Заказ #12345</p>
        </div>

        {/* Payment Methods */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
          <h3 className="text-white font-medium mb-4">Доступные способы оплаты:</h3>
          <div className="flex gap-4 mb-6">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5B2D8C] to-[#E31E24] rounded-xl" />
              <span className="text-white/80 text-xs">СБП</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#FFDD2D] rounded-xl flex items-center justify-center text-xl font-bold">Т</div>
              <span className="text-white/80 text-xs">T-Pay</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 bg-[#1A1F71] rounded-xl" />
              <span className="text-white/80 text-xs">Карта</span>
            </div>
          </div>

          <Button onClick={handlePayment} variant="primary" className="w-full">
            <span>🔒</span>
            Перейти к оплате
          </Button>

          <p className="text-white/60 text-xs text-center mt-3">
            🔒 Безопасная оплата через T-Bank
          </p>
        </div>

        {/* Payment Status */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 border-4 border-white/20 border-t-white rounded-full animate-spin" />
          <p className="text-white mb-2">Ожидание оплаты...</p>
          <p className="text-white/60 text-sm">
            Осталось: {minutes}:{seconds.toString().padStart(2, '0')}
          </p>
        </div>
      </div>
    </div>
  );
};
