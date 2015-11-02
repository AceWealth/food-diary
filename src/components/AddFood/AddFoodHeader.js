import React, { Component, PropTypes } from 'react';

export default class AddFoodHeader extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired
  }

  render() {
    const {onCancel} = this.props;
    return (
      <div className='add-food-header'>
        <a className='cancel-button'
            onClick={onCancel}/>
        <h2>Add Food</h2>
      </div>
    );
  }
}
