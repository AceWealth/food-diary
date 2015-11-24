import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';

import bindActions from '../utilities/bindActions';
import * as NavigationActions from '../actions/NavigationActions'

import "./App.sass";

@connect( state => {
  return {
    routerAnimation: state.routerAnimation,
    currentPath: state.router.location.pathname
  };
}, bindActions({ NavigationActions }))
export default class App extends Component {
  render() {
    const {currentPath, routerAnimation} = this.props;
    const {gotoDashboard} = this.props.NavigationActions;
    return (
      <div className='app-container'>
        <a className="app-header"
           onClick={gotoDashboard}
           title="Go to today's entries">
          <h1> Food Diary </h1>
        </a>
        <TransitionGroup component="div"
                         className={"app-body " + routerAnimation  }
                         transitionName="animation"
                         transitionEnterTimeout={500}
                         transitionLeaveTimeout={300}>
          <div key={currentPath}>
            {this.props.children}
          </div>
        </TransitionGroup>
      </div>
    );
  }
}

