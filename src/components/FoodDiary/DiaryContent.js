import React, { Component, PropTypes } from 'react';
import { isEmpty } from '../../utilities/extendedLodash';

import DiarySection from './DiarySection';
import NoResult from '../common/NoResult';

import { groupBy, has } from 'lodash';

export default class DiaryContent extends Component {
  static propTypes = {
    diaryEntries: PropTypes.array.isRequired
  }

  static ordering = ['Breakfast', 'Lunch', 'Supper', 'Snacks']

  _renderEntries(diaryEntries) {
    const sections = groupBy(diaryEntries, 'period');

    return DiaryContent.ordering.map((sectionName) => {
      return has(sections, sectionName)?
                <DiarySection name={sectionName}
                             key={sectionName}
                             entries={sections[sectionName]}/> :
                ""
    });
  }

  render() {
    const diaryEntries = this.props.diaryEntries;

    return (
      <div className='diary-content'>
        { isEmpty(diaryEntries)?
            <NoResult message="Nothing's here. Start recording your meal with the '+' button"/> :
            this._renderEntries(diaryEntries) }
      </div>
    );
  }
}
