[![build status](https://secure.travis-ci.org/stephane-monnot/react-vertical-timeline.svg)](http://travis-ci.org/stephane-monnot/react-vertical-timeline) [![bitHound Score](https://www.bithound.io/github/stephane-monnot/react-vertical-timeline/badges/score.svg)](https://www.bithound.io/github/stephane-monnot/react-vertical-timeline) [![Dependency Status](https://david-dm.org/stephane-monnot/react-vertical-timeline.svg)](https://david-dm.org/stephane-monnot/react-vertical-timeline)

# react-vertical-timeline-component - Vertical timeline for React.js

## Full documentation & Demo

[React Vertical Timeline documentation](https://stephane-monnot.github.io/react-vertical-timeline/)


## Install

```code
$ npm i react-vertical-timeline-component
```


## Usage

```code|lang-jsx
---
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

...

<VerticalTimeline>
    <VerticalTimelineElement
      key="1"
      title="Creative Director"
      subtitle="Miami, FL"
      content="Creative Direction, User Experience, Visual Design, Project Management, Team Leading"
      date="2011 - present"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    />
    <VerticalTimelineElement
      key="2"
      title="Art Director"
      subtitle="San Francisco, CA"
      content="Creative Direction, User Experience, Visual Design, SEO, Online Marketing"
      date="2006 - 2011"
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      icon={<WorkIcon />}
    />
    <VerticalTimelineElement
      key="3"
      title="Content Marketing for Web, Mobile and Social Media"
      subtitle="Online Course"
      content="Strategy, Social Media"
      date="April 2013"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    />
    <VerticalTimelineElement
      key="4"
      title="Agile Development Scrum Master"
      subtitle="Certification"
      content="Creative Direction, User Experience, Visual Design"
      date="November 2012"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    />
    <VerticalTimelineElement
      key="5"
      title="Bachelor of Science in Interactive Digital Media Visual Imaging"
      subtitle="Bachelor Degree"
      content="Creative Direction, Visual Design"
      date="2002 - 2006"
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      icon={<SchoolIcon />}
    />
</VerticalTimeline>
```


## VerticalTimelineElement Props

### `animate={ Boolean }`

Enable or disable animations on elements (default: true).


## VerticalTimelineElement Props

### `title={ String }`

Title of the element.

### `subtitle={ String }`

Subtitle of the element.

### `content={ String }`

Content of the element.

### `date={ String }`

Date of the element.

### `iconStyle={ Object }`

Style of the element's icon.

### `icon={ String }`

Icon of the element.

### `position={ String }`

Position of the element (left or right).


## Showcase

* [My resume (Stéphane Monnot)](https://stephanemonnot.com/).


## License

*react-vertical-timeline-component* is available under MIT. See LICENSE for more details.

