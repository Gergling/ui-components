import React, { Component } from 'react';
import styled from 'styled-components';

import serviceFactory from './filterServiceFactory';

import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

export default class ConditionalFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { childModels: [] };
  }
  handleOnDrop(item) {
    console.log('conditional onDrop',item)
    this.state.childModels.push(item.onDrop());
    this.setState({
      childModels: this.state.childModels
    });
  }
  renderChild(child, key) {
    console.log('render child', child)
    // TODO: Needs another draggable item and the model component.
    return (
      <li key={key}>
        <DraggableItem onDrop={() => child}>
          {child.createUIComponent()}
          {/* <span onClick={this.setState({ childModels: undefined })}>
            <CancelButton />
          </span> */}
        </DraggableItem>
      </li>
    );
  }
  renderChildren() {
    return this.state.childModels.length > 0 ? (<ul>{this.state.childModels.map(this.renderChild.bind(this))}</ul>) : 'Show me everything, filter nothing';
  }
  render() {
    // Needs the capacity to add children.
    // Each child needs to come from a list of field configurations.
    return (
      <div>
        <div>(Field name)</div>
        <div>(Operand)</div>
        <Dropzone name="conditional" onDrop={this.handleOnDrop.bind(this)}>{ this.renderChildren() }</Dropzone>
      </div>
    );
  }
}
