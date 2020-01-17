import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

const VerticalTimelineElement = ({
  id,
  children,
  className,
  contentArrowStyle,
  contentStyle,
  icon,
  iconStyle,
  style,
  date,
  position,
  iconOnClick,
  visibilitySensorProps,
}) => {
  const [visible, setVisible] = useState(false);
  const onVisibilitySensorChange = isVisible => {
    const { onChange } = visibilitySensorProps;

    if (typeof onChange === 'function') {
      onChange(isVisible);
    }

    if (isVisible) {
      setVisible(true);
    }
  };

  return (
    <div
      id={id}
      className={classNames(className, 'vertical-timeline-element', {
        'vertical-timeline-element--left': position === 'left',
        'vertical-timeline-element--right': position === 'right',
        'vertical-timeline-element--no-children': children === '',
      })}
      style={style}
    >
      <VisibilitySensor
        {...visibilitySensorProps}
        onChange={onVisibilitySensorChange}
      >
        <div>
          <span // eslint-disable-line jsx-a11y/no-static-element-interactions
            style={iconStyle}
            onClick={iconOnClick}
            className={`vertical-timeline-element-icon ${
              visible ? 'bounce-in' : 'is-hidden'
            }`}
          >
            {icon}
          </span>
          <div
            style={contentStyle}
            className={`vertical-timeline-element-content ${
              visible ? 'bounce-in' : 'is-hidden'
            }`}
          >
            <div
              style={contentArrowStyle}
              className="vertical-timeline-element-content-arrow"
            />
            {children}
            <span className="vertical-timeline-element-date">{date}</span>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  contentArrowStyle: PropTypes.shape({}),
  contentStyle: PropTypes.shape({}),
  icon: PropTypes.element,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  style: PropTypes.shape({}),
  date: PropTypes.node,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({
    onChange: PropTypes.func,
    partialVisibility: PropTypes.bool,
    offset: PropTypes.shape({}),
  }),
};

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  contentArrowStyle: null,
  contentStyle: null,
  icon: null,
  iconStyle: null,
  style: null,
  date: '',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 40 } },
};

export default VerticalTimelineElement;
