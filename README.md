[![build status](https://secure.travis-ci.org/stephane-monnot/react-vertical-timeline.svg)](http://travis-ci.org/stephane-monnot/react-vertical-timeline) [![Dependency Status](https://david-dm.org/stephane-monnot/react-vertical-timeline.svg)](https://david-dm.org/stephane-monnot/react-vertical-timeline)

# react-vertical-timeline-component - Vertical timeline for React.js
![alt tag](https://i.imgur.com/X7Tefzr.gif)

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
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
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
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="April 2013"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
    <p>
      Strategy, Social Media
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="November 2012"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
    <p>
      Creative Direction, User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="2002 - 2006"
    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
    icon={<SchoolIcon />}
  >
    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
    <p>
      Creative Direction, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
    icon={<StarIcon />}
  />
</VerticalTimeline>
```


## VerticalTimeline Props

### `animate={ Boolean }`

Enable or disable animations on elements (default: true).

### `className={ String }`

Add extra class name to root div element.

### `layout={ String }`

Choose if you want `'1-column'` or `'2-columns'` (default: `'2-columns'`).


## VerticalTimelineElement Props

### `className={ String }`

Add extra class name to root div element.

### `contentArrowStyle={ Object }`

Add extra style to content arrow div element.

### `contentStyle={ Object }`

Add extra style to content div element.

### `date={ String }`

Date of the element.

### `dateClassName={ String }`

Add extra class name to the element's date.

### `icon={ String }`

Icon of the element.

### `iconClassName={ String }`

Add extra class name to the element's icon.

### `iconOnClick={ Function }`

onClick handler of the element's icon.

### `onTimelineElementClick={ Function }`

onClick handler of the vertical timeline element's div.

### `iconStyle={ Object }`

Style of the element's icon.

### `position={ String }`

Position of the element (left or right).

### `style={ Object }`

Add extra style to root div element.

### `textClassName={ String }`

Add extra class name to the text container.

### `visibilitySensorProps={ Object }`

Custom props pass to VisibilitySensor component (default: { partialVisibility: true, offset: { bottom: 80 } }).
*See [react-visibility-sensor](https://github.com/joshwnj/react-visibility-sensor) for more information.*


## Showcase

* [My resume (Stéphane Monnot)](https://stephanemonnot.com/).


## For development
### Launch the demo with catalog
```code
$ yarn start
```

### Run the tests
```code
$ yarn test
```

### Watch and Run the tests 
```code
$ yarn test:watch
```

### Run lint
```code
$ yarn test:lint
```

### Publish new version (only for maintainers)
```code
$ yarn publish
```

## License

*react-vertical-timeline-component* is available under MIT. See LICENSE for more details.
