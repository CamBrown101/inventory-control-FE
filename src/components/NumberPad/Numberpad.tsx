import React, {
  useState,
  Dispatch,
  SetStateAction,
  ReactEventHandler,
} from 'react';
import './NumberPad.scss';

type Props = {
  value: string;
  updateFunction: Dispatch<SetStateAction<number>>;
  returnValue: number;
  itemName: string;
  measurementType: string;
  measurementValue: number;
};

function Numberpad({
  value,
  updateFunction,
  returnValue,
  itemName,
  measurementType,
  measurementValue,
}: Props) {
  const [inputValue, setInputValue] = useState(`${value}`);
  console.log(returnValue);

  const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
    let valueClone = inputValue;
    if (e.nativeEvent.data === null) {
      valueClone.toString();
      let slicedClone = valueClone.slice(0, valueClone.length - 1);
      setInputValue(slicedClone);
    } else {
      setInputValue(valueClone + e.nativeEvent.data);
    }
    let inputValueClone = inputValue;
    updateFunction(Number.parseInt(inputValueClone));
    console.log(returnValue);
  };

  const handleClick = (value: number) => {
    const valueClone = inputValue;
    setInputValue(valueClone + value);
    let inputValueClone = inputValue;
    updateFunction(Number.parseInt(inputValueClone));
    console.log(returnValue);
  };

  const handleClear = () => {
    setInputValue('');
    updateFunction(0);
    console.log(returnValue);
  };

  return (
    <div className="number-pad-container">
      <header>
        <div className="header-row">
          <h4>{itemName}</h4>
          <button className="close-btn">x</button>
        </div>
        <h4>
          {measurementValue} {measurementType}
        </h4>
      </header>
      <input
        onChange={(e) => {
          handleOnChange(e);
        }}
        value={inputValue}
        type="number"
      />
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
