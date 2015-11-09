import React, { Component, PropTypes } from 'react';
import DiaryEntry from './DiaryEntry';

export default class DiarySection extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    entries: PropTypes.array.isRequired
  }

  render(){
    const { name, entries } = this.props;
    return (
      <div className={"diary-section " + name.toLowerCase() }>
        <h3 className="section-header"> { name } </h3>
        { entries.map((entry) => <DiaryEntry key={entry.id} {...entry}/>)}
      </div>
    );
  }
}
