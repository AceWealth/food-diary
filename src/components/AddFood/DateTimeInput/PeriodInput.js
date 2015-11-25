import React, { Component, PropTypes } from 'react';

import Period from '../../../models/Period';

export default class PeriodInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired
  }

  _renderOption(period){
    return (
        <a className="period"
           key={period}
           onClick={this.props.onChange.bind(this, period)}>
          {period}
        </a>
    );
  }

  render(){
    const {onChange} = this.props;

    return (
      <div className="timepicker">
        { Period.map(this._renderOption.bind(this)) }
      </div>
    );
  }
}
