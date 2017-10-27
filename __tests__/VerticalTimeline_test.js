import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass
} from 'react-dom/test-utils';
import { expect } from 'chai';

import VerticalTimeline from '../src/VerticalTimeline';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline classname', function () {
    const component = renderIntoDocument(
      <VerticalTimeline><div>test1</div><div>test2</div></VerticalTimeline>
    );
    findRenderedDOMComponentWithClass(component, 'vertical-timeline');
  });

  it('should have the vertical-timeline--animate classname', function () {
    const component = renderIntoDocument(
      <VerticalTimeline><div>test1</div><div>test2</div></VerticalTimeline>
    );
    findRenderedDOMComponentWithClass(component, 'vertical-timeline--animate');
  });

  it('should not have the vertical-timeline--animate classname', function () {
    const component = renderIntoDocument(
      <VerticalTimeline animate={false}><div>test1</div><div>test2</div></VerticalTimeline>
    );
    const renderedComponent = findRenderedDOMComponentWithClass(component, 'vertical-timeline');
    expect(renderedComponent.className).to.equal('vertical-timeline');
  });
});
