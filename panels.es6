import { connect } from 'redux/react';
import { getters } from 'panels-router';
import { Panels as PanelsUi } from 'panels-ui';
import PanelContainer from './panel/container';
import React, { Component, PropTypes } from 'react';

@connect(({router}) => ({
  panels: getters.panels(router)
}))
export default class PanelsContainer extends Component {
  render() {
    const panels = this.props.panels.map(({context, uri}, i) =>
      <PanelContainer key={i} context={context} uri={uri} />);

    return <PanelsUi>{panels}</PanelsUi>;
  }

  static propTypes = {
    panels: PropTypes.arrayOf({
      context: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired
    }).isRequired
  }
}
