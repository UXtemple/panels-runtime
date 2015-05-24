import Component from './component';
import FluxComponent from 'flummox/component';
import React from 'react';

export default class PanelContainer extends React.Component {
  get stores() {
    return {
      panels: store => ({panel: store.getByUri(this.props.uri)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component /></FluxComponent>;
  }
}

PanelContainer.propTypes = {
  uri: React.PropTypes.string.isRequired
}
