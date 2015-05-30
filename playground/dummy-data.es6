import { ActionBlock, ImageBlock, TitleBlock } from 'panels-ui/blocks';
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
  name: 'Action',
  component: ActionBlock
}, {
  name: 'Image',
  component: ImageBlock
}, {
  name: 'Project',
  component: ProjectContainer
}, {
  name: 'Title',
  component: TitleBlock
}];

export const PANELS = [{
  uri: 'http://usepanels.com.dev/',
  title: 'Use Panels',
  blocks: [{
    id: 'fbd250b7-95bd-4b82-b7bc-d1ba1da6fa01',
    type: 'Image',
    data: {
      title: 'Private beta',
      src: 'http://usepanels.com.dev/private-beta.svg'
    },
    style: {
      marginTop: 25
    }
  }, {
    id: 'bbd250b7-95bd-4b82-b7bc-d1ba1da6fa01',
    type: 'Title',
    data: {
      title: 'Functional web editing experience with a futuristic twist.'
    },
    style: {
      color: '#323232',
      marginTop: 25
    }
  }, {
    id: 'b0ef500a-d7c7-4e8c-b253-7b3651d10fb7',
    type: 'Action',
    data: {
      href: 'http://router.usepanels.com.dev/',
      title: 'Router'
    },
    style: {
      base: {
        marginTop: 25,
        backgroundColor: '#323232',
        color: 'white'
      },
      active: {
        color: 'red'
      }
    }
  }, {
    id: '55d871bb-ef7b-48fc-b4b2-b3936674ed6c',
    type: 'Action',
    data: {
      href: 'http://store.usepanels.com.dev/',
      title: 'Store'
    }
  }, {
    id: '9d6a0b0f-a674-4eab-a01d-a94ffabe9f90',
    type: 'Action',
    data: {
      href: 'http://types.usepanels.com.dev/',
      title: 'Types'
    }
  }, {
    id: '9cf09c2c-9f8f-46c5-974e-f914da5f0aea',
    type: 'Action',
    data: {
      href: 'http://ui.usepanels.com.dev/',
      title: 'UI'
    }
  }]
}, {
  uri: 'http://router.usepanels.com.dev/',
  title: 'Panels router',
  blocks: [{
    id: 'ef9b3f3c-d818-4015-ad26-a4593b07eb66',
    type: 'Project',
    data: {
      index: 0
    }
  }, {
    id: '75d871bb-ef7b-48fc-b4b2-b3936674ed6c',
    type: 'Action',
    data: {
      href: 'http://usepanels.com.dev/',
      title: 'Panels (inception)'
    }
  }]
}, {
  uri: 'http://store.usepanels.com.dev/',
  title: 'Panels store',
  blocks: [{
    id: 'de452738-3dcf-4de5-bf7a-1d56bcfda316',
    type: 'Project',
    data: {
      index: 1
    }
  }]
}, {
  uri: 'http://types.usepanels.com.dev/',
  title: 'Panels types',
  blocks: [{
    id: '522defc9-5ecc-4278-aaf6-5d0eca2af407',
    type: 'Project',
    data: {
      index: 2
    }
  }]
}, {
  uri: 'http://ui.usepanels.com.dev/',
  title: 'Panels UI',
  blocks: [{
    id: 'a7cc825c-8655-401e-b481-be6ad942de41',
    type: 'Project',
    data: {
      index: 3
    }
  }]
}];
