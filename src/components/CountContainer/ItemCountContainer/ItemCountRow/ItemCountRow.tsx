import React, { useState } from 'react';
import './ItemCountRow.scss';

type Props = {
  name: string;
  bottleSize: string;
  bottleType: string;
  bottleValue: number;
  isCollapsed: boolean;
  areaCount?: number;
};

const ItemCountRow = ({
  name,
  bottleSize,
  bottleType,
  bottleValue,
  areaCount,
  isCollapsed,
}: Props) => {
  const [count, setCount] = useState(areaCount || 0);
  const [focus, setFocus] = useState(false);
  console.log(count);

  const countOnClick = (
    operation: string,
    e: React.FormEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (operation === 'minus') {
      const newCount: number = count - 1;
      if (newCount < 0) {
        setCount(0);
      } else {
        setCount(newCount);
      }
    }
    if (operation === 'plus') {
      const newCount: number = count + 1;
      setCount(newCount);
    }
  };

  const inputValue = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.currentTarget.value);
    if (newValue === NaN) {
      setCount(0);
    } else {
    }
    setCount(newValue);
  };

  const handleBlur = (e: React.FormEvent<HTMLInputElement>) => {
    if (!e.currentTarget.value) {
      setCount(0);
    }
    setFocus(false);
  };

  const handleFocus = () => {
    setFocus(true);
  };

  const createClasses = (): string => {
    let classes = 'item-row-container';
    if (focus) {
      classes += ' focused';
    }
    if (isCollapsed) {
      classes += ' hidden';
    }
    return classes;
  };

  return (
    <div
      className={createClasses()}
      onMouseEnter={() => {
        setFocus(true);
      }}
      onMouseLeave={() => {
        setFocus(false);
      }}>
      <div className="checkbox-item-name">
        <input className="checkbox" type="checkbox" />
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
      <form className="count-controls">
        <button
          className="count-minus-button"
          onClick={(e) => countOnClick('minus', e)}>
          -
        </button>
        <input
          type="number"
          value={count}
          onFocus={() => {
            handleFocus();
          }}
          onBlur={(e) => {
            handleBlur(e);
          }}
          onChange={(e) => {
            inputValue(e);
          }}
          className="current-count"></input>
        {/* <p>count type</p> */}
        <button
          className="count-plus-button"
          onClick={(e) => countOnClick('plus', e)}>
          +
        </button>
      </form>
    </div>
  );
};

export default ItemCountRow;
