import { actionTypes } from '../actions';

const authorsReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_POSTS:
      return payload.ids.authors;
    default:
      return state;
  }
};

export default authorsReducer;
