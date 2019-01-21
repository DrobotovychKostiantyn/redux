export const actionTypes = {
  ADD_TO_CART: 'cart/ADD_TO_CART',
  REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
  INCREMENT: 'cart/INCREMENT',
  DECREMENT: 'cart/DECREMENT',
};

export const addToCart = id => ({
  type: actionTypes.ADD_TO_CART,
  payload: {
    id,
  },
});

export const removeFromCart = id => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: {
    id,
  },
});

export const increment = id => ({
  type: actionTypes.INCREMENT,
  payload: {
    id,
  },
});
export const decrement = id => ({
  type: actionTypes.DECREMENT,
  payload: {
    id,
  },
});
