import React, { Component, PropTypes } from 'react';

import DateInput from '../../common/DateInput';
import PeriodInput from './PeriodInput';

import { formatDate } from '../../../utilities/DateUtilities'

import "./DateTimeInput.sass";

export default class DateTimeInput extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    period: PropTypes.string.isRequired,
    onDateChange: PropTypes.func.isRequired,
    onPeriodChange: PropTypes.func.isRequired,
    editMode: PropTypes.bool.isRequired
  }

  render() {
    const { date, onDateChange, period, onPeriodChange, editMode} = this.props;

    return (
        editMode?
          <div className="date-time">
            <DateInput date={date} onChange={onDateChange}/>
            <PeriodInput onChange={onPeriodChange}/>
          </div> :
          <a className="date-time-preview"
             onClick={() => onDateChange(date)}>
            { formatDate(date) + ", " + period}
          </a>
    );
  }
}
