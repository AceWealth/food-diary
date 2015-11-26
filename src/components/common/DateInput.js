import React, { Component, PropTypes } from 'react';

import Pikaday from 'pikaday';
import 'pikaday/css/pikaday.css';
import ReactDOM from 'react-dom';
import { formatDate } from '../../utilities/DateUtilities'

export default class DateInput extends Component {
  static propTypes = {
    date: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
  }

  componentDidMount() {
    new Pikaday({
      field: ReactDOM.findDOMNode(this.refs.date),
      onSelect: this.props.onChange
    });
  }

  render() {
    const { date } = this.props;

    return (
      <div className="datepicker">
        <a className="date"
           ref="date">
          {formatDate(date)}
        </a>
      </div>
    );
  }
}
