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
    return <FluxComponent connectToStores={this.stores}><Component currentUri={this.props.currentUri} /></FluxComponent>;
  }
}

PanelContainer.propTypes = {
  currentUri: React.PropTypes.string.isRequired,
  uri: React.PropTypes.string.isRequired
}
