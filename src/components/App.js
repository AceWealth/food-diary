import React, { Component, PropTypes } from 'react';
import AddFood from './AddFood/';
import FoodDiary from './FoodDiary/';

export default class App extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    SearchFormAction: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render() {
    return (
      <div className='container'>
        <h1 className="app-header"> Food Diary </h1>
        <AddFood {...this.props}/>
        <FoodDiary {...this.props}/>
      </div>
    );
  }
}
