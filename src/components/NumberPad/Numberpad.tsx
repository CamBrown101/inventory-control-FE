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
        <button
          onClick={() => {
            handleClick(4);
          }}>
          4
        </button>
        <button
          onClick={() => {
            handleClick(5);
          }}>
          5
        </button>
        <button
          onClick={() => {
            handleClick(6);
          }}>
          6
        </button>
        <button
          onClick={() => {
            handleClick(7);
          }}>
          7
        </button>
        <button
          onClick={() => {
            handleClick(8);
          }}>
          8
        </button>
        <button
          onClick={() => {
            handleClick(9);
          }}>
          9
        </button>
        <button
          onClick={() => {
            handleClick(0);
          }}>
          0
        </button>
        <button
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
