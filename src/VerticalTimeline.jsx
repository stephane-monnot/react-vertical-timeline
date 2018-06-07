import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VerticalTimeline = ({ animate, children, className }) => (
  <div className={classNames(className, 'vertical-timeline', {
    'vertical-timeline--animate': animate
  })}
  >
    {children}
  </div>
);

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool
};

VerticalTimeline.defaultProps = {
  animate: true,
  className: ''
};

export default VerticalTimeline;
