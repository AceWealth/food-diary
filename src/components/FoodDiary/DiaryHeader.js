import React, { Component, PropTypes } from 'react';
import { formatDate } from '../../utilities/DateUtilities'

const DiaryHeader = (props) => {
  return (<div className='diary-header'>
            <a className='previous-day'
               title="Go to previous day"
               onClick={props.gotoPreviousDay}/>
            <h2>
              { formatDate(props.displayedDate) }
            </h2>
            <a className='next-day'
               title="Go to next day"
               onClick={props.gotoNextDay}/>
          </div>);
};

export default DiaryHeader;
