import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'

import DiaryHeader from './DiaryHeader';
import DiaryContent from './DiaryContent';

import {isSameDate, nextDay, previousDay} from '../../utilities/DateUtilities';

@connect(state => state,
         bindActions({NavigationActions}))
export default class FoodDiary extends Component {
  static propTypes = {
    params: PropTypes.shape({
      displayedDate: React.PropTypes.string
    }),
    diaryEntries: PropTypes.array.isRequired,
    NavigationActions: PropTypes.shape({
      gotoDashboard: PropTypes.func.isRequired,
      gotoAddFood: PropTypes.func.isRequired,
    }).isRequired
  };

  render() {
    const {gotoDashboard, gotoAddFood} = this.props.NavigationActions;
    const displayedDate = this.props.params.displayedDate? new Date(this.props.params.displayedDate ) : new Date();
    const todayEntries = this.props.diaryEntries.filter((entry) => isSameDate(entry.date, displayedDate));

    return (
        <div className='diary-container'>
          <DiaryHeader displayedDate={displayedDate}
                       gotoNextDay={gotoDashboard.bind(this, nextDay(displayedDate), "slideLeft")}
                       gotoPreviousDay={gotoDashboard.bind(this, previousDay(displayedDate), "slideRight")} />
          <DiaryContent diaryEntries={todayEntries}/>
          <a className='add-food'
             title="Add an entry"
             onClick={gotoAddFood.bind(this, displayedDate, "slideUp")}/>
        </div>
      );
  }
}







