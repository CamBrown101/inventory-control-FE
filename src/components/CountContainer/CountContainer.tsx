import React from 'react';
import ItemCountContainer from './ItemCountContainer/ItemCountContainer';
import StorageAreas from './StorageAreas/StorageAreas/StorageAreas';

const CountContainer = () => {
  return (
    <div>
      <StorageAreas />
      <ItemCountContainer />
    </div>
  );
};

export default CountContainer;
