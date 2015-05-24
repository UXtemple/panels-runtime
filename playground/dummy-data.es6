import { ActionBlock, TitleBlock } from 'panels-ui/blocks';
import React from 'react';

const PROJECTS = [{
  name: 'panels-router'
}, {
  name: 'panels-store'
}, {
  name: 'panels-types'
}, {
  name: 'panels-ui'
}];
class Project extends React.Component {
  render() { return <div>{this.props.name}</div> }
}
Project.propTypes = { name: React.PropTypes.string.isRequired }
class ProjectContainer extends React.Component {
  render() { return <Project {...PROJECTS[this.props.index]}/> }
}
ProjectContainer.propTypes = { index: React.PropTypes.number.isRequired }

export const TYPES = [{
  name: 'Title',
  component: TitleBlock
}, {
  name: 'Action',
  component: ActionBlock
}, {
  name: 'Project',
  component: ProjectContainer
}];

export const PANELS = [{
  uri: 'https://usepanels.com/',
  blocks: [{
    type: 'Title',
    data: {
      title: 'Use Panels'
    }
  }, {
    type: 'Action',
    data: {
      href: 'https://usepanels.com/https://router.usepanels.com/',
      title: 'Router'
    }
  }, {
    type: 'Action',
    data: {
      href: 'https://usepanels.com/https://store.usepanels.com/',
      title: 'Store'
    }
  }, {
    type: 'Action',
    data: {
      href: 'https://usepanels.com/https://types.usepanels.com/',
      title: 'Types'
    }
  }, {
    type: 'Action',
    data: {
      href: 'https://usepanels.com/https://ui.usepanels.com/',
      title: 'UI'
    }
  }]
}, {
  uri: 'https://router.usepanels.com/',
  blocks: [{
    type: 'Project',
    data: {
      index: 0
    }
  }]
}, {
  uri: 'https://store.usepanels.com/',
  blocks: [{
    type: 'Project',
    data: {
      index: 1
    }
  }]
}, {
  uri: 'https://types.usepanels.com/',
  blocks: [{
    type: 'Project',
    data: {
      index: 2
    }
  }]
}, {
  uri: 'https://ui.usepanels.com/',
  blocks: [{
    type: 'Project',
    data: {
      index: 3
    }
  }]
}];
