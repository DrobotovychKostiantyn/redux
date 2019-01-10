import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../modules/rootModule';

const enhancer = composeWithDevTools();

const store = createStore(reducers, enhancer);

export default store;
