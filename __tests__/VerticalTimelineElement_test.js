import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import VerticalTimelineElement from '../src/VerticalTimelineElement';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline-element classname', function () {
    const component = renderIntoDocument(<VerticalTimelineElement />);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline-element');
  });
});
