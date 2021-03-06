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
      <p>count row</p>
    </div>
  );
};

export default ItemCountRow;
