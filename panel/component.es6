import BlockContainer from '../block/container';
import { Panel as PanelUi } from 'panels-ui';
import React from 'react';

export default class Panel extends React.Component {
  render() {
    let blocks = <span>loading...</span>;
    if (this.props.panel) {
      blocks = this.props.panel.blocks.map(block => <BlockContainer key={block.type} block={block} />);
    }
    return <PanelUi>{blocks}</PanelUi>;
  }
}

Panel.propTypes = {
  panel: React.PropTypes.shape({
    uri: React.PropTypes.string.isRequired,
    blocks: React.PropTypes.array.isRequired
  }).isRequired
}
