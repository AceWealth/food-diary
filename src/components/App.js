import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TransitionGroup from 'react-addons-css-transition-group';

@connect( state => {
  return {
    routerAnimation: state.routerAnimation,
    currentPath: state.router.location.pathname
  };
})
export default class App extends Component {
  render() {
    const {currentPath, routerAnimation} = this.props;
    return (
      <div className='app-container'>
        <h1 className="app-header"> Food Diary </h1>
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

