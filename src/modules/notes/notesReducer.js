import { combineReducers } from 'redux';
import * as actionTypes from './notesActionTypes';

const itemReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_SUCCESS:
      return payload;

    case actionTypes.ADD_SUCCESS:
      return [...state, payload];

    case actionTypes.DELETE_SUCCESS:
      return state.filter(note => note.id !== payload);

    case actionTypes.TOGGLE_COMPLETED_SUCCESS:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );

    default:
      return state;
  }
};

const loadingReducer = (state = false, { type }) => {
  switch (type) {
    case actionTypes.FETCH_REQUEST:
      return true;

    case actionTypes.FETCH_SUCCESS:
    case actionTypes.FETCH_ERROR:
      return false;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_REQUEST:
      return null;
    case actionTypes.FETCH_ERROR:
      return payload;
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
  loading: loadingReducer,
  error: errorReducer,
});
