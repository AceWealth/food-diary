import { combineReducers } from 'redux';
import diaryEntries from './DiaryEntries';
import addFood from './addFood/';

import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  router,
  addFood,
  diaryEntries
});

export default rootReducer;

