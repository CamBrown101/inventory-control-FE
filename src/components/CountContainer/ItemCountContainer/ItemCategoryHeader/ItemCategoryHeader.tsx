import React from 'react';
import './ItemCategoryHeader.scss';

type Item = {
  id: number;
  category: string;
  name: string;
  totalCount: number;
  storageAreaCount: number;
};

type Props = {
  category: string;
  numberOfItems: number;
  items: Item[];
};

const ItemCategoryHeader = ({ category, numberOfItems, items }: Props) => {
  return (
    <div className="item-count-header">
      <div className="category-name-checkbox">
        <input type="checkbox" />
        <h3 className="item-category">{category}</h3>
      </div>
      <p className="number-of-items">{numberOfItems}</p>
      <div className="dollar-total-collapse">
        <p className="dollar-value">dollar value</p>
        <button className="collapse-btn">collapse</button>
      </div>
    </div>
  );
};

export default ItemCategoryHeader;
