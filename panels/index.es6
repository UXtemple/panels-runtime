import { connect } from 'redux/react';
import { getters } from 'panels-router';
import InnerComponent from './component';
import React, { PropTypes } from 'react';
import routeShape from './route-shape';

@connect(({router}) => ({panels: getters.panels(router)}))
export default class PanelsContainer {
  render() {
    return <InnerComponent {...this.props} />;
  }

  static propTypes = {
    panels: PropTypes.arrayOf(routeShape).isRequired
  }
}
