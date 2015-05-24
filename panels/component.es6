import PanelContainer from '../panel/container';
import { Panels as PanelsUi } from 'panels-ui';
import React from 'react';

export default class Panels extends React.Component {
  render() {
    const panels = this.props.keys.map(uri => <PanelContainer key={uri} uri={uri} />);

    return <PanelsUi>{panels}</PanelsUi>;
  }
}

Panels.propTypes = {
  keys: React.PropTypes.object.isRequired,
  uri: React.PropTypes.string.isRequired
}
