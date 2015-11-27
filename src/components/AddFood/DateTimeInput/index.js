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
        <div className={ "date-time " + (editMode? "": "preview")} >
          {editMode?
            [ <DateInput date={date} onChange={onDateChange} key="date-input"/>,
              <PeriodInput onChange={onPeriodChange} key="period-input"/>] :
            <a onClick={() => onDateChange(date)}>
                { formatDate(date) + ", " + period}
            </a>}
        </div>
    );
  }
}
