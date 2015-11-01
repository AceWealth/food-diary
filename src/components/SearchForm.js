import React, { Component, PropTypes } from 'react';

export default class SearchForm extends Component {
  _handleChange = (event) => {
    const {onSearchTermChanges} = this.props;
    onSearchTermChanges(event.target.value);
  }

  _search = () => {
    const {searchTerm, onSearch} = this.props;
    onSearch(searchTerm);
  }

  render(){
    const {searchTerm} = this.props;

    return (
      <form className='search-form'
            onSubmit={this._search}>
        <input  autoFocus
                placeholder='Search term'
                value={searchTerm}
                onChange={ this._handleChange }/>
        <button className='submit'
                type='submit'>
                Search
        </button>
      </form>
    );
  }
}

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onSearchTermChanges: PropTypes.func.isRequired,
  searchTerm: PropTypes.string.isRequired
};
