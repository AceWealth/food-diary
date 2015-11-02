import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'

import DiaryHeader from './DiaryHeader';
import DiaryContent from './DiaryContent';


@connect(state => state,
         bindActions({NavigationActions}))
export default class FoodDiary extends Component {
  static propTypes = {
    displayedDate: PropTypes.object.isRequired,
    diaryEntries: PropTypes.array.isRequired,
    NavigationActions: PropTypes.object.isRequired
  }

  render() {
    const {goto} = this.props.NavigationActions;
    return (
        <div className='diary-container'>
          <DiaryHeader {...this.props}/>
          <a className='add-food'
             onClick={goto.bind(this, "/add-food")}>
            Add Food
          </a>
          <DiaryContent {...this.props}/>
        </div>
      );
  }
}







