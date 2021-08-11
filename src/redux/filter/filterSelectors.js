
import { createSelector } from "@reduxjs/toolkit";

export const filterSelector = (state) => state.filter.filter;

export const getProductsSelector = (state, category) =>
 state.products.items[category];

export const getfilteredProductSelector = createSelector(
 [getProductsSelector, filterSelector],
 (products, filter) =>
  products.filter((product) =>
   product.name.toLowerCase().includes(filter.toLowerCase())
  )
);
