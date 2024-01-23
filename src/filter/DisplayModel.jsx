import React, { Component } from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

// import Nestable from 'react-nestable';

import serviceFactory from './filterServiceFactory';

import CancelButtonBase from '../icons/Cancel';

import { Dropzone } from './Dropzone';
import { DraggableItem } from './DraggableItem';

export default class DisplayModel extends Component {
  constructor(props) {
    super(props);
    props.initialise(serviceInstance => this.setState({ rootModel: serviceInstance.root }));
  }
  render() {
    return (
      <pre>
        {this.state.rootModel.getStructure()}
      </pre>
    );
  }
}
