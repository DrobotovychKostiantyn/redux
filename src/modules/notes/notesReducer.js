import { combineReducers } from 'redux';
import * as actionTypes from './notesActionTypes';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return [...state, payload];

    case actionTypes.DELETE:
      return state.filter(note => note.id !== payload);

    case actionTypes.TOGGLE_COMPLETED:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemReducer,
  filter: filterReducer,
});
