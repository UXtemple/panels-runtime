import React from 'react';

export default class Block extends React.Component {
  render() {
    const Type = this.props.type;
    return <Type {...this.props.data} style={this.props.style} />;
  }
}

Block.propTypes = {
  block: React.PropTypes.shape({
    type: React.PropTypes.string.isRequired,
    data: React.PropTypes.object,
    style: React.PropTypes.object
  }).isRequired,
  type: React.PropTypes.element.isRequired
}
