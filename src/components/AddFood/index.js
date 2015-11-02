import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import bindActions from '../../utilities/bindActions';
import * as NavigationActions from '../../actions/NavigationActions'
import * as AddFoodActions from '../../actions/AddFoodActions';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import AddFoodHeader from './AddFoodHeader';

@connect( state => state,
          bindActions({ NavigationActions, AddFoodActions }))
export default class AddFood extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    AddFoodActions: PropTypes.objectOf(PropTypes.func).isRequired,
    NavigationActions: PropTypes.objectOf(PropTypes.func).isRequired,
  }

  render() {
    const { AddFoodActions, searchTerm, searchResults } = this.props;
    const { goto } = this.props.NavigationActions;

    return (
      <div className='add-food-container'>
        <AddFoodHeader onCancel={goto.bind(this, "/")}/>
        <SearchForm {... AddFoodActions }
                    searchTerm={searchTerm}/>
        { searchTerm && !searchResults &&
          <div> spinner </div> }
        { searchTerm && searchResults &&
          <SearchResults searchResults={searchResults}/> }
      </div>
    );
  }
}
