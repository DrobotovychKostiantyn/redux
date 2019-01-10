import { combineReducers } from 'redux';
import reducer from './notes/notesReducer';

export default combineReducers({
  notes: reducer,
});
