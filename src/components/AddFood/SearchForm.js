import React, { Component, PropTypes } from 'react';
import { debounce } from 'lodash';

export default class SearchForm extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    onSearchTermChanges: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
  }

  _handleChange(event){
    const {onSearchTermChanges} = this.props;
    onSearchTermChanges(event.target.value);
    this._getSearchResults()
  }

  _getSearchResults = debounce(() => {
    const {searchTerm} = this.props;
    this.props.onSearch(searchTerm);
  }, 500)

  render(){
    const {searchTerm} = this.props;

    return (
      <form className='search-form'>
        <input  autoFocus
                placeholder='Search term'
                value={searchTerm}
                onChange={ this._handleChange.bind(this) }/>
      </form>
    );
  }
}
