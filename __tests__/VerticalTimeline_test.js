import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import VerticalTimeline from '../src/VerticalTimeline';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline classname', function () {
    const component = renderIntoDocument(<VerticalTimeline><div>test1</div><div>test2</div></VerticalTimeline>);
    findRenderedDOMComponentWithClass(component, 'vertical-timeline');
  });
});
