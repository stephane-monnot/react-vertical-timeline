import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  scryRenderedDOMComponentsWithClass,
} from 'react-dom/test-utils';
import VerticalTimeline from '../src/VerticalTimeline';
import VerticalTimelineElement from '../src/VerticalTimelineElement';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline-element classname', function () {
    const component = renderIntoDocument(<VerticalTimelineElement />);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline-element');
  });

  it('should have the vertical-timeline-element--right classname', function () {
    const component = renderIntoDocument(<VerticalTimelineElement position="right" />);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline-element--right');
  });

  describe('when children is empty', function () {
    it('should have the vertical-timeline-element--no-children classname', function () {
      const component = renderIntoDocument(
        <VerticalTimeline>
          <VerticalTimelineElement />
          <VerticalTimelineElement></VerticalTimelineElement>
          <VerticalTimelineElement>

          </VerticalTimelineElement>
        </VerticalTimeline>
      );
      expect( scryRenderedDOMComponentsWithClass(component, 'vertical-timeline-element--no-children').length ).toBe(3);
    });

    it('should not have the vertical-timeline-element--no-children classname', function () {
      const component = renderIntoDocument(
        <VerticalTimeline>
          <VerticalTimelineElement>
            <div>My Child</div>
          </VerticalTimelineElement>
          <VerticalTimelineElement>
            <div>My Children</div>
            <div>My Children</div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      );
      expect( scryRenderedDOMComponentsWithClass(component, 'vertical-timeline-element--no-children').length ).toBe(0);
    });
  });

});
