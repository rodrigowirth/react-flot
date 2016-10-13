import $ from 'jquery';
import 'flot';
import React, { Component, PropTypes } from 'react';

class ReactFlot extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.isRequired,
    options: PropTypes.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  componentDidMount() {
    $.plot($(`#${this.props.id}`), this.props.data, this.props.options);
  }

  render() {
    const style = {
      height: this.props.height || '400px',
      width: this.props.width || '100%',
    };

    return (
      <div id={this.props.id} style={style} />
    );
  }
}

export default ReactFlot;
