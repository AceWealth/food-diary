import React, { Component, PropTypes } from 'react';

const NoResult = (props) => {
  return (<div className="empty-message">
            {props.message}
          </div>);
};

export default NoResult;
