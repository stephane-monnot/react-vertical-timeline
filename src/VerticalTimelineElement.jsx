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
    const { id, title, subtitle, content, icon, iconStyle, date, position } = this.props;

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
            <span style={iconStyle} className="vertical-timeline-element-icon">{icon}</span>
            <div className={`vertical-timeline-element-content ${this.state.visible ? 'bounce-in' : 'is-hidden'}`}>
              <h3 className="vertical-timeline-element-title">{title}</h3>
              <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
              <p dangerouslySetInnerHTML={{ __html: content }} />
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
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  icon: PropTypes.object,
  iconStyle: PropTypes.string,
  date: PropTypes.string,
  position: PropTypes.string
};

export default VerticalTimelineElement;
