import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';

import createHistory from 'history/lib/createHashHistory';
import { reduxReactRouter } from 'redux-router';

import persistState from 'redux-localstorage'

import DiaryEntry from '../models/DiaryEntry';

const localStorageConfig = {
  deserialize: (jsonString) => {
    const { diaryEntries } = JSON.parse(jsonString);
    return {
      diaryEntries: diaryEntries.map(DiaryEntry.fromJSON)
    };
  }
};

export default function configureStore(initialState) {
  const store = compose(
    persistState('diaryEntries', localStorageConfig),
    applyMiddleware(thunk),
    reduxReactRouter({ createHistory })
  )(createStore)(reducer);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
