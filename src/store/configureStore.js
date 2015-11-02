import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import createHistory from 'history/lib/createHashHistory';
import { reduxReactRouter } from 'redux-router';

export default function configureStore(initialState) {
  const store = compose(
    reduxReactRouter({ createHistory }),
    applyMiddleware(thunk)
  )(createStore)(reducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
