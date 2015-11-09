import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'
import * as SearchFoodAction from '../../actions/SearchFoodAction';
import * as FoodDiaryActions from '../../actions/FoodDiaryActions'

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import AddFoodHeader from './AddFoodHeader';
import Spinner from '../Spinner';
import DateTimeInput from './DateTimeInput';


@connect( state => state.addFood,
          bindActions({ NavigationActions, SearchFoodAction, FoodDiaryActions}))
export default class AddFood extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    SearchFoodAction: PropTypes.objectOf(PropTypes.func).isRequired,
    NavigationActions: PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const { SearchFoodAction, searchTerm, searchResults, selectedPeriod } = this.props;
    const { gotoDashboard, gotoAddFood } = this.props.NavigationActions;
    const { addFood, changeSelectedPeriod } = this.props.FoodDiaryActions;
    const targetDate = new Date(this.props.params.targetDate);

    return (
      <div className='add-food-container'>
        <AddFoodHeader onCancel={gotoDashboard.bind(this, targetDate)}/>
        <DateTimeInput date={targetDate}
                       onDateChange={gotoAddFood}
                       period={ selectedPeriod }
                       onPeriodChange={changeSelectedPeriod}/>
        <SearchForm {... SearchFoodAction }
                    searchTerm={searchTerm}/>
        { searchTerm && !searchResults &&
          <Spinner/>}
        { searchTerm && searchResults &&
          <SearchResults searchResults={searchResults}
                         onSelect={addFood.bind(this, targetDate, selectedPeriod)}/> }
      </div>
    );
  }
}


