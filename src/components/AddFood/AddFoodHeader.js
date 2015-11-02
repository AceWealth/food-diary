import React, { Component, PropTypes } from 'react';

export default class AddFoodHeader extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='add-food-header'>
        <a> Cancel </a>
        <h2>Add Food</h2>
      </div>
    );
  }
}
