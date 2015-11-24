import React, { Component, PropTypes } from 'react';

const DiaryEntry = (props) => {
  return (<div className='diary-entry'>
            <div className='name'>
              { props.name }
            </div>
          </div>);
};

export default DiaryEntry;
