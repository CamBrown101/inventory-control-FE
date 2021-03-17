import React, { useState, Dispatch, SetStateAction } from 'react';
import './NumberPad.scss';

type Props = {
  value: string;
  updateFunction: Dispatch<SetStateAction<number>>;
};

function Numberpad({ value, updateFunction }: Props) {
  const [inputValue, setInputValue] = useState(`${value}`);

  const handleClick = (value: number) => {
    const valueClone = inputValue;
    setInputValue(valueClone + value);
    console.log(inputValue);
  };

  return (
    <div className="number-pad-container">
      <input value={inputValue} type="number" />
      <div className="number-buttons">
        <button
          onClick={() => {
            handleClick(1);
          }}>
          1
        </button>
        <button
          onClick={() => {
            handleClick(2);
          }}>
          2
        </button>{' '}
        <button
          onClick={() => {
            handleClick(3);
          }}>
          3
        </button>
      </div>
    </div>
  );
}

export default Numberpad;
