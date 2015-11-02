import React, { Component, PropTypes } from 'react';
import DateFormatter from '../../utilities/DateFormatter'

export default class DiaryHeader extends Component {
  static propTypes = {
    displayedDate: React.PropTypes.instanceOf(Date).isRequired
  }

  render() {
    const { displayedDate } = this.props;

    return (
      <div className='diary-header'>
        <a className='previous-day'>
          Previous
        </a>
        <h2>
          { DateFormatter.formatDate(displayedDate) }
        </h2>
        <a className='next-day'>
          Next
        </a>
      </div>
    );
  }
}
