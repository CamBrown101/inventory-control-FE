import React from 'react';
import './StorageAreas.scss';

const StorageAreas = () => {
  return (
    <div className="storage-areas-container">
      <div className="count-summary-container">
        <p className="count-summary-title">Count Summary</p>
        <p className="dollar-value-summary">$0.00</p>
        <p className="item-count-summary">0/100</p>
      </div>
      <div className="storage-areas-title">
        <p>Storage Areas</p>
        <button>edit</button>
      </div>
    </div>
  );
};

export default StorageAreas;
