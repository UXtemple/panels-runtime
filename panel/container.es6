import Component from './component';
import FluxComponent from 'flummox/component';
import React, { PropTypes } from 'react';

export default class PanelContainer extends React.Component {
  get stores() {
    return {
      panels: store => ({panel: store.getByUri(this.props.uri)})
    };
  }

  render() {
    return <FluxComponent connectToStores={this.stores}><Component currentUri={this.props.currentUri} /></FluxComponent>;
  }

  static propTypes = {
    currentUri: PropTypes.string.isRequired,
    uri: PropTypes.string.isRequired
  }
}
