import React, { Component, PropTypes } from 'react';

import Select from 'react-select'
import { formatTime } from '../../utilities/DateUtilities'

export default class PeriodInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  static options = [
    { label: 'Breakfast', value: 'breakfast' },
    { label: 'Lunch', value: 'lunch' },
    { label: 'Supper', value: 'supper' },
    { label: 'Snacks', value: 'snacks' },
  ]

  renderValue(option) {
    return (
        <div>
          <span className='period-value'>
            {option.label}
          </span>
        </div>
      );
  }

  render(){
    const { date, onChange } = this.props;

    return (
      <div className="timepicker">
        <Select value={PeriodInput.options[0]}
            clearable={false}
            searchable={false}
            options={PeriodInput.options}
            valueRenderer={this.renderValue}
            onChange={onChange}/>
      </div>
    );
  }
}
