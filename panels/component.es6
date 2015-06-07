import { Panels as PanelsUi } from 'panels-ui';
import IPropTypes from 'react-immutable-proptypes';
import PanelContainer from '../panel/container';
import React, { Component } from 'react';

export default class Panels extends Component {
  render() {
    const panels = this.props.keys.map(({currentUri, panelUri}, i) =>
      <PanelContainer key={`${currentUri}@${i}`} currentUri={currentUri} uri={panelUri} index={i} />);

    return <PanelsUi>{panels}</PanelsUi>;
  }

  static propTypes = {
    keys: IPropTypes.list //.isRequired
  }
}
