import React, { Component, PropTypes } from 'react';

export default class AddFoodHeader extends Component {
  static propTypes = {
    onCancel: PropTypes.func.isRequired,
    formState: PropTypes.string.isRequired
  }

  static message = {
    SELECT_TIME: "First tell me when did you have this meal",
    SELECT_FOOD: "Now tell me about your meal"
  }

  render() {
    const {onCancel, formState} = this.props;
    return (
      <div className='add-food-header'>
        <a className='close-button'
            onClick={onCancel}
            title="Cancel"/>
        <h2>
          { AddFoodHeader.message[formState] }
        </h2>
        <a /* Unsemantic hack for centering the title *//>
      </div>
    );
  }
}
