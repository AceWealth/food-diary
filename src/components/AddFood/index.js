import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'
import * as AddFoodActions from '../../actions/AddFoodActions';
import * as FoodDiaryActions from '../../actions/FoodDiaryActions'

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import AddFoodHeader from './AddFoodHeader';
import Spinner from '../Spinner';
import DateTimeInput from './DateTimeInput';


@connect( state => state.addFood,
          bindActions({ NavigationActions, AddFoodActions, FoodDiaryActions}))
export default class AddFood extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    AddFoodActions: PropTypes.objectOf(PropTypes.func).isRequired,
    NavigationActions: PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const { AddFoodActions, FoodDiaryActions, searchTerm, searchResults } = this.props;
    const { goto } = this.props.NavigationActions;

    return (
      <div className='add-food-container'>
        <AddFoodHeader onCancel={goto.bind(this, "/")}/>
        <DateTimeInput date={new Date(this.props.params.targetDate)}
                       onChange={() => {console.log('commit change to store')}}/>
        <SearchForm {... AddFoodActions }
                    searchTerm={searchTerm}/>
        { searchTerm && !searchResults &&
          <Spinner/>}
        { searchTerm && searchResults &&
          <SearchResults searchResults={searchResults}
                         onSelect={FoodDiaryActions.addFood}/> }
      </div>
    );
  }
}


