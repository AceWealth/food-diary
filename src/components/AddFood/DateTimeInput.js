import React, { Component, PropTypes } from 'react';

import DateInput from '../common/DateInput';
import PeriodInput from '../common/PeriodInput';

export default class DateTimeInput extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    const { date } = this.props;

    return (
      <div className="date-time">
        <DateInput date={date} onChange={(date) => console.log(date)}/>
        <PeriodInput onChange={(option) => {console.log('onChange', option)}}/>
      </div>
    );
  }
}
