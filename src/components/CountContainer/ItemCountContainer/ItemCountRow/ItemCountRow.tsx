import React from 'react';
import './ItemCountRow.scss';

type Props = {
  name: string;
  bottleSize: number;
  bottleValue: number;
  areaCount: number;
};

const ItemCountRow = ({ name, bottleSize, bottleValue, areaCount }: Props) => {
  return (
    <div className="item-row-container">
      <div className="checkbox-item-name">
        <input type="checkbox" />
        <p className="item-name">Item Name</p>
      </div>
      <p className="bottle-size">750ml (bottle)</p>
      <div className="dollar-value-wrapper">
        <p>value:</p>
        <p>$49.99</p>
      </div>
      <button className="dropdown-btn">|||</button>
      <div className="count-controls">
        <button className="count-minus-button">-</button>
        <p className="current-count">0.5</p>
        <p>count type</p>
        <button className="count-plus-button">+</button>
      </div>
    </div>
  );
};

export default ItemCountRow;
