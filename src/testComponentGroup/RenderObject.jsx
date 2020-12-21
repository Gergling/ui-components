import React, { Component } from 'react';
import styled from 'styled-components';

export default class RenderObject extends Component {
  renderPrimitive(primitive) {
    return `(${typeof primitive}): ${primitive}`;
  }
  renderArray(array) {
    return (
      <>
        <div>Array</div>
        <ul>
          {array
            .map(value => (
              <li>
                {this.renderValue(value)}
              </li>
            ))
          }
        </ul>
      </>
    );
  }
  renderObject(object) {
    return (
      <>
        <div>{object.constructor.name}</div>
        <ul>
          {Object
            .entries(object)
            .map(entry => (
              <li>
                {entry[0]}: {this.renderValue(entry[1])}
              </li>
            ))
          }
        </ul>
      </>
    );
  }
  renderValue(value) {
    return typeof value === 'object' ? (value.constructor === [].constructor ? this.renderArray(value) : this.renderObject(value)) : this.renderPrimitive(value);
  }
  render() {
    return (
      <div>
        {this.renderValue(this.props.value)}
      </div>
    );
  }
}
