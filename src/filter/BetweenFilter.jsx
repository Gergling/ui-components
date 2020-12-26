import React, { Component } from 'react';
import styled from 'styled-components';

import DateTextInput from '../dateTextInput/DateTextInput';

export default class BetweenFilter extends Component {
  constructor(props) {
    super(props);
    const model = props.model || {};
    const value = model.value || {};
    this.state = { value };
  }
  getMode() {
    if (this.props.model && this.props.model.value) {
      // TODO (Exception): Model format might be invalid.
      // TODO (Exception): Start/end might have different formats.
      // TODO (Exception): Model and format might be mismatched.
      const formatIsDate = [
        'start',
        'end'
      ].filter(prop => typeof this.props.model.value[prop] === 'object' && this.props.model.value[prop].constructor === Date).length !== 0;
      
      if (formatIsDate) {
        return 'date';
      }
    }
    return this.props.mode || 'number';
  }
  handleChange(propValue, prop) {
    const model = { value: {} };
    model.value[prop] = propValue;
    this.props.onUpdate(model);
    this.setState(model);
  }
  renderField(prop) {
    return (this.getMode() === 'date' ? <DateTextInput onUpdate={e => this.handleChange(e, prop)} /> : <input type="text" value={this.state.value[prop]} onChange={e => this.handleChange(e.target.value, prop)} />);
  }
  render() {
    return (
      <div>
        <div>Between filter interface (two input boxes).</div>
        Start: {this.renderField('start')}
        End: {this.renderField('end')}
      </div>
    );
  }
}
