import React, { Component, PropTypes } from 'react';
import { formatDate } from '../../utilities/DateUtilities'

export default class DiaryHeader extends Component {
  static propTypes = {
    displayedDate: PropTypes.instanceOf(Date).isRequired,
    gotoPreviousDay: PropTypes.func.isRequired,
    gotoNextDay: PropTypes.func.isRequired
  }

  render() {
    const { displayedDate, gotoPreviousDay, gotoNextDay } = this.props;

    return (
      <div className='diary-header'>
        <a className='previous-day'
           onClick={gotoPreviousDay}/>
        <h2>
          { formatDate(displayedDate) }
        </h2>
        <a className='next-day'
           onClick={gotoNextDay}/>
      </div>
    );
  }
}
