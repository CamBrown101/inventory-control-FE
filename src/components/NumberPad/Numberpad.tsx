import React from 'react';
import './NumberPad.scss';

type Props = {
  value: string;
  updateFunction: () => {};
};

function Numberpad() {
  return (
    <div className="number-pad-container">
      <input type="number" />
      <div className="number-buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>0</button>
      </div>
    </div>
  );
}

export default Numberpad;
