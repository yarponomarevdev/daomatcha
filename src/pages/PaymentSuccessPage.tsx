import { Page } from '../types';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/ui/Button';
import { CheckCircleIcon } from '../components/icons/CheckCircleIcon';

interface PaymentSuccessPageProps {
  onNavigate: (page: Page) => void;
  orderId: string;
}

export const PaymentSuccessPage = ({ onNavigate, orderId }: PaymentSuccessPageProps) => {
  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Оплата"
        onBack={() => onNavigate('main-menu')}
      />

      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 max-w-md w-full text-center shadow-matcha-strong">
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-matcha-dark mb-2">
            Оплата прошла успешно!
          </h2>
          
          <p className="text-neutral-600 mb-4">
            Спасибо за ваш заказ
          </p>

          <div className="bg-neutral-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-neutral-500 mb-1">Номер заказа</p>
            <p className="text-xl font-bold text-matcha-dark">#{orderId}</p>
          </div>

          <p className="text-sm text-neutral-600 mb-6">
            Мы отправили подтверждение на вашу электронную почту.
            В ближайшее время с вами свяжется курьер.
          </p>

          <div className="space-y-3">
            <Button 
              onClick={() => onNavigate('main-menu')} 
              variant="primary"
              className="w-full"
            >
              Вернуться в главное меню
            </Button>
            
            <Button 
              onClick={() => onNavigate('shop')} 
              variant="outline"
              className="w-full"
            >
              Продолжить покупки
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

