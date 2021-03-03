import React from 'react';
import './CountContainer.scss';
import ItemCountContainer from './ItemCountContainer/ItemCountContainer';
import StorageAreas from './StorageAreas/StorageAreas/StorageAreas';

const CountContainer = () => {
  return (
    <div className="count-container">
      <StorageAreas />
      <ItemCountContainer />
    </div>
  );
};

export default CountContainer;
