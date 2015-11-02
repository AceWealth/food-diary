import React, { Component, PropTypes } from 'react';
import DateUtilities from '../../utilities/DateUtilities'

export default class DiaryEntry extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    timestamp: PropTypes.instanceOf(Date).isRequired
  }

  render(){
    const {name, timestamp} = this.props;
    return (
      <div className='diary-entry'>
        <span className="timestamp">
          { DateUtilities.formatTime(timestamp) }
        </span>
        <div className='name'>
          {name}
        </div>
      </div>
    );
  }
}
