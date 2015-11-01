import React, { Component, PropTypes } from 'react';
import SearchForm from './SearchForm';

export default class App extends Component {
  render() {
    const { SearchFormAction, searchTerm } = this.props;
    return (
      <div className='container'>
        <SearchForm {... SearchFormAction }
                    searchTerm={searchTerm}/>
      </div>
    );
  }
}

App.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  SearchFormAction: PropTypes.objectOf(PropTypes.func).isRequired
};
