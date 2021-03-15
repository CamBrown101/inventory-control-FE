import React from 'react';
import 'NumberPad.scss';

function Numberpad() {
  return (
    <div className="number-pad-container">
      <input type="number" />
      <div className="number-buttons">
        <button>1</button>
      </div>
    </div>
  );
}

export default Numberpad;
