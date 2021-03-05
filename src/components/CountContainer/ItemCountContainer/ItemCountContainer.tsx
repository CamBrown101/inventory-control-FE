import React from 'react';
import './ItemCountContainer.scss';
import ItemCategoryHeader from './ItemCategoryHeader/ItemCategoryHeader';

type Item = {
  id: number;
  category: string;
  name: string;
  totalCount: number;
  storageAreaCount: number;
};

const ItemCountContainer = () => {
  //Dummy data
  const items = [
    {
      id: 1,
      category: 'Vodka',
      name: 'Absolute',
      totalCount: 0,
      storageAreaCount: 0,
    },
    {
      id: 2,
      category: 'Vodka',
      name: 'Ketel One',
      totalCount: 0,
      storageAreaCount: 0,
    },
    {
      id: 3,
      category: 'Vodka',
      name: 'Grey Goose',
      totalCount: 0,
      storageAreaCount: 0,
    },
    {
      id: 4,
      category: 'Gin',
      name: 'Beefeater',
      totalCount: 0,
      storageAreaCount: 0,
    },
  ];

  const getCategories = (itemsArray: Item[]) => {
    let categories: string[] = [];
    const categoriesArray = itemsArray.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return categories;
  };

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
