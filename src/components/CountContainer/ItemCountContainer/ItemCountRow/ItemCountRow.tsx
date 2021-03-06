import React from 'react';
import './ItemCountRow.scss';

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

const ItemCountRow = () => {
  return (
    <div>
      <div>
        <input type="checkbox" />
        <p>Item Name</p>
      </div>
      <p>750ml (bottle)</p>
      <div>
        <p>value:</p>
        <p>$49.99</p>
      </div>
      <button>|||</button>
      <div>
        <button>-</button>
        <p className="current-count">0.5</p>
        <p>count type</p>
        <button>+</button>
      </div>
    </div>
  );
};

export default ItemCountRow;
