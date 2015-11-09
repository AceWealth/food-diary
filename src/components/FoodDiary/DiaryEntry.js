import React, { Component, PropTypes } from 'react';
import DateUtilities from '../../utilities/DateUtilities'

export default class DiaryEntry extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired
  }

  render(){
    const {name, period} = this.props;
    return (
      <div className='diary-entry'>
        <div className='name'>
          { name }
        </div>
      </div>
    );
  }
}
