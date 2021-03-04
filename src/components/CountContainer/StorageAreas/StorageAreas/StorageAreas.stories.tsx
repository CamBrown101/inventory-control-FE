import React from 'react';
import StorageAreas from './StorageAreas';

export default {
  title: 'Count/StorageAreas',
  component: StorageAreas,
};
const areas = [
  { name: 'areaOne', items: [1, 2, 3] },
  { name: 'areaTwo', items: [1, 4, 5, 6] },
];
export const Default = () => <StorageAreas areas={areas} />;
