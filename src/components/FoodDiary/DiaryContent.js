import React, { Component, PropTypes } from 'react';
import DiaryEntry from './DiaryEntry';

export default class DiaryContent extends Component {
  static propTypes = {
    diaryEntries: PropTypes.array.isRequired
  }

  render() {
    const { diaryEntries } = this.props;
    return (
      <ul className='diary-content'>
        { diaryEntries.map((entry) =>
            <DiaryEntry key={entry._id}
            {...entry}/>)}
      </ul>
    );
  }
}
