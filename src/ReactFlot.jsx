import $ from 'jquery';
import React, { Component, PropTypes } from 'react';

import '../flot/jquery.flot';
// import '../flot/jquery.flot.resize';
import '../flot/jquery.flot.tooltip';

class ReactFlot extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired,
    options: PropTypes.object.isRequired,
    height: PropTypes.string,
    width: PropTypes.string,
  }

  componentDidMount() {
    this.draw();

    if (window.attachEvent) {
      window.attachEvent('onresize', this.draw.bind(this));
    } else if (window.addEventListener) {
      window.addEventListener('resize', this.draw.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (window.attachEvent) {
      window.detachEvent('onresize', this.draw.bind(this));
    } else if (window.addEventListener) {
      window.removeEventListener('resize', this.draw.bind(this), true);
    }
  }

  draw() {
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
