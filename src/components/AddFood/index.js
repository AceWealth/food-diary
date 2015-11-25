import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'
import * as SearchFoodActions from '../../actions/SearchFoodActions';
import * as FoodDiaryActions from '../../actions/FoodDiaryActions'

import AddFoodHeader from './AddFoodHeader';
import SearchFood from './SearchFood';
import DateTimeInput from './DateTimeInput/';

import FormState from '../../models/AddFoodFormState';

import "./AddFood.sass";

@connect( state => state.addFood,
          bindActions({ NavigationActions, SearchFoodActions, FoodDiaryActions}))
export default class AddFood extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    formState: PropTypes.string.isRequired,
    SearchFoodActions: PropTypes.objectOf(PropTypes.func).isRequired,
    FoodDiaryActions: PropTypes.objectOf(PropTypes.func).isRequired,
    NavigationActions: PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const targetDate = new Date(this.props.params.targetDate);
    const { searchTerm, searchResults, selectedPeriod, formState } = this.props;

    const { onSearchTermChanges, onSearch } = this.props.SearchFoodActions;
    const { gotoAddFood, gotoDashboard } = this.props.NavigationActions;
    const { addFood, changeSelectedPeriod } = this.props.FoodDiaryActions;

    return (
      <div className='add-food-container'>
        <AddFoodHeader  onCancel={gotoDashboard.bind(this, targetDate, "slideDown")}
                        formState={formState}/>
        <DateTimeInput date={targetDate}
                       onDateChange={gotoAddFood}
                       period={selectedPeriod}
                       onPeriodChange={changeSelectedPeriod}
                       editMode={formState === FormState.SELECT_TIME}/>
        { formState === FormState.SELECT_FOOD ?
            <SearchFood searchTerm={searchTerm}
                  searchResults={searchResults}
                  onSearch={onSearch}
                  onSearchTermChanges={onSearchTermChanges}
                  onSelect={addFood.bind(this, targetDate, selectedPeriod)}/> : null
        }
      </div>
    );
  }
}
