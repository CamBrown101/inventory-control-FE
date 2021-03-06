import React from 'react';
import './ItemCountContainer.scss';
import ItemCategoryHeader from './ItemCategoryHeader/ItemCategoryHeader';
import ItemCountRow from './ItemCountRow/ItemCountRow';

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
      id: 4,
      category: 'Gin',
      name: 'Beefeater',
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
      id: 5,
      category: 'Whiskey',
      name: 'Lot 40',
      totalCount: 0,
      storageAreaCount: 0,
    },
  ];

  // Loops through itemsArray and creates an array of category names
  const getCategories = (itemsArray: Item[]) => {
    let categories: string[] = [];
    itemsArray.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
    return categories;
  };

  const sortItemsIntoCategories = (
    itemsArray: Item[],
    categories: string[]
  ) => {
    const sortedItemsByCategories: any[] = [];
    // Loops through categories array and adds category object to sortedItemsByCategoies array
    for (let i = 0; i < categories.length; i++) {
      sortedItemsByCategories.push({
        category: categories[i],
      });
    }
    // Loops through itemsArray and categories and checks if the categories match
    for (let item of itemsArray) {
      for (let category of categories) {
        if (category === item.category) {
          for (let i: number = 0; i < sortedItemsByCategories.length; i++) {
            if (
              category &&
              item.category === sortedItemsByCategories[i].category
            ) {
              // Adds item into the correct category object in the sortedItemsByCategories array
              // Check to see if the items array exists in sortedItemsByCategories at position i
              // If it doesn't exist, create it
              if (!sortedItemsByCategories[i].items) {
                sortedItemsByCategories[i] = {
                  category: sortedItemsByCategories[i].category,
                  items: [
                    {
                      id: item.id,
                      category: item.category,
                      name: item.name,
                      totalCount: item.totalCount,
                      storageAreaCount: item.storageAreaCount,
                    },
                  ],
                };
              } else {
                sortedItemsByCategories[i].items = [
                  ...sortedItemsByCategories[i].items,
                  {
                    id: item.id,
                    category: item.category,
                    name: item.name,
                    totalCount: item.totalCount,
                    storageAreaCount: item.storageAreaCount,
                  },
                ];
              }
            }
          }
        }
      }
    }
    return sortedItemsByCategories;
  };

  const categories = getCategories(items);
  console.log('getCategories', categories);

  const sortedItems = sortItemsIntoCategories(items, categories);
  console.log('sortedItems', sortedItems);

  const itemsAndHeadersList = sortedItems.map((category) => {
    const itemsList = category.items.map((item: Item) => {
      return (
        <li>
          <p>{item.name}</p>
        </li>
      );
    });
    return (
      <div className="count-item-container">
        <ItemCategoryHeader
          category={category.category}
          numberOfItems={category.items.length}
          items={items}
        />
        <ul>{itemsList}</ul>
      </div>
    );
  });

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
          <div className="item-checkbox">
            <input type="checkbox" />
            <p>Item</p>
          </div>
          <p>Package Size</p>
          <p>Current Value</p>
          <p>This Count</p>
        </div>
      </header>
      <main>{itemsAndHeadersList}</main>
    </div>
  );
};

export default ItemCountContainer;
