import React, { Component, PropTypes } from 'react';

import Period from '../../../models/Period';

export default class PeriodInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    period: PropTypes.string.isRequired,
  }

  _renderOption(period){
    const isSelected = this.props.period === period;
    return (
        <a className={"period " + (isSelected? "active": "")}
           key={period}
           onClick={this.props.onChange.bind(this, period)}>
          {period}
        </a>
    );
  }

  render(){
    const { date, onChange, period } = this.props;

    return (
      <div className="timepicker">
        { Period.map(this._renderOption.bind(this)) }
      </div>
    );
  }
}
