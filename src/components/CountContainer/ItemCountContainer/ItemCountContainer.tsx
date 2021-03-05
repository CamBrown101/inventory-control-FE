import React from 'react';
import './ItemCountContainer.scss';
import ItemCategoryHeader from './ItemCategoryHeader/ItemCategoryHeader';

const ItemCountContainer = () => {
  const items = [
    { id: 1, name: 'Absolute', totalCount: 0, storageAreaCount: 0 },
    { id: 2, name: 'Ketel One', totalCount: 0, storageAreaCount: 0 },
    { id: 3, name: 'Grey Goose', totalCount: 0, storageAreaCount: 0 },
  ];

  return (
    <div className="item-count-container">
      <header>
        <div className="area-last-updated">
          <h2 className="selected-area">Selected Area</h2>
          <p className="last-updated">Last updated (Data) by (user)</p>
        </div>
        <div className="item-count-table-titles">
          <form className="item-search">
            <button>View Filters</button>
            <input placeholder="Search Page" />
          </form>
          <button>Collapse All</button>
        </div>
        <div className="count-titles">
          <input type="checkbox" />
          <p>Item</p>
          <p>Value</p>
          <p>This Count</p>
        </div>
      </header>
      <main>
        <ItemCategoryHeader category="Vodka" numberOfItems={20} items={items} />
        <p>Items Count Container</p>
      </main>
    </div>
  );
};

export default ItemCountContainer;
