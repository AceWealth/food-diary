import React, { Component, PropTypes } from 'react';
import { formatDate, nextDay, previousDay } from '../../utilities/DateUtilities'

export default class DiaryHeader extends Component {
  static propTypes = {
    displayedDate: PropTypes.instanceOf(Date).isRequired,
    gotoDate: PropTypes.func.isRequired
  }

  render() {
    const { displayedDate, gotoDate } = this.props;

    return (
      <div className='diary-header'>
        <a className='previous-day'
           onClick={gotoDate.bind(this, nextDay(displayedDate))}/>
        <h2>
          { formatDate(displayedDate) }
        </h2>
        <a className='next-day'
           onClick={gotoDate.bind(this, previousDay(displayedDate))}/>
      </div>
    );
  }
}
