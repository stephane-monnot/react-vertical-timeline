import React, { Component } from 'react';
import PropTypes from 'prop-types';

class VerticalTimeline extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="vertical-timeline vertical-timeline-animate">
        {children}
      </div>
    );
  }
}

VerticalTimeline.propTypes = {
  children: PropTypes.array.isRequired
};

export default VerticalTimeline;
