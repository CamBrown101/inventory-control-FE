import React, { useState, Dispatch, SetStateAction } from 'react';
import './NumberPad.scss';

type Props = {
  value: string;
  updateFunction: Dispatch<SetStateAction<number>>;
  itemName: string;
};

function Numberpad({ value, updateFunction, itemName }: Props) {
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
      <header>
        <div>
          <h4>{itemName}</h4>
          <button className="close-btn">x</button>
        </div>
      </header>
      <input value={inputValue} type="number" />
      <div className="number-buttons">
        <div className="row">
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
        </div>
        <div className="row">
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
        </div>
        <div className="row">
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
        </div>
        <div className="row">
          <button className="number-btn">some-btn</button>
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
    </div>
  );
}

export default Numberpad;
