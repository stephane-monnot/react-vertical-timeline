webpackJsonp([0],{

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {


    var React = __webpack_require__(2);
    var createReactClass = __webpack_require__(49);
    var PageRenderer = __webpack_require__(362).PageRenderer;
    if (PageRenderer.__esModule) {
      PageRenderer = PageRenderer.default;
    }
    var WrappedPageRenderer = createReactClass({
      displayName: 'WrappedPageRenderer',
      getInitialState: function() {
        return {content: __webpack_require__(955)};
      },
      componentWillMount: function() {
        var component = this;
        if (false) {
          module.hot.accept("!!./node_modules/raw-loader/index.js!./README.md", function() {
            component.setState({
              content: require("!!./node_modules/raw-loader/index.js!./README.md")
            })
          })
        }
      },
      render: function() {
        return React.createElement(PageRenderer, Object.assign({}, this.props, {content: this.state.content}));
      }
    });
    WrappedPageRenderer.__catalog_loader__ = true;
    module.exports = WrappedPageRenderer;
  

/***/ }),

/***/ 955:
/***/ (function(module, exports) {

module.exports = "[![build status](https://secure.travis-ci.org/stephane-monnot/react-vertical-timeline.svg)](http://travis-ci.org/stephane-monnot/react-vertical-timeline) [![Dependency Status](https://david-dm.org/stephane-monnot/react-vertical-timeline.svg)](https://david-dm.org/stephane-monnot/react-vertical-timeline)\n\n# react-vertical-timeline-component - Vertical timeline for React.js\n![alt tag](https://i.imgur.com/X7Tefzr.gif)\n\n## Full documentation & Demo\n\n[React Vertical Timeline documentation](https://stephane-monnot.github.io/react-vertical-timeline/)\n\n\n## Install\n\n```code\n$ npm i react-vertical-timeline-component\n```\n\n\n## Usage\n\n```code|lang-jsx\n---\nimport { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';\nimport 'react-vertical-timeline-component/style.min.css';\n\n...\n\n<VerticalTimeline>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--work\"\n    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}\n    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}\n    date=\"2011 - present\"\n    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}\n    icon={<WorkIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Creative Director</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">Miami, FL</h4>\n    <p>\n      Creative Direction, User Experience, Visual Design, Project Management, Team Leading\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--work\"\n    date=\"2010 - 2011\"\n    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}\n    icon={<WorkIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Art Director</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">San Francisco, CA</h4>\n    <p>\n      Creative Direction, User Experience, Visual Design, SEO, Online Marketing\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--work\"\n    date=\"2008 - 2010\"\n    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}\n    icon={<WorkIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Web Designer</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">Los Angeles, CA</h4>\n    <p>\n      User Experience, Visual Design\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--work\"\n    date=\"2006 - 2008\"\n    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}\n    icon={<WorkIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Web Designer</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">San Francisco, CA</h4>\n    <p>\n      User Experience, Visual Design\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--education\"\n    date=\"April 2013\"\n    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}\n    icon={<SchoolIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Content Marketing for Web, Mobile and Social Media</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">Online Course</h4>\n    <p>\n      Strategy, Social Media\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--education\"\n    date=\"November 2012\"\n    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}\n    icon={<SchoolIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Agile Development Scrum Master</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">Certification</h4>\n    <p>\n      Creative Direction, User Experience, Visual Design\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    className=\"vertical-timeline-element--education\"\n    date=\"2002 - 2006\"\n    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}\n    icon={<SchoolIcon />}\n  >\n    <h3 className=\"vertical-timeline-element-title\">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>\n    <h4 className=\"vertical-timeline-element-subtitle\">Bachelor Degree</h4>\n    <p>\n      Creative Direction, Visual Design\n    </p>\n  </VerticalTimelineElement>\n  <VerticalTimelineElement\n    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}\n    icon={<StarIcon />}\n  />\n</VerticalTimeline>\n```\n\n\n## VerticalTimeline Props\n\n### `animate={ Boolean }`\n\nEnable or disable animations on elements (default: true).\n\n### `className={ String }`\n\nAdd extra class name to root div element.\n\n### `layout={ String }`\n\nChoose if you want `'1-column-left'` or `'1-column-right'` or `'2-columns'` (default: `'2-columns'`).\n\n### `lineColor={ String }`\n\nChoose a color for the timeline (default: `'white'`).\n\n## VerticalTimelineElement Props\n\n### `className={ String }`\n\nAdd extra class name to root div element.\n\n### `contentArrowStyle={ Object }`\n\nAdd extra style to content arrow div element.\n\n### `contentStyle={ Object }`\n\nAdd extra style to content div element.\n\n### `date={ String }`\n\nDate of the element.\n\n### `dateClassName={ String }`\n\nAdd extra class name to the element's date.\n\n### `icon={ String }`\n\nIcon of the element.\n\n### `iconClassName={ String }`\n\nAdd extra class name to the element's icon.\n\n### `shadowSize={ String }`\n\nShadow size for icon (default: `'small'`). Available sizes are `'small'`, `'medium'` and `'large'`.\n\n### `iconOnClick={ Function }`\n\nonClick handler of the element's icon.\n\n### `onTimelineElementClick={ Function }`\n\nonClick handler of the vertical timeline element's div.\n\n### `iconStyle={ Object }`\n\nStyle of the element's icon.\n\n### `position={ String }`\n\nPosition of the element (left or right).\n\n### `style={ Object }`\n\nAdd extra style to root div element.\n\n### `textClassName={ String }`\n\nAdd extra class name to the text container.\n\n### `intersectionObserverProps={ Object }`\n\nCustom props pass to `useInView` component (default: { rootMargin: '0px 0px 40px 0px' }).\n*See [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) for more information.*\n\n### `visible={ Boolean }`\n\nShow element by default even if it is outside of the viewport (default: false).\n\n\n## Showcase\n\n* [My resume (Stéphane Monnot)](https://stephanemonnot.com/).\n\n\n## For development\n### Launch the demo with catalog\n```code\n$ yarn start\n```\n\n### Run the tests\n```code\n$ yarn test\n```\n\n### Watch and Run the tests\n```code\n$ yarn test:watch\n```\n\n### Run lint\n```code\n$ yarn test:lint\n```\n\n### Publish new version (only for maintainers)\n```code\n$ yarn publish\n```\n\n## License\n\n*react-vertical-timeline-component* is available under MIT. See LICENSE for more details.\n"

/***/ })

});
//# sourceMappingURL=0.5f8a695a.chunk.js.map