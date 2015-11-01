import React, { Component, PropTypes } from 'react';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default class App extends Component {
  static propTypes = {
    searchTerm: PropTypes.string.isRequired,
    searchResults: PropTypes.array,
    SearchFormAction: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render() {
    const { SearchFormAction, searchTerm, searchResults } = this.props;
    return (
      <div className='container'>
        <SearchForm {... SearchFormAction }
                    searchTerm={searchTerm}/>
        { searchTerm && !searchResults &&
          <div> spinner </div> }
        { searchTerm && searchResults &&
          <SearchResults searchResults={searchResults}/> }
      </div>
    );
  }
}
