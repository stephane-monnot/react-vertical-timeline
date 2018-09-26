import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const VerticalTimeline = ({ animate, children, className, layout }) => (
  <div
    className={classNames(className, 'vertical-timeline', {
      'vertical-timeline--animate': animate,
      'vertical-timeline--two-columns': layout === '2-columns',
      'vertical-timeline--one-column': layout === '1-column',
    })}
  >
    {children}
  </div>
);

VerticalTimeline.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool,
  layout: PropTypes.oneOf(['1-column', '2-columns']),
};

VerticalTimeline.defaultProps = {
  animate: true,
  className: '',
  layout: '2-columns',
};

export default VerticalTimeline;
