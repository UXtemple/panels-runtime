import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BlockContainer extends React.Component {
  get stores() {
    return {
      types: store => ({type: store.getByName(this.props.block.type).component})
    };
  }

  render() {
    return (
      <FluxComponent connectToStores={this.stores}>
        <Component block={this.props.block} currentUri={this.props.currentUri} />
      </FluxComponent>
    );
  }
}

BlockContainer.propTypes = {
  currentUri: React.PropTypes.string.isRequired,
  block: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.object,
    style: React.PropTypes.object
  }).isRequired
}
