import React, { Component, PropTypes } from 'react';
import DiaryEntry from './DiaryEntry';

const DiarySection = (props) => {
  return (
      <div className={"diary-section " + props.name.toLowerCase() }>
        <h3 className="section-header"> { props.name } </h3>
        { props.entries.map((entry) =>
            <DiaryEntry key={entry.id} {...entry}/>)}
      </div>
    );
};

export default DiarySection;
