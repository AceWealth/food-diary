import React, { Component, PropTypes } from 'react';

export default class SearchResults extends Component {
  static propTypes = {
    searchResults: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
  }

  _renderSearchResult = (searchResult) => {
    const {onSelect} = this.props;
    return (
      <li className='search-result'
          key={searchResult._id}
          onClick={onSelect.bind(this, searchResult)}>
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
