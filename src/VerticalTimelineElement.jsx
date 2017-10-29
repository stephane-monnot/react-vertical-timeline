import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { id, children, icon, iconStyle, date, position } = this.props;

    let className = 'vertical-timeline-element';

    if (position === 'left') {
      className += ' vertical-timeline-element--left';
    }

    if (position === 'right') {
      className += ' vertical-timeline-element--right';
    }

    return (
      <div id={id} className={className}>
        <VisibilitySensor onChange={this.onVisibilitySensorChange}>
          <div>
            <span style={iconStyle} className={`vertical-timeline-element-icon ${this.state.visible ? 'bounce-in' : 'is-hidden'}`}>{icon}</span>
            <div className={`vertical-timeline-element-content ${this.state.visible ? 'bounce-in' : 'is-hidden'}`}>
              {children}
              <span className="vertical-timeline-element-date">{date}</span>
            </div>
          </div>
        </VisibilitySensor>
      </div>
    );
  }
}

VerticalTimelineElement.propTypes = {
  id: PropTypes.string,
  children: PropTypes.string,
  icon: PropTypes.object,
  iconStyle: PropTypes.object,
  date: PropTypes.string,
  position: PropTypes.string
};

export default VerticalTimelineElement;
