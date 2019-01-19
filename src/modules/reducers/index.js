import { combineReducers } from 'redux';
import entitiesReducer from './entityReducer';
import postsReducer from './postReducer';
import authorsReducer from './authorsReducer';
import selectReducer from './selectReducer';

export default combineReducers({
  authors: authorsReducer,
  posts: postsReducer,
  id: selectReducer,
  entities: entitiesReducer,
});
