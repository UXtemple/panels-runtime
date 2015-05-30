import React from 'react';

function getPanels(flux, currentUri) {
  return {
    navigate(uri) { flux.getActions('router').navigate(`${currentUri}${uri}`) },
    nextUri() { return flux.getStore('router').nextUri(currentUri) }
  }
}

export default class Block extends React.Component {
  render() {
    const Type = this.props.type;
    let r = <span>missing {this.props.block.type}</span>

    if (this.props.type) {
      r = <Type {...this.props.block.data} style={this.props.block.style} panels={getPanels(this.props.flux, this.props.currentUri)} />;
    }

    return r;
  }
}

Block.propTypes = {
  currentUri: React.PropTypes.string.isRequired,
  block: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.object,
    style: React.PropTypes.object
  }).isRequired,
  type: React.PropTypes.element.isRequired
}
