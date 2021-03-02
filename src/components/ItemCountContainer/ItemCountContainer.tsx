import React from 'react';
import './ItemCountContainer.scss';

const ItemCountContainer = () => {
  return (
    <div className="item-count-container">
      <header>
        <h2>Selected Area</h2>
        <p>Last updated (Data) by (user)</p>
        <form>
          <button>View Filters</button>
          <input placeholder="Search page" />
        </form>
      </header>
      <p>Items Count Container</p>
    </div>
  );
};

export default ItemCountContainer;
