import React, { Component, PropTypes } from 'react';
import AddFood from './AddFood/';
import FoodDiary from './FoodDiary/';

import { ReduxRouter } from 'redux-router';
import { Route } from 'react-router';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="app-header"> Food Diary </h1>
        <ReduxRouter>
          <Route path="/" component={FoodDiary}/>
          <Route path="/add-food" component={AddFood}/>
        </ReduxRouter>
      </div>
    );
  }
}
