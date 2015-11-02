import React, { Component, PropTypes } from 'react';
import DateUtilities from '../../utilities/DateUtilities'

export default class DiaryHeader extends Component {
  static propTypes = {
    displayedDate: React.PropTypes.instanceOf(Date).isRequired
  }

  render() {
    const { displayedDate } = this.props;

    return (
      <div className='diary-header'>
        <a className='previous-day'/>
        <h2>
          { DateUtilities.formatDate(displayedDate) }
        </h2>
        <a className='next-day'/>
      </div>
    );
  }
}
