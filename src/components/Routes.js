import React from 'react';
import { ReduxRouter } from 'redux-router';
import { Route, Redirect } from 'react-router';

import App from './App';
import AddFood from './AddFood/';
import FoodDiary from './FoodDiary/';

const routes = (
  <ReduxRouter>
    <Redirect from="/" to="dashboard"/>
    <Route path="/" component={App}>
      <Route path="dashboard(/:displayedDate)" component={FoodDiary}/>
      <Route path="add-food(/:targetDate)" component={AddFood}/>
    </Route>
  </ReduxRouter>
);

export default routes;
