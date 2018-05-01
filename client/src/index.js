import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './App';
import { injectGlobal } from 'styled-components';

import { injectGlobalConfig } from './config';


const createStoreWithMiddleware = applyMiddleware(reduxThunk, logger)(createStore);
const store = createStoreWithMiddleware(reducers);

injectGlobal`
  ${
    injectGlobalConfig
  }
`;


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));

