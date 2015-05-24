import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class BlockContainer extends React.Component {
  get stores() {
    return {
      types: store => ({type: store.getByName(this.props.block.type)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

BlockContainer.propTypes = {
  block: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.object,
    style: React.PropTypes.object
  }).isRequired
}
