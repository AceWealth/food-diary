import React, { Component, PropTypes, Children, cloneElement } from 'react'
import { StaggeredMotion, spring } from 'react-motion'

const motionConstant = [300, 30];
export default class StaggerAnimation extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  }

  getStyles(prevStyles) {
    return prevStyles.map((style, i) => {
      return i === 0 ? {
        opacity: spring(1, motionConstant),
        translateY: spring(0, motionConstant)
      } : {
        opacity: spring(prevStyles[i - 1].opacity, motionConstant),
        translateY: spring(prevStyles[i - 1].translateY, motionConstant)
      }
    })
  }

  render() {
    const childCount = Children.count(this.props.children)
    const defaultStyles = new Array(childCount).fill({
      opacity: 0,
      translateY: 100
    })
    return (
      <StaggeredMotion defaultStyles={defaultStyles}
                       styles={this.getStyles}>
        {(styles) => {
          return (
            <div className={this.props.className} >
              {styles.map((style, i) =>
                cloneElement(this.props.children[i], {
                  key: i,
                  style: {
                    opacity: style.opacity,
                    transform: `translateY(${style.translateY}px)`
                  }
                })
              )}
            </div>
          );
        }}
      </StaggeredMotion>
    )
  }
}
