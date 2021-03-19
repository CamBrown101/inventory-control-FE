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

  const handleClear = () => {
    setInputValue('');
  };

  return (
    <div className="number-pad-container">
      <input value={inputValue} type="number" />
      <div className="number-buttons">
        <button
          className="number-btn"
          onClick={() => {
            handleClick(1);
          }}>
          1
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(2);
          }}>
          2
        </button>{' '}
        <button
          className="number-btn"
          onClick={() => {
            handleClick(3);
          }}>
          3
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(4);
          }}>
          4
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(5);
          }}>
          5
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(6);
          }}>
          6
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(7);
          }}>
          7
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(8);
          }}>
          8
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(9);
          }}>
          9
        </button>
        <button
          className="number-btn"
          onClick={() => {
            handleClick(0);
          }}>
          0
        </button>
        <button
          className="clear-btn"
          onClick={() => {
            handleClear();
          }}>
          clear
        </button>
      </div>
    </div>
  );
}

export default Numberpad;
