/* eslint-disable global-require, import/no-unresolved, react/no-multi-comp */
import React from 'react';
import ReactDOM from 'react-dom';
import GithubCorner from 'react-github-corner';
import { Catalog, CodeSpecimen, ReactSpecimen, pageLoader } from 'catalog';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import 'purecss/build/pure.css';

import { VerticalTimeline, VerticalTimelineElement } from '../src/index';
import './main.css';
import '../style.css';

// Add your documentation imports here. These are available to
// React specimen. Do NOT pass React here as Catalog does that.
const documentationImports = {};
const pages = [
  {
    path: '/',
    title: 'Introduction',
    content: pageLoader(() => import('../README.md'))
  },
  {
    path: '/demo',
    title: 'Demo',
    content: () => (
      <VerticalTimeline>
        <VerticalTimelineElement
          title="Creative Director"
          subtitle="Miami, FL"
          content="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        />
        <VerticalTimelineElement
          title="Art Director"
          subtitle="San Francisco, CA"
          content="Creative Direction, User Experience, Visual Design, SEO, Online Marketing"
          date="2010 - 2011"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        />
        <VerticalTimelineElement
          title="Web Designer"
          subtitle="Los Angeles, CA"
          content="User Experience, Visual Design"
          date="2008 - 2010"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        />
        <VerticalTimelineElement
          title="Web Designer"
          subtitle="San Francisco, CA"
          content="User Experience, Visual Design"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        />
        <VerticalTimelineElement
          title="Content Marketing for Web, Mobile and Social Media"
          subtitle="Online Course"
          content="Strategy, Social Media"
          date="April 2013"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        />
        <VerticalTimelineElement
          title="Agile Development Scrum Master"
          subtitle="Certification"
          content="Creative Direction, User Experience, Visual Design"
          date="November 2012"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        />
        <VerticalTimelineElement
          title="Bachelor of Science in Interactive Digital Media Visual Imaging"
          subtitle="Bachelor Degree"
          content="Creative Direction, Visual Design"
          date="2002 - 2006"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        />
      </VerticalTimeline>
    )
  }
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
        jsx: props => <ReactSpecimen {...props} />
      }}
      title="React Vertical Timeline"

    />
  </div>,
  document.getElementById('catalog')
);
