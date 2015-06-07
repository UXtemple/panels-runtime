import React, { Component, PropTypes } from 'react';

export default class Block extends Component {
  render() {
    const Type = this.props.type;
    let r = <span>missing {this.props.block.type}</span>

    if (this.props.type) {
      r = <Type {...this.props.block.data} style={this.props.block.style} {...this.props.context} />;
    }

    return r;
  }
}

Block.propTypes = {
  block: PropTypes.shape({
    type: PropTypes.string.isRequired,
    data: PropTypes.object,
    style: PropTypes.object
  }).isRequired,
  type: PropTypes.element //.isRequired
}
