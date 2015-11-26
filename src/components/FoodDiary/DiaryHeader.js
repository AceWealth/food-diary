import React, { Component, PropTypes } from 'react';
import { formatDate } from '../../utilities/DateUtilities'
import DateInput from '../common/DateInput';

const DiaryHeader = (props) => {
  return (<div className='diary-header'>
            <a className='previous-day'
               title="Go to previous day"
               onClick={props.gotoPreviousDay}/>
            <DateInput date={props.displayedDate}
                       onChange={props.goToDate}/>
            <a className='next-day'
               title="Go to next day"
               onClick={props.gotoNextDay}/>
          </div>);
};

export default DiaryHeader;
