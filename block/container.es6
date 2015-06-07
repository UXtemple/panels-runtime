import Component from './component';
import FluxComponent from 'flummox/component';
import React, { PropTypes } from 'react';

export default class BlockContainer extends React.Component {
  get stores() {
    return {
      types: store => ({type: store.getByName(this.props.block.type).component})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component {...this.props} /></FluxComponent>;
  }

  static propTypes = {
    context: PropTypes.object,
    block: PropTypes.shape({
      type: PropTypes.string.isRequired,
      data: PropTypes.object,
      style: PropTypes.object
    }).isRequired
  }
}
