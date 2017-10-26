import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './VerticalTimeline.css';

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
