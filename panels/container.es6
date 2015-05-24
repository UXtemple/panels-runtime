import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class PanelsContainer extends FluxComponent {
  get stores() {
    return {
      router: store => ({
        keys: store.keys,
        uri: store.uri
      })
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}
