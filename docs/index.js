/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import StarIcon from '@material-ui/icons/Star';
import 'purecss/build/pure.css';

import VerticalLoadMore from './vertical-load-more';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const timelineElements = [
  <VerticalTimelineElement
    onTimelineElementClick={() => {
      alert('onTimelineElementClick event fired');
    }}
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="2011 - present"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Creative Director</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management,
      Team Leading
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Content Marketing for Web, Mobile and Social Media
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>Strategy, Social Media</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Agile Development Scrum Master
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>Creative Direction, User Experience, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">
      Bachelor of Science in Interactive Digital Media Visual Imaging
    </h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>Creative Direction, Visual Design</p>
  </VerticalTimelineElement>,
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />,
];

const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md')),
  },
  {
    path: '/demo',
    title: 'Demo',
    content: () => <VerticalTimeline>{timelineElements}</VerticalTimeline>,
  },
  {
    path: '/demo-single-column',
    title: 'Demo single column',
    content: () => (
      <VerticalTimeline layout="1-column">{timelineElements}</VerticalTimeline>
    ),
  },
  {
    path: '/demo-load-more',
    title: 'Demo load more',
    content: () => <VerticalLoadMore />,
  },
  {
    path: '/demo-custom-line',
    title: 'Demo custom line color',
    content: () => (
      <VerticalTimeline className="vertical-timeline-custom-line">
        {timelineElements}
      </VerticalTimeline>
    ),
  },
];

// Catalog - logoSrc="../images/logo.png"
ReactDOM.render(
  <div>
    <GithubCorner
      href="https://github.com/stephane-monnot/react-vertical-timeline"
      bannerColor="#fff"
      octoColor="#000"
      width={80}
      height={80}
      direction="right"
    />
    <Catalog
      imports={documentationImports}
      pages={pages}
      theme={{ background: '#e3e3e3' }}
      specimens={{
        javascript: props => <CodeSpecimen {...props} lang="javascript" />,
        js: props => <CodeSpecimen {...props} lang="javascript" />,
        jsx: props => <ReactSpecimen {...props} />,
      }}
      title="React Vertical Timeline"
    />
  </div>,
  document.getElementById('catalog')
);
