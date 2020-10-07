import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import VerticalTimeline from '../src/VerticalTimeline';

beforeEach(() => {
  mockAllIsIntersecting(true);
});

describe('VerticalTimeline', () => {
  it('should have the vertical-timeline classname', () => {
    const component = shallow(
      <VerticalTimeline>
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline')).to.equal(true);
  });

  it('should have the vertical-timeline--animate classname', () => {
    const component = shallow(
      <VerticalTimeline>
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--animate')).to.equal(true);
  });

  it('should not have the vertical-timeline--animate classname', () => {
    const component = shallow(
      <VerticalTimeline animate={false}>
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--animate')).to.equal(false);
  });

  it('should have the vertical-timeline--two-columns classname by default', () => {
    const component = shallow(
      <VerticalTimeline>
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--two-columns')).to.equal(true);
  });

  it('should have the vertical-timeline--two-columns classname with layout=2-columns', () => {
    const component = shallow(
      <VerticalTimeline layout="2-columns">
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--two-columns')).to.equal(true);
  });

  it('should have the vertical-timeline--one-column-left classname with layout=1-column-left', () => {
    const component = shallow(
      <VerticalTimeline layout="1-column-left">
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--one-column-left')).to.equal(
      true
    );
  });

  it('should have the vertical-timeline--one-column-left classname by default with layout=1-column', () => {
    const component = shallow(
      <VerticalTimeline layout="1-column">
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--one-column-left')).to.equal(
      true
    );
  });

  it('should have the vertical-timeline--one-column-right classname with layout=1-column-right', () => {
    const component = shallow(
      <VerticalTimeline layout="1-column-right">
        <div>test1</div>
        <div>test2</div>
      </VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--one-column-right')).to.equal(
      true
    );
  });
});
