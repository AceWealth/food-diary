import React, { Component, PropTypes } from 'react';

export default class SearchResults extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired
  }

  _renderSearchResult(searchResult){
    return (
      <li className='search-result'
          key={searchResult._id}>
        {searchResult.name}
      </li>);
  }

  render() {
    const { searchResults } = this.props;

    return (
      <div className='search-results-container'>
        <h3>
          { searchResults.length } results found
        </h3>

        <ul className='search-results'>
          { searchResults.map(this._renderSearchResult)}
        </ul>
      </div>
    );
  }
}
