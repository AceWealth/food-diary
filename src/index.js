import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import "./styles/style";

import configureStore from './store/configureStore';
import Routes from './components/Routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    {Routes}
  </Provider>,
  document.getElementById('root')
);
