import React, { Component } from 'react';
import styled from 'styled-components';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import Nestable from 'react-nestable';

import serviceFactory from './filterServiceFactory';

import CancelButtonBase from '../icons/Cancel';
import GripIcon from '../icons/Grip';

import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

// Field configurations:
// Quantifiable types can have the between filter
// Also need an equivalance filter
// Selection needs a pick-one filter.
// Multiselection...

// Field configuration input needs to include the field name and type of field fed with the "validation" parameters (e.g. selection requires all the available items)

// Anything can be put in a logical filter, but it can only take one thing. It constitutes the root component.

/*
Ok so having used Nestable, I've found a number of features I need out of a possibly-more-generic library:

1. The ability to drag from a "static" item, which stays where it is. A "copy" if you will. In the current version I can overwrite the model so that the options are always replaced, but I think it would be better UX if they just stay there.
2. More control over where an item can be copied from and to. In the current version I can just overwrite the model if and item is in the wrong place, but I'd rather graphical restrict where it can go, since I don't want to move options around, just overwrite them.

*/

const Section = styled.div`
  padding: 20px;
  border: solid 1px grey;
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
`;

const InlineList = styled.ul`
  list-style: none;
  padding: 0;
`;

const CancelButton = styled(CancelButtonBase)`
  margin-left: 3px;
`;

export default class LogicalFilter extends Component {
  constructor(props) {
    super(props);
    this.serviceInstance = serviceFactory()
      // TODO: The service should update the state when the current model is updated.
      .setUpdate(() => {
        if (this.serviceInstance.root) {
          console.log('root update:', this.serviceInstance.root.getStructure())
          // this.setState({ rootModel: this.serviceInstance.root });
          // this.setFilterModel(this.serviceInstance.root);
        }
      });
    props.initialise(this.serviceInstance);
    this.state = {
      // Temporary
      selectedField: this.serviceInstance.fields[0]
      // rootModel:
    };
  }
  setFilterModel(rootModel) {
    this.setState({ rootModel });
  }
  handleDraggableOnDrop(filterType) {
    // TODO: Assign the model to the service root
    return filterType.createModel();
  }
  handleDropzoneOnDrop(item) {
    // This gets passed the item from DraggableItem, so maybe DraggableItem should be passed a model?
    // console.log(item.onDrop())
    // TODO: Update the service.
    this.setFilterModel(item.onDrop());
    // this.serviceInstance.setRoot(item.onDrop());
  }
  handleSelectField(field) {
    this.setState({
      selectedField: field
    });
  }
  renderFilter() {
    const filterModel = this.state.rootModel;
    const onDrop = () => filterModel;
    return (
      <DraggableItem onDrop={onDrop}>
        {filterModel.createUIComponent()}
        <span onClick={this.setFilterModel.bind(this, undefined)}>
          <CancelButton />
        </span>
      </DraggableItem>
    );
  }
  renderFilterListitem(filterType) {
    const styleDraggable = {
      marginRight: '1.5rem',
      marginBottom: '1.5rem',
      float: 'left',
    };
    const styleGripIcon = {
      marginRight: '3px'
    };
    return (
      <li>
        <DraggableItem style={styleDraggable} onDrop={this.handleDraggableOnDrop.bind(this, filterType)}>
          <GripIcon style={styleGripIcon} />
          {filterType.constructor.name}
        </DraggableItem>
      </li>
    );
  }
  renderSelectedField() {
    const field = this.state.selectedField;
    return (
      <>
        <span>
          {field.type}: {field.label}
        </span>

        <span onClick={this.handleSelectField.bind(this, undefined)}>
          <CancelButton />
        </span>
      </>
    );
  }
  renderFieldItem(field, key) {
    return (
      <li key={key} onClick={this.handleSelectField.bind(this, field)}>
        {field.type}: {field.label}
      </li>
    );
  }
  renderFieldList() {
    return (
      <>
        <div>Select a field to filter</div>
        <InlineList>
          {this.serviceInstance.fields.map(this.renderFieldItem.bind(this))}
        </InlineList>
      </>
    );
  }
  renderFields() {
    return this.state.selectedField ? this.renderSelectedField() : this.renderFieldList();
  }
  renderSelectedFieldOptions() {
    return (
      <Section>
        <InlineList>
          {this.state.selectedField.filterTypes.map(this.renderFilterListitem.bind(this))}
        </InlineList>
      </Section>
    );
  }
  render() {
    console.log('Root rendered')
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <div>The Logical Filter</div>
          <Section>
            {this.renderFields()}
          </Section>
          {this.state.selectedField ? this.renderSelectedFieldOptions() : ''}
          <Section>
            <Dropzone onDrop={this.handleDropzoneOnDrop.bind(this)}>{ this.state.rootModel ? this.renderFilter() : <div style={{color: 'black'}}>Drag fields here to filter</div> }</Dropzone>
          </Section>
        </DndProvider>
      </div>
    );
  }
}
