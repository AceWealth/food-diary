import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './HeartLogo.sass';

export default class HeartLogo extends Component {
  componentDidMount(){
    // Hack for React stripping mask attribute on SVG for some reasons (https://github.com/facebook/react/issues/1657)
    ReactDOM.findDOMNode(this.refs.heart).setAttribute("mask", "url(#pulse)");
  }
  render(){
    return (<div className="heartbeat-icon">
              <svg width="255" height="255">
                <path d="M126.3 228q-3.7 0 -6.2 -2.5L32.1 140.6q-1.4 -1.1 -3.9 -3.7Q25.8 134.4 20.4 127.7 15.1 121 10.9 114 6.6 106.9 3.3 96.9 0 86.9 0 77.5q0 -31 17.9 -48.5 17.9 -17.5 49.5 -17.5 8.7 0 17.8 3 9.1 3 16.9 8.2 7.8 5.1 13.5 9.7 5.6 4.5 10.7 9.6 5.1 -5.1 10.7 -9.6 5.6 -4.5 13.5 -9.7 7.8 -5.1 16.9 -8.2 9.1 -3 17.8 -3 31.6 0 49.5 17.5 17.9 17.5 17.9 48.5 0 31.2 -32.3 63.5L132.5 225.5q-2.5 2.5 -6.2 2.5z" className="heart" ref="heart"/>
                <defs>
                    <clipPath id="heart">
                      <path d="M126.3 228q-3.7 0 -6.2 -2.5L32.1 140.6q-1.4 -1.1 -3.9 -3.7Q25.8 134.4 20.4 127.7 15.1 121 10.9 114 6.6 106.9 3.3 96.9 0 86.9 0 77.5q0 -31 17.9 -48.5 17.9 -17.5 49.5 -17.5 8.7 0 17.8 3 9.1 3 16.9 8.2 7.8 5.1 13.5 9.7 5.6 4.5 10.7 9.6 5.1 -5.1 10.7 -9.6 5.6 -4.5 13.5 -9.7 7.8 -5.1 16.9 -8.2 9.1 -3 17.8 -3 31.6 0 49.5 17.5 17.9 17.5 17.9 48.5 0 31.2 -32.3 63.5L132.5 225.5q-2.5 2.5 -6.2 2.5z"/>
                    </clipPath>
                    <mask id="pulse">
                      <g>
                        <rect x="0" y="0" width="100%" height="100%" fill="white"/>
                        <path className="pulse" fill="none" stroke="black" clip-path="url(#heart)" d="M0 125h80l20 -65l40 130l25 -100l15 35H255"/>
                      </g>
                    </mask>
                </defs>
              </svg>
            </div>);
  }
}

