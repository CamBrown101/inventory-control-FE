import React from 'react';
import './ItemCountContainer.scss';

const ItemCountContainer = () => {
  return (
    <div className="item-count-container">
      <header>
        <div className="area-last-updated">
          <h2 className="selected-area">Selected Area</h2>
          <p className="last-updated">Last updated (Data) by (user)</p>
        </div>
        <form className="item-search">
          <button>View Filters</button>
          <input placeholder="Search Page" />
        </form>
      </header>
      <p>Items Count Container</p>
    </div>
  );
};

export default ItemCountContainer;
