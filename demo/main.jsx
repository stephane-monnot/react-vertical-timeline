import React from 'react';
import { createRoot } from 'react-dom/client';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import '../style.css';

const App = () => (
  <div style={{ background: '#e9ebf0', padding: '20px', fontFamily: 'sans-serif' }}>
    <h1>React Vertical Timeline Demo</h1>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Art Director</h3>
        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);