import $ from 'jquery';
import 'flot';
import React, { Component, PropTypes } from 'react';

class ReactFlot extends Component {
  static propTypes = {
    data: PropTypes.arrayOf.isRequired,
    options: PropTypes.shape.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  componentDidMount() {
    $.plot($('#flot-chart-div'), this.props.data, this.props.options);
  }

  render() {
    const style = {
      height: this.props.height || '400px',
      width: this.props.width || '100%',
    };

    return (
      <div id="flot-chart-div" style={style} />
    );
  }
}

export default ReactFlot;
