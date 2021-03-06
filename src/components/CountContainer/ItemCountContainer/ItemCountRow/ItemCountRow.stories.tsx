import React from 'react';
import ItemCountRow from './ItemCountRow';

export default {
  title: 'Count/ItemCountRow',
  component: ItemCountRow,
};

export const Default = () => (
  <ItemCountRow
    name="absolut"
    bottleSize="750ml"
    bottleType="bottle"
    bottleValue={69.99}
  />
);
