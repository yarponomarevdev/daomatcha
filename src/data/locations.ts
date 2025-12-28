import { Location } from '../types';

export const locations: Location[] = [
  {
    id: '1',
    name: 'Автомат DAOMATCHA',
    address: 'ТЦ Галерея, 1 этаж',
    distance: '350 м',
    type: 'automat',
  },
  {
    id: '2',
    name: 'Кофейня Green Cup',
    address: 'ул. Ленина, 42',
    distance: '800 м',
    type: 'coffee',
  },
  {
    id: '3',
    name: 'ВкусВилл',
    address: 'ул. Пушкина, 15',
    distance: '1.2 км',
    type: 'shop',
  },
  {
    id: '4',
    name: 'Автомат DAOMATCHA',
    address: 'Метро Невский проспект',
    distance: '1.5 км',
    type: 'automat',
  },
  {
    id: '5',
    name: 'Matcha Story',
    address: 'Невский пр., 100',
    distance: '2.1 км',
    type: 'coffee',
  },
];

export const getLocationsByType = (type: 'automat' | 'coffee' | 'shop'): Location[] => {
  return locations.filter(l => l.type === type);
};
