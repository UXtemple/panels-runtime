import React from 'react';

function getPanels(flux) {
  return {
    navigate(uri) {
      console.log('navigate', uri)
      flux.getActions('router').navigate(uri);
    }
  }
}

export default class Block extends React.Component {
  render() {
    const Type = this.props.type;
    let r = <span>missing {this.props.block.type}</span>

    if (this.props.type) {
      r = <Type {...this.props.block.data} style={this.props.block.style} panels={getPanels(this.props.flux)} />;
    }

    return r;
  }
}

Block.propTypes = {
  block: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.object,
    style: React.PropTypes.object
  }).isRequired,
  type: React.PropTypes.element.isRequired
}
