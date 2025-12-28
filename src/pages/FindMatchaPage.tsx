import { Page } from '../types';
import { NearbyPage } from './NearbyPage';

interface FindMatchaPageProps {
  onNavigate: (page: Page) => void;
}

export const FindMatchaPage = ({ onNavigate }: FindMatchaPageProps) => {
  // This is essentially the same as NearbyPage but accessed from main menu
  const handleBack = () => onNavigate('main-menu');
  
  return <NearbyPage onNavigate={handleBack as any} />;
};
