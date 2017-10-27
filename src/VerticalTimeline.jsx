import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VerticalTimeline extends Component {
  render() {
    const { animate, children } = this.props;
    let className = 'vertical-timeline';

    if (animate) {
      className += ' vertical-timeline--animate';
    }

    return (
      <div className={className}>
        {children}
      </div>
    );
  }
}

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  animate: PropTypes.bool
};

VerticalTimeline.defaultProps = {
  animate: true
};

export default VerticalTimeline;
