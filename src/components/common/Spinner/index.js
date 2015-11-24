import React, { Component, PropTypes } from 'react';
import './Spinner.sass'

const Spinner = (props) => {
  return (<div className="spinner-container">
            <i className='fa-spin spinner'/>
          </div>);
};

export default Spinner;
