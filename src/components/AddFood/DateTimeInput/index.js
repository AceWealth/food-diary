import React, { Component, PropTypes } from 'react';

import DateInput from './DateInput';
import PeriodInput from './PeriodInput';

import "./DateTimeInput.sass";

export default class DateTimeInput extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    period: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired,
    onPeriodChange: PropTypes.func.isRequired
  }

  render() {
    const { date, onDateChange, period, onPeriodChange } = this.props;

    return (
      <div className="date-time">
        <DateInput date={date} onChange={onDateChange}/>
        <PeriodInput period={period} onChange={onPeriodChange}/>
      </div>
    );
  }
}
