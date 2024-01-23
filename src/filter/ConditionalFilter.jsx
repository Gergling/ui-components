import React, { Component } from 'react';
import styled from 'styled-components';

import serviceFactory from './filterServiceFactory';

import CancelButton from '../icons/Cancel';
import HorizontalBar from '../decoration/HorizontalBar';
import TreeList from '../decoration/TreeList';

import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

// Style the child conditions

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
  componentDidUpdate(props) {
    // The update function is presumed to be a FilterModel.prototype.setModel function.
    // props.onUpdate(this.state);
  }
  handleOnDrop(item) {
    const model = item.onDrop();
    // if (this.state.childModels.indexOf(model) === -1) {
    //   this.state.childModels.push(model);
    // }
    console.log(model)
    if (model.childModels.indexOf(model) === -1) {
      model.childModels.push(model);
    }
    props.onUpdate(model);
    // TODO: Instead of setting the state, update the model.
    // this.setState({
    //   childModels: this.state.childModels
    // });
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
  renderChild(child, key) {
    // TODO: Put the deletion at the left of the control.
    return (
      <ListItem key={key} spacing='10px'>
        <DraggableItem onDrop={() => child}>
          {child.createUIComponent()}
          <span onClick={this.handleChildRemoval.bind(this, child)}>
            <CancelButton />
          </span>
        </DraggableItem>
      </ListItem>
    );
  }
  renderDropzone() {
    return (
      <ListItem spacing="0">
        <Dropzone onDrop={this.handleOnDrop.bind(this)}>
          Drag things to here.
        </Dropzone>
      </ListItem>
    );
  }
  renderChildren() {
    return <TreeList>
      { this.state.childModels.map(this.renderChild.bind(this)) }
      { this.renderDropzone() }
    </TreeList>;
  }
  renderNonMultipleMessage() {
    return <div style={{color: 'black'}}>Drag multiple fields here to filter</div>;
  }
  render() {
    // Needs the capacity to add children.
    // Each child needs to come from a list of field configurations.
    return (
      <>
        <div>
          <button onClick={this.handleToggleNot.bind(this)}>Toggle NOT</button>
          <button onClick={this.handleToggleOperand.bind(this)}>Toggle AND/OR</button>
        </div>
        <div style={{ display: 'flex' }}>
          <HorizontalBar />
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}><div style={{ padding: '5px', border: 'solid 1px black' }}>{ this.state.operand }{ this.state.not ? ' NOT' : '' }</div></div>
          { this.renderChildren() }
        </div>
      </>
    );
  }
}
