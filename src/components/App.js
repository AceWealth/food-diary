import React, { Component, PropTypes } from 'react';
import AddFood from './AddFood/';
import FoodDiary from './FoodDiary/';

import { ReduxRouter } from 'redux-router';
import { Route, Redirect } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <h1 className="app-header"> Food Diary </h1>
        <ReduxRouter>
          <Redirect from="/" to="/dashboard" />
          <Route path="/dashboard(/:displayedDate)" component={FoodDiary}/>
          <Route path="/add-food" component={AddFood}/>
        </ReduxRouter>
      </div>
    );
  }
}
