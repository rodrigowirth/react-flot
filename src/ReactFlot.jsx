import $ from 'jquery';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import equal from 'deep-equal';

import addLabels from './add-labels';

import '../flot/jquery.flot.min';
import '../flot/jquery.flot.tooltip.min';
import '../flot/jquery.flot.pie.min';
import '../flot-override/jquery.flot.resize';

class ReactFlot extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    data: PropTypes.array.isRequired, // eslint-disable-line
    options: PropTypes.object.isRequired, //eslint-disable-line
    height: PropTypes.string,
    width: PropTypes.string,
  }

  componentDidMount() {
    this.draw();
  }

  componentWillReceiveProps(nextProps) {
    if (!equal(nextProps.data, this.props.data)) {
      this.draw(null, nextProps.data);
    }
  }

  draw(event, data) {
    const chart = $.plot($(`#${this.props.id}`), data || this.props.data, this.props.options);
    addLabels(chart, this.props.options);
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
