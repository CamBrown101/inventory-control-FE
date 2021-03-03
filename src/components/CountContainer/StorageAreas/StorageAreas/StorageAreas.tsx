import React from 'react';
import './StorageAreas.scss';

interface StorageAreas {
  areas: any[];
}

const StorageAreas = (areas: StorageAreas) => {
  // const area = areas.map((a, i) => {
  //   return (
  //     <li key={i} className="storage-area-list-item">
  //       <h5 className="area-name">{a.name}</h5>
  //       <div className="area-info">
  //         <h6 className="area-dollar-value">$0.00</h6>
  //         <h6 className="area-item-count">0/{a.items.length}</h6>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <div className="storage-areas-container">
      <div className="storage-areas-container-inner">
        <div className="storage-areas-header">
          <div className="count-summary-container">
            <h3 className="count-summary-title">Count Summary</h3>
            <div className="count-summary-values">
              <p className="dollar-value-summary">$0.00</p>
              <p className="item-count-summary">0/100</p>
            </div>
          </div>
          <div>
            <div className="storage-areas-title">
              <h4>Storage Areas</h4>
              <button>edit</button>
            </div>
          </div>
          <ul className="storage-area-list">{area}</ul>
        </div>
        <div className="storage-areas-footer">
          <div className="unassigned-item-container">
            <p className="unassigned-item-title">Unassigned Items</p>
            <p className="unassigned-item-count">20 Items</p>
          </div>
          <button className="finish-count-btn">Finish Count</button>
        </div>
      </div>
    </div>
  );
};

export default StorageAreas;
