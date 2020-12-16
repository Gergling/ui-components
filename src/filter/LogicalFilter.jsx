import React, { Component } from 'react';
import styled from 'styled-components';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import Nestable from 'react-nestable';

import serviceFactory from './filterServiceFactory';

import DateFilter from './DateFilter';
import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

const components = {
  date: DateFilter
};

// Field configurations:
// Quantifiable types can have the between filter
// Also need an equivalance filter
// Selection needs a pick-one filter.
// Multiselection...

// Field configuration input needs to include the field name and type of field fed with the "validation" parameters (e.g. selection requires all the available items)

function renderComponent(reactElementName, props, containerElement, callback) {
  const reactElement = React.createElement(components[reactElementName], props);
  ReactDOM.render(reactElement, containerElement, callback);
}

// Anything can be put in a logical filter, but it can only take one thing. It constitutes the root component.

/*
Ok so having used Nestable, I've found a number of features I need out of a possibly-more-generic library:

1. The ability to drag from a "static" item, which stays where it is. A "copy" if you will. In the current version I can overwrite the model so that the options are always replaced, but I think it would be better UX if they just stay there.
2. More control over where an item can be copied from and to. In the current version I can just overwrite the model if and item is in the wrong place, but I'd rather graphical restrict where it can go, since I don't want to move options around, just overwrite them.

*/

export default class LogicalFilter extends Component {
  constructor(props) {
    super(props);
    this.serviceInstance = serviceFactory();
    props.initialise(this.serviceInstance);
    this.state = {
      items: this.serviceInstance.fields
        .map(field => ({
          // type: field.type,
          type: 'any',
          label: field.label,
          name: field.name,
          id: `option-${field.type}-${field.name}`
        }))
    };
  }
  renderFieldOption(field) {
    return (
      <div>{field.label} ({field.type})</div>
    );
  }
  renderItem(item, idx) {
    console.log(item)
    return (
      <div>
        {item.item.label} ({item.item.type})
      </div>
    );
  }
  render() {
    return (
      <div>
        <DndProvider backend={HTML5Backend}>
          <div>The Logical Filter</div>
          <div>
            {this.state.items.map(field => (<DraggableItem name={field.name} type={field.type} label={field.label} />))}
          </div>
          <Dropzone />
        </DndProvider>
      </div>
    );
  }
}
