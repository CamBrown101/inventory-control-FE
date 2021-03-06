import React from 'react';
import ItemCategoryHeader from './ItemCategoryHeader';

const items = [
  {
    id: 1,
    category: 'Vodka',
    name: 'Absolute',
    totalCount: 0,
    storageAreaCount: 0,
  },
  {
    id: 2,
    category: 'Vodka',
    name: 'Ketel One',
    totalCount: 0,
    storageAreaCount: 0,
  },
  {
    id: 3,
    category: 'Vodka',
    name: 'Grey Goose',
    totalCount: 0,
    storageAreaCount: 0,
  },
  {
    id: 4,
    category: 'Gin',
    name: 'Beefeater',
    totalCount: 0,
    storageAreaCount: 0,
  },
];
export default {
  title: 'Count/ItemCategoryHeader',
  component: ItemCategoryHeader,
};

export const Default = () => (
  <ItemCategoryHeader category="Vodka" numberOfItems={20} items={items} />
);
