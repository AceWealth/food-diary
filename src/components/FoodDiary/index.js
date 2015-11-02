import React, { Component, PropTypes } from 'react';
import DiaryHeader from './DiaryHeader';
import DiaryContent from './DiaryContent';

export default class FoodDiary extends Component {
  static propTypes = {
    displayedDate: PropTypes.object.isRequired,
    diaryEntries: PropTypes.array.isRequired
  }

  render() {
    return (
        <div className='diary-container'>
          <DiaryHeader {...this.props}/>
          <a className='add-food'> Add Food </a>
          <DiaryContent {...this.props}/>
        </div>
      );
  }
}







