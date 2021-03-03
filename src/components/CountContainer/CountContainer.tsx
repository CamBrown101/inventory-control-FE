import React from 'react';
import './CountContainer.scss';
import ItemCountContainer from './ItemCountContainer/ItemCountContainer';
import StorageAreas from './StorageAreas/StorageAreas/StorageAreas';

const CountContainer = () => {
  const areas = [
    { name: 'areaOne', items: [1, 2, 3] },
    { name: 'areaTwo', items: [1, 4, 5, 6] },
  ];
  return (
    <div className="count-container">
      <StorageAreas areas={areas} />
      <ItemCountContainer />
    </div>
  );
};

export default CountContainer;
