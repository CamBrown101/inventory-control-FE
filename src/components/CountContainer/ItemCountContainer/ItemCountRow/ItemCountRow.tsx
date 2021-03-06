import React from 'react';
import './ItemCountRow.scss';

type Props = {
  name: string;
  bottleSize: string;
  bottleType: string;
  bottleValue: number;
  areaCount?: number;
};

const ItemCountRow = ({
  name,
  bottleSize,
  bottleType,
  bottleValue,
  areaCount,
}: Props) => {
  return (
    <div className="item-row-container">
      <div className="checkbox-item-name">
        <input type="checkbox" />
        <p className="item-name">{name}</p>
      </div>
      <p className="bottle-size">
        {bottleSize} ({bottleType})
      </p>
      <div className="dollar-value-wrapper">
        <p>value:</p>
        <p>${bottleValue}</p>
      </div>
      <button className="dropdown-btn">|||</button>
      <div className="count-controls">
        <button className="count-minus-button">-</button>
        <p className="current-count">{areaCount ? areaCount : 0}</p>
        <p>count type</p>
        <button className="count-plus-button">+</button>
      </div>
    </div>
  );
};

export default ItemCountRow;
