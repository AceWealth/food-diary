import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

export default class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <h1 className="app-header"> Food Diary </h1>
        {this.props.children}
      </div>
    );
  }
}

