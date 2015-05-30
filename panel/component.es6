import BlockContainer from '../block/container';
import { Panel as PanelUi } from 'panels-ui';
import React from 'react';

export default class Panel extends React.Component {
  render() {
    let blocks = <span>loading...</span>;
    if (this.props.panel) {
      blocks = this.props.panel.blocks.map(block => <BlockContainer key={block.id} block={block} currentUri={this.props.currentUri} />);
    }
    return <PanelUi>{blocks}</PanelUi>;
  }
}

Panel.propTypes = {
  currentUri: React.PropTypes.string.isRequired,
  panel: React.PropTypes.shape({
    uri: React.PropTypes.string.isRequired,
    blocks: React.PropTypes.arrayOf(React.PropTypes.shape({
      id: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      data: React.PropTypes.object,
      style: React.PropTypes.object
    })).isRequired
  }).isRequired
}
