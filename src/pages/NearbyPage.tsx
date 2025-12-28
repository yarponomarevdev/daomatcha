import { useState } from 'react';
import { Page } from '../types';
import { locations } from '../data/locations';
import { PageHeader } from '../components/PageHeader';

interface NearbyPageProps {
  onNavigate: (page: Page) => void;
}

export const NearbyPage = ({ onNavigate }: NearbyPageProps) => {
  const [activeTab, setActiveTab] = useState<'map' | 'list' | 'categories'>('map');
  const [activeFilters, setActiveFilters] = useState<Set<string>>(new Set(['automats', 'coffee', 'shops']));

  const toggleFilter = (filter: string) => {
    const newFilters = new Set(activeFilters);
    if (newFilters.has(filter)) {
      newFilters.delete(filter);
    } else {
      newFilters.add(filter);
    }
    setActiveFilters(newFilters);
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'automat': return '🤖';
      case 'coffee': return '☕';
      case 'shop': return '🏪';
      default: return '📍';
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-gradient-to-b from-matcha-light via-matcha-dark to-matcha-darker animate-slide-in">
      <PageHeader
        title="Напиток рядом"
        onBack={() => onNavigate('matcha-choice')}
      />

      {/* Tabs */}
      <div className="flex-shrink-0 px-4 pb-4">
        <div className="flex gap-2 bg-white/10 rounded-xl p-1">
          {[
            { value: 'map', label: 'Карта' },
            { value: 'list', label: 'Список' },
            { value: 'categories', label: 'Категории' },
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value as any)}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.value
                  ? 'bg-white text-matcha-dark'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-4">
        {activeTab === 'map' && (
          <div>
            {/* Filters */}
            <div className="flex gap-2 mb-4">
              {[
                { value: 'automats', icon: '🤖', label: 'Автоматы' },
                { value: 'coffee', icon: '☕', label: 'Кофейни' },
                { value: 'shops', icon: '🏪', label: 'Магазины' },
              ].map(filter => (
                <button
                  key={filter.value}
                  onClick={() => toggleFilter(filter.value)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    activeFilters.has(filter.value)
                      ? 'bg-white text-matcha-dark'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <span>{filter.icon}</span>
                  <span>{filter.label}</span>
                </button>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-[400px] bg-white/5 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-white font-medium mb-2">Яндекс.Карты</p>
                <p className="text-white/60 text-sm">Карта появится здесь</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'list' && (
          <div className="space-y-3">
            {locations.map(location => (
              <div key={location.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
                  {getIcon(location.type)}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-sm mb-1">{location.name}</h3>
                  <p className="text-white/70 text-xs mb-1">{location.address}</p>
                  <p className="text-white/50 text-xs">{location.distance}</p>
                </div>
                <button className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm hover:bg-white/20 transition-colors">
                  Маршрут
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'categories' && (
          <div className="space-y-4">
            {[
              { icon: '🤖', title: 'Автоматы DAOMATCHA', desc: 'автоматическая выдача напитков из матчи' },
              { icon: '☕', title: 'Кофейни-партнёры', desc: 'напитки по рецепту DAOMATCHA' },
              { icon: '🏪', title: 'Магазины и сети', desc: 'натуральная матча в продаже' },
            ].map((cat, index) => (
              <button
                key={index}
                className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-6 flex items-center gap-4 hover:bg-white/15 transition-all"
              >
                <div className="text-3xl">{cat.icon}</div>
                <div className="flex-1 text-left">
                  <h3 className="text-white font-semibold text-base mb-1">{cat.title}</h3>
                  <p className="text-white/70 text-sm">{cat.desc}</p>
                </div>
                <span className="text-white text-xl">→</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
