import React from 'react';
import { createRoot } from 'react-dom/client';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import '../style.css';

const Icon = ({ char }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100%', fontSize: '24px' }}>
    {char}
  </div>
);

const App = () => (
  <div style={{ background: '#f0f2f5', fontFamily: 'sans-serif', paddingBottom: '50px' }}>
    <div style={{ background: '#2196f3', padding: '50px 20px', textAlign: 'center', color: '#fff', marginBottom: '40px' }}>
      <h1 style={{ margin: 0, fontSize: '2.5rem' }}>React Vertical Timeline</h1>
      <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Now with React 19 + Vite Support</p>
    </div>

    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2026 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon char="🚀" />}
      >
        <h3 className="vertical-timeline-element-title">v4.0.0 Release</h3>
        <h4 className="vertical-timeline-element-subtitle">Modernization</h4>
        <p>
          Full support for React 19, Vite, and standard NPM lockfiles. Removed legacy Enzyme dependencies.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Feb 2026"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<Icon char="🧪" />}
      >
        <h3 className="vertical-timeline-element-title">Test Migration</h3>
        <h4 className="vertical-timeline-element-subtitle">Jest + RTL</h4>
        <p>
          Migrated 13 test suites from Enzyme to React Testing Library. 100% Test Coverage.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Jan 2026"
        iconStyle={{ background: 'rgb(76, 175, 80)', color: '#fff' }}
        icon={<Icon char="⚡" />}
      >
        <h3 className="vertical-timeline-element-title">Vite Integration</h3>
        <h4 className="vertical-timeline-element-subtitle">Developer Experience</h4>
        <p>
          Replaced 'Catalog' with a lightning-fast Vite demo server. Fixed ES6 module exports.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2018 - 2024"
        iconStyle={{ background: 'rgb(255, 193, 7)', color: '#fff' }}
        icon={<Icon char="📦" />}
      >
        <h3 className="vertical-timeline-element-title">Legacy Era</h3>
        <h4 className="vertical-timeline-element-subtitle">Webpack & Enzyme</h4>
        <p>
          The original foundation. Served well, but incompatible with modern React 18/19 strict mode.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<Icon char="⭐" />}
      />
    </VerticalTimeline>
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);