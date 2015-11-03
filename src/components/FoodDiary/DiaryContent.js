import React, { Component, PropTypes } from 'react';
import { isEmpty } from '../../utilities/extendedLodash';

import DiaryEntry from './DiaryEntry';
import NoResult from '../NoResult';

import { sortBy } from '../../utilities/extendedLodash';

export default class DiaryContent extends Component {
  static propTypes = {
    diaryEntries: PropTypes.array.isRequired
  }

  _renderEntries(diaryEntries) {
    return  diaryEntries.map((entry) =>
      <DiaryEntry key={entry.timestamp} {...entry}/>);
  }

  render() {
    const diaryEntries = sortBy(this.props.diaryEntries, (entry) => -entry.timestamp);

    return (
      <div className='diary-content'>
        { isEmpty(diaryEntries)? <NoResult message="Nothing's here. Start recording your meal with the '+' button"/>:
            this._renderEntries(diaryEntries) }
      </div>
    );
  }
}
