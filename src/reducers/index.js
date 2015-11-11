import { combineReducers } from 'redux';
import diaryEntries from './DiaryEntries';
import addFood from './AddFood/';
import routerAnimation from './RouterAnimation';

import { routerStateReducer as router } from 'redux-router';

const rootReducer = combineReducers({
  routerAnimation,
  router,
  addFood,
  diaryEntries
});

export default rootReducer;

