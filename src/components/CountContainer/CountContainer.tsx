import React from 'react';
import StorageAreas from './CountComponents/StorageAreas/StorageAreas';

const CountContainer = () => {
  const storageAreas = [
    { name: 'AreaOne', items: [1, 2, 3] },
    { name: 'AreaTwo', items: [1, 2, 3, 4] },
  ];

  return (
    <div>
      <StorageAreas areas={storageAreas} />
    </div>
  );
};

export default CountContainer;
