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
        <button>Collapse All</button>
        <div className="count-titles">
          <input type="checkbox" />
          <p>Item</p>
          <p>Value</p>
          <p>This Count</p>
        </div>
      </header>
      <main>
        <p>Items Count Container</p>
      </main>
    </div>
  );
};

export default ItemCountContainer;
