import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

const root: ?Element = document.getElementById('root');

if (root) {
  ReactDOM.render(<App />, root);
}
