import React from 'react';
import PropTypes from 'prop-types';

const VerticalTimeline = (props) => {
  const { animate, children } = props;
  let { className } = props;

  className += ' vertical-timeline';

  if (animate) {
    className += ' vertical-timeline--animate';
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}

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
