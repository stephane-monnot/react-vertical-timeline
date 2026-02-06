/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { VerticalTimelineElement } from '../src/index';
import '@testing-library/jest-dom';

// Mock IntersectionObserver
beforeEach(() => {
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe('VerticalTimelineElement', () => {
  it('should have the vertical-timeline-element classname', () => {
    const { container } = render(<VerticalTimelineElement />);
    const element = container.querySelector('.vertical-timeline-element');
    expect(element).toBeInTheDocument();
  });

  it('should have the vertical-timeline-element--right classname', () => {
    const { container } = render(<VerticalTimelineElement position="right" />);
    const element = container.querySelector('.vertical-timeline-element');
    expect(element).toHaveClass('vertical-timeline-element--right');
  });

  describe('when children is empty', () => {
    it('should have the vertical-timeline-element--no-children classname', () => {
      const { container } = render(<VerticalTimelineElement />);
      const element = container.querySelector('.vertical-timeline-element');
      expect(element).toHaveClass('vertical-timeline-element--no-children');
    });

    it('should have the vertical-timeline-element--no-children classname even with date', () => {
      const { container } = render(<VerticalTimelineElement date="2018" />);
      const element = container.querySelector('.vertical-timeline-element');
      expect(element).toHaveClass('vertical-timeline-element--no-children');
    });

    it('should not have the vertical-timeline-element--no-children classname when content exists', () => {
      render(
        <VerticalTimelineElement>
          <div>My Child</div>
        </VerticalTimelineElement>
      );
      // Find the element by its text content
      const element = screen.getByText('My Child').closest('.vertical-timeline-element');
      expect(element).not.toHaveClass('vertical-timeline-element--no-children');
    });
  });
});