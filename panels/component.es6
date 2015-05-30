import PanelContainer from '../panel/container';
import { Panels as PanelsUi } from 'panels-ui';
import React from 'react';

export default class Panels extends React.Component {
  parse({currentUri, panelUri}, i) {
    return <PanelContainer key={`${currentUri}@${i}`} currentUri={currentUri} uri={panelUri} index={i} />;
  }

  render() {
    const panels = this.props.keys.map(this.parse);

    return <PanelsUi>{panels}</PanelsUi>;
  }
}

Panels.propTypes = {
  keys: React.PropTypes.object.isRequired
}
