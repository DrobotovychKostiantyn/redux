import { createSelector } from 'reselect';

export const getCartIds = state => state.cart.ids;

const getProductsIds = state => state.products;

const getEntitiesProducts = state => state.entities.products;

const getCartAmount = state => state.cart.amount;

export const getProducts = createSelector(
  [getProductsIds, getEntitiesProducts],
  (ids, entProducts) => ids.map(id => entProducts[id]),
);

export const getCartTable = createSelector(
  [getCartIds, getCartAmount, getEntitiesProducts],
  (ids, amount, entProducts) =>
    ids.map(id => ({ ...entProducts[id], amount: amount[id] })),
);

export const getCartProductsAmount = createSelector(
  getCartIds,
  cartIds => cartIds.length,
);
