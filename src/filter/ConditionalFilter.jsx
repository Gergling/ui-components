import React, { Component } from 'react';
import styled from 'styled-components';

import serviceFactory from './filterServiceFactory';

import CancelButton from '../icons/Cancel';
import HorizontalBar from '../decoration/HorizontalBar';
import TreeList from '../decoration/TreeList';

import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

// Style the child conditions

// const ListContainer = styled.ul``;
const ListItem = styled.div`
  padding-bottom: ${props => props.spacing};
`;
ListItem.defaultProps = { 'margin-bottom': '10px' };

export default class ConditionalFilter extends Component {
  constructor(props) {
    super(props);
    this.state = { childModels: [], operand: this.getToggledOperand() };
  }
  getToggledOperand() {
    return this.state && this.state.operand === 'AND' ? 'OR' : 'AND';
  }
  componentDidUpdate(props, state) {
    props.onUpdate(state);
  }
  handleOnDrop(item) {
    this.state.childModels.push(item.onDrop());
    this.setState({
      childModels: this.state.childModels
    });
  }
  handleChildRemoval(childToRemove) {
    const children = this.state.childModels.filter(child => child !== childToRemove);
    this.setState({ childModels: children });
  }
  handleToggleNot() {
    this.setState({ not: !this.state.not })
  }
  handleToggleOperand() {
    this.setState({ operand: this.getToggledOperand() })
  }
  renderChild(child, key, children) {
    const spacing = children.length - 1 === key ? '0' : '10px';
    // TODO: Put the deletion at the left of the control.
    return (
      <ListItem key={key} spacing={spacing}>
        <DraggableItem onDrop={() => child}>
          {child.createUIComponent()}
          <span onClick={this.handleChildRemoval.bind(this, child)}>
            <CancelButton />
          </span>
        </DraggableItem>
      </ListItem>
    );
  }
  renderChildren() {
    return <TreeList>{this.state.childModels.map(this.renderChild.bind(this))}</TreeList>;
  }
  renderNonMultipleMessage() {
    return <div style={{color: 'black'}}>Drag multiple fields here to filter</div>;
  }
  renderDropzoneContent() {
    // TODO: Add controls for toggling NOT and AND/OR. Probably needs a flexbox. Especially in this case since you need the AND NOT grammar.
    // TODO: Handle logic for 0, 1 or multiple children.
    // 0 children just indicates it's empty
    // 1 child just highlights that the filter isn't being utilised well.
    // Multiple children have a tree list.
    return <>
      <div>
        <button onClick={this.handleToggleNot.bind(this)}>Toggle NOT</button>
        <button onClick={this.handleToggleOperand.bind(this)}>Toggle AND/OR</button>
      </div>
      <div style={{ display: 'flex' }}>
        <HorizontalBar />
        <div style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' }}><div style={{ width: '90px', padding: '5px', border: 'solid 1px black' }}>{ this.state.operand }{ this.state.not ? ' NOT' : '' }</div></div>
        { this.state.childModels.length > 0 ? this.renderChildren() : ''}
      </div>
      { this.state.childModels.length < 2 ? this.renderNonMultipleMessage() : ''}
    </>;
  }
  render() {
    // Needs the capacity to add children.
    // Each child needs to come from a list of field configurations.
    return (
      <Dropzone onDrop={this.handleOnDrop.bind(this)}>
        <div>
          <button onClick={this.handleToggleNot.bind(this)}>Toggle NOT</button>
          <button onClick={this.handleToggleOperand.bind(this)}>Toggle AND/OR</button>
        </div>
        <div style={{ display: 'flex' }}>
          <HorizontalBar />
          <div style={{ display: 'flex', 'flex-direction': 'column', 'justify-content': 'center' }}><div style={{ padding: '5px', border: 'solid 1px black' }}>{ this.state.operand }{ this.state.not ? ' NOT' : '' }</div></div>
          { this.state.childModels.length > 0 ? this.renderChildren() : ''}
        </div>
        { this.state.childModels.length < 2 ? this.renderNonMultipleMessage() : ''}
      </Dropzone>
    );
  }
}
