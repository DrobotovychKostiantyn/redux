import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../modules/rootModule';

const thunk = ({ dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action);

const middlewares = applyMiddleware(thunk);

const enhancer = composeWithDevTools(middlewares);

const store = createStore(reducers, enhancer);

export default store;
