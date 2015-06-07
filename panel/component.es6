import { Panel as PanelUi } from 'panels-ui';
import BlockContainer from '../block/container';
import React, { Component, PropTypes } from 'react';

export default class Panel extends Component {
  render() {
    let blocks = <span>loading...</span>;

    if (this.props.panel) {
      const context = {
        flux: this.props.flux.getContext(this.props.panel.app) || {},
        panels: {
          navigate: (uri) => this.props.flux.getActions('router').navigate(`${this.props.currentUri}${uri}`),
          nextUri: () => this.props.flux.getStore('router').nextUri(this.props.currentUri)
        }
      };

      blocks = this.props.panel.blocks.map((block, i) => <BlockContainer key={i} block={block} context={context} />);
    }

    return <PanelUi style={this.props.panel.style}>{blocks}</PanelUi>;
  }

  static propTypes = {
    currentUri: PropTypes.string.isRequired,
    panel: PropTypes.shape({
      app: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
      style: PropTypes.object,
      blocks: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.string.isRequired,
        data: PropTypes.object,
        style: PropTypes.object
      })).isRequired
    }) //.isRequired
  }
}
