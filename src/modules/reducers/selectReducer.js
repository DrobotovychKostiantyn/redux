import { actionTypes } from '../actions';

export default function selectReducer(state = null, { type, payload }) {
  switch (type) {
    case actionTypes.SELECT_AUTHOR:
      return payload;
    default:
      return state;
  }
}
