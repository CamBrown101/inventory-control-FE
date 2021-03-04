import React from 'react';
import './ItemCategoryHeader.scss';

const ItemCategoryHeader = () => {
  return (
    <div>
      <input type="checkbox" />
      <h3 className="item-category">Item Category</h3>
      <p className="number-of-items">7 items</p>
      <div className="dollar-total-collapse">
        <p className="dollar-value">$280.15</p>
        <button className="collapse-btn">collapse</button>
      </div>
    </div>
  );
};

export default ItemCategoryHeader;
