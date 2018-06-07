import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import VerticalTimeline from '../src/VerticalTimeline';

describe('VerticalTimeline', function () {
  it('should have the vertical-timeline classname', function () {
    const component = shallow(
      <VerticalTimeline><div>test1</div><div>test2</div></VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline')).to.be.true;
  });

  it('should have the vertical-timeline--animate classname', function () {
    const component = shallow(
      <VerticalTimeline><div>test1</div><div>test2</div></VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--animate')).to.be.true;
  });

  it('should not have the vertical-timeline--animate classname', function () {
    const component = shallow(
      <VerticalTimeline animate={false}><div>test1</div><div>test2</div></VerticalTimeline>
    );
    expect(component.hasClass('vertical-timeline--animate')).to.be.false;
  });
});
