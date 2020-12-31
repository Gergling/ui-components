import React, { Component } from 'react';
import styled from 'styled-components';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import Nestable from 'react-nestable';

import serviceFactory from './filterServiceFactory';

import CancelButtonBase from '../icons/Cancel';

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
    this.serviceInstance = serviceFactory();
    props.initialise(this.serviceInstance);
    this.state = {
      // Temporary
      selectedField: this.serviceInstance.fields[0]
      // rootModel:
    };
  }
  setFilterModel(rootModel) {
    this.serviceInstance.root = rootModel;
    this.setState({ rootModel });
  }
  handleDraggableOnDrop(filterType) {
    return filterType.createModel();
  }
  handleDropzoneOnDrop(item) {
    this.setFilterModel(item.onDrop());
  }
  handleSelectField(field) {
    this.setState({
      selectedField: field
    });
  }
  renderFilter() {
    const filterModel = this.state.rootModel;
    return (
      <DraggableItem onDrop={() => filterModel}>
        {filterModel.createUIComponent()}
        <span onClick={this.setFilterModel.bind(this, undefined)}>
          <CancelButton />
        </span>
      </DraggableItem>
    );
  }
  renderFilterListitem(filterModel) {
    return (
      <li>
        <DraggableItem onDrop={this.handleDraggableOnDrop.bind(this, filterModel)}>
          {filterModel.constructor.name}
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
  renderFieldItem(field) {
    return (
      <li onClick={this.handleSelectField.bind(this, field)}>
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
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <div>The Logical Filter</div>
          <Section>
            {this.renderFields()}
          </Section>
          {this.state.selectedField ? this.renderSelectedFieldOptions() : ''}
          <Section>
            <Dropzone onDrop={this.handleDropzoneOnDrop.bind(this)}>{ this.state.rootModel ? this.renderFilter() : 'Show me everything, filter nothing' }</Dropzone>
          </Section>
        </DndProvider>
      </div>
    );
  }
}
