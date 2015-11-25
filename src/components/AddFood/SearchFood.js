import React, { Component, PropTypes } from 'react';

import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import Spinner from '../common/Spinner/';

const SearchFood = (props) => {
  const { searchResults, searchTerm,
          onSearch, onSearchTermChanges, onSelect } = props;
  return (
        <div className="search-container">
          <SearchForm onSearch={onSearch}
                      onSearchTermChanges={onSearchTermChanges}
                      searchTerm={searchTerm}/>
          { searchTerm && !searchResults &&
            <Spinner/>}
          { searchTerm && searchResults &&
            <SearchResults searchResults={searchResults}
                           onSelect={onSelect}/>}
        </div>
    );
};

export default SearchFood;
