import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'

import DiaryHeader from './DiaryHeader';
import DiaryContent from './DiaryContent';

import {encode, isSameDate} from '../../utilities/DateUtilities';

@connect(state => state,
         bindActions({NavigationActions}))
export default class FoodDiary extends Component {
  static propTypes = {
    params: PropTypes.shape({
      displayedDate: React.PropTypes.string
    }),
    diaryEntries: PropTypes.array.isRequired,
    NavigationActions: PropTypes.object.isRequired
  };

  render() {
    const {goto} = this.props.NavigationActions;
    const displayedDate = this.props.params.displayedDate || encode(new Date());
    const todayEntries = this.props.diaryEntries.filter((entry) => isSameDate(entry.timestamp, displayedDate));

    return (
        <div className='diary-container'>
          <DiaryHeader displayedDate={new Date(displayedDate)}
                       gotoDate={(date) => goto("/dashboard/" + encode(date)) } />
          <DiaryContent diaryEntries={todayEntries}/>
          <a className='add-food'
             onClick={goto.bind(this, "/add-food")}/>
        </div>
      );
  }
}







