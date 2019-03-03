import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VisibilitySensor from 'react-visibility-sensor';

class VerticalTimelineElement extends Component {
  constructor(props) {
    super(props);
    this.onVisibilitySensorChange = this.onVisibilitySensorChange.bind(this);
    this.state = { visible: false };
  }

  onVisibilitySensorChange(isVisible) {
    if (isVisible) {
      this.setState({ visible: true });
    }
  }

  render() {
    const {
      id,
      className,
      children,
      date,
      dateClassName,
      textClassName,
      icon,
      iconClassName,
      iconStyle,
      iconOnClick,
      position,
      style,
      visibilitySensorProps,
    } = this.props;

    const { visible } = this.state;

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
          onChange={this.onVisibilitySensorChange}
        >
          <Fragment>
            <span // eslint-disable-line jsx-a11y/no-static-element-interactions
              style={iconStyle}
              onClick={iconOnClick}
              className={`vertical-timeline-element-icon ${iconClassName} ${
                visible ? 'bounce-in' : 'is-hidden'
              }`}
            >
              {icon}
            </span>
            <div
              className={`vertical-timeline-element-content ${
                visible ? 'bounce-in' : 'is-hidden'
              }  ${textClassName}`}
            >
              {children}
              <span
                className={`vertical-timeline-element-date ${dateClassName}`}
              >
                {date}
              </span>
            </div>
          </Fragment>
        </VisibilitySensor>
      </div>
    );
  }
}

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  textClassName: PropTypes.string,
  dateClassName: PropTypes.string,
  icon: PropTypes.element,
  iconClassName: PropTypes.string,
  iconStyle: PropTypes.shape({}),
  iconOnClick: PropTypes.func,
  style: PropTypes.shape({}),
  date: PropTypes.node,
  position: PropTypes.string,
  visibilitySensorProps: PropTypes.shape({}),
};

VerticalTimelineElement.defaultProps = {
  id: '',
  children: '',
  className: '',
  textClassName: 'contentClass',
  icon: null,
  iconClassName: 'iconClass',
  iconStyle: null,
  style: null,
  date: '',
  dateClassName: 'dateClass',
  position: '',
  iconOnClick: null,
  visibilitySensorProps: { partialVisibility: true, offset: { bottom: 80 } },
};

export default VerticalTimelineElement;
