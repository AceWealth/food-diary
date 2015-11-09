import React, { Component, PropTypes } from 'react';

import Select from 'react-select'
import Period from '../../models/Period';

export default class PeriodInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    period: PropTypes.string.isRequired,
  }

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
    const { date, onChange, period } = this.props;

    return (
      <div className="timepicker">
        <Select value={period}
            clearable={false}
            searchable={false}
            options={Period}
            valueRenderer={this.renderValue}
            onChange={onChange}/>
      </div>
    );
  }
}
