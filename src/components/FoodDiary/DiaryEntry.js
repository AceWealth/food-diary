import React, { Component, PropTypes } from 'react';
import DateFormatter from '../../utilities/DateFormatter'

export default class DiaryEntry extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    timestamp: React.PropTypes.instanceOf(Date).isRequired
  }

  render(){
    const {name, timestamp} = this.props;
    return (
      <li className='diary-entry'>
        <span className="timestamp">
          { DateFormatter.formatTime(timestamp) }
        </span>
        <div className='name'>
          {name}
        </div>
      </li>
    );
  }
}
