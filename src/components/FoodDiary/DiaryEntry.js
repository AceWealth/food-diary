import React, { Component, PropTypes } from 'react';
import DateFormatter from '../../utilities/DateFormatter'

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
          { DateFormatter.formatTime(timestamp) }
        </span>
        <div className='name'>
          {name}
        </div>
      </div>
    );
  }
}
