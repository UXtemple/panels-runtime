import { connect } from 'redux/react';
import { getters as panelsGetters } from 'panels-store';
import InnerComponent from './component';
import panelShape from './panel-shape';
import React, { Component, PropTypes } from 'react';

@connect((state, {uri}) => ({panel: panelsGetters.find(state.store, uri)}))
export default class PanelContainer extends Component {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    context: PropTypes.string.isRequired,
    panel: panelShape.isRequired,
    uri: PropTypes.string.isRequired
  }
}
