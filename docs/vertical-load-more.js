import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import Fab from '@material-ui/core/Fab';
import { VerticalTimeline, VerticalTimelineElement } from '../src/index';

import './vertical-load-more.css';

const dataExamples = [
  {
    props: {
      date: '2011 - present',
      className: 'vertical-timeline-element--work',
      contentStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(33, 150, 243)' },
      iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
      icon: <WorkIcon />,
    },
    title: 'Creative Director',
    subtitle: 'Miami, FL',
    content:
      'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
  },
  {
    props: {
      date: '2010 - 2011',
      className: 'vertical-timeline-element--education',
      contentStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      contentArrowStyle: { borderRight: '7px solid  rgb(233, 30, 99)' },
      iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
      icon: <SchoolIcon />,
    },
    title: 'Content Marketing for Web, Mobile and Social Media',
    subtitle: 'Online Course',
    content: 'Strategy, Social Media',
  },
];

const VerticalLoadMore = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    loadMore();
  }, []);

  const loadMore = () => {
    setElements([...elements, ...dataExamples]);
  };

  const addButton = () => (
    <Fab classes={{ root: 'fab-button' }} color="primary" aria-label="add">
      <AddIcon />
    </Fab>
  );

  const getTimelineElements = () =>
    elements.map(element => (
      <VerticalTimelineElement {...element.props}>
        <h3 className="vertical-timeline-element-title">{element.title}</h3>
        <h4 className="vertical-timeline-element-subtitle">
          {element.subtitle}
        </h4>
        <p>{element.content}</p>
      </VerticalTimelineElement>
    ));

  return (
    <div>
      <VerticalTimeline>
        {getTimelineElements()}
        <VerticalTimelineElement
          iconOnClick={loadMore}
          iconClassName="vertical-timeline-element-icon--button"
          icon={addButton()}
        />
      </VerticalTimeline>
    </div>
  );
};

export default VerticalLoadMore;
