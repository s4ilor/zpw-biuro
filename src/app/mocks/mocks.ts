import { Item } from '../models/item';

export const ITEMS: Item[] = [
  { id: 1, rating: 3, name: 'Germany Trip', destination: 'Germany', startDate: new Date('2/11/2019'), endDate: new Date('6/11/2019'), limit: 44, price: 2120, description: 'Trip to Germany', imageSrc: '/img/germany.png'},
  { id: 2, rating: 4, name: 'France Trip', destination: 'France', startDate: new Date('2/11/2019'), endDate: new Date('2/22/2019'), limit: 22, price: 2150, description: 'Trip to France', imageSrc: '/img/france.png'},
  { id: 3, rating: 4, name: 'Japan Trip', destination: 'Japan', startDate: new Date('1/12/2019'), endDate: new Date('25/12/2019'), limit: 20, price: 3250, description: 'Trip to Japan', imageSrc: '/img/japan.png'},
  { id: 4, rating: 0, name: 'Norway Trip', destination: 'Norway', startDate: new Date('1/12/2019'), endDate: new Date('2/2/2019'), limit: 22, price: 1400, description: 'Trip to Norway', imageSrc: '/img/norway.png'},
  { id: 5, rating: 3, name: 'Iceland Trip', destination: 'Iceland', startDate: new Date('6/12/2019'), endDate: new Date('6/28/2019'), limit: 22, price: 1200, description: 'Trip to Iceland', imageSrc: '/img/iceland.png'},
  { id: 6, rating: 5, name: 'Switzerland Trip', destination: 'Switzerland', startDate: new Date('3/12/2019'), endDate: new Date('3/14/2019'), limit: 23, price: 2000, description: 'Trip to Switzerland', imageSrc: '/img/switzerland.png'},
  { id: 7, rating: 4, name: 'Finland Trip', destination: 'Finland', startDate: new Date('7/12/2019'), endDate: new Date('7/25/2019'), limit: 33, price: 2222, description: 'Trip to Finland', imageSrc: '/img/finland.png'},
  { id: 8, rating: 5, name: 'Portugal Trip', destination: 'Portugal', startDate: new Date('4/12/2019'), endDate: new Date('4/22/2019'), limit: 13, price: 2130, description: 'Trip to Portugal', imageSrc: '/img/portugal.png'},
];

