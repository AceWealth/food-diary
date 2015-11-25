import React, { Component, PropTypes } from 'react';
import { debounce } from '../../utilities/extendedLodash';

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
        <input  placeholder='Type your meal here'
                value={searchTerm}
                onChange={ this._handleChange.bind(this) }
                autoFocus/>
      </form>
    );
  }
}
