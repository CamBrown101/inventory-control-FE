import React, { useState } from 'react';
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
  const [count, setCount] = useState(areaCount || 0);

  const countOnClick = (operation: string) => {
    if ((operation = 'minus')) {
      setCount(count - 1);
    }
    if ((operation = 'plus')) {
      setCount(count + 1);
    }
  };

  const inputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value);
    setCount(newValue);
  };

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
        <p>Value:</p>
        <p>${bottleValue}</p>
      </div>
      <button className="dropdown-btn">|||</button>
      <div className="count-controls">
        <button className="count-minus-button">-</button>
        <input
          value={count}
          onChange={(e) => {
            inputValue(e);
          }}
          className="current-count"></input>
        {/* <p>count type</p> */}
        <button
          className="count-plus-button"
          onClick={() => countOnClick('plus')}>
          +
        </button>
      </div>
    </div>
  );
};

export default ItemCountRow;
