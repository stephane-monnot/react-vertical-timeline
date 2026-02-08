/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import { VerticalTimeline } from '../src/index';
import '@testing-library/jest-dom';

describe('VerticalTimeline', () => {
  it('should have the vertical-timeline classname', () => {
    const { container } = render(
      <VerticalTimeline>
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline');
  });

  it('should have the vertical-timeline--animate classname', () => {
    const { container } = render(
      <VerticalTimeline>
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--animate');
  });

  it('should not have the vertical-timeline--animate classname', () => {
    const { container } = render(
      <VerticalTimeline animate={false}>
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).not.toHaveClass('vertical-timeline--animate');
  });

  it('should have the vertical-timeline--two-columns classname by default', () => {
    const { container } = render(
      <VerticalTimeline>
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--two-columns');
  });

  it('should have the vertical-timeline--two-columns classname with layout=2-columns', () => {
    const { container } = render(
      <VerticalTimeline layout="2-columns">
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--two-columns');
  });

  it('should have the vertical-timeline--one-column-left classname with layout=1-column-left', () => {
    const { container } = render(
      <VerticalTimeline layout="1-column-left">
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--one-column-left');
  });

  it('should have the vertical-timeline--one-column-left classname by default with layout=1-column', () => {
    const { container } = render(
      <VerticalTimeline layout="1-column">
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--one-column-left');
  });

  it('should have the vertical-timeline--one-column-right classname with layout=1-column-right', () => {
    const { container } = render(
      <VerticalTimeline layout="1-column-right">
        <div>test1</div>
      </VerticalTimeline>
    );
    expect(container.firstChild).toHaveClass('vertical-timeline--one-column-right');
  });
});
