import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import DelimitedTextInput from '../delimitedTextInput/DelimitedTextInput';

function initialise(service, creditCardNumberString) {
  const delimitations = 4;
  service
    .setDelimitations(delimitations)
    .setDelimiter('-')
    .setItemWidth(32);

  if (creditCardNumberString) {
    // Split number into 4-digit chunks. Truncate any spare.
    creditCardNumberString
      .split('')
      .reduce((quadrant, digit, idx) => {
        quadrant.push(digit);
        if ((idx + 1) % delimitations === 0) {
          const quadrantIDX = Math.floor(idx / 4);
          service.setItem(quadrant.join(''), quadrantIDX);
          quadrant = [];
        }
        return quadrant;
      }, [])
  }
}

function getCreditcardNumberStringFromService(service) {
  return Array
    .from({ length: service.getItems().length })
    .map((junk, idx) => service.getItems()[idx].value)
    .join('');
}

export default class DateTextInput extends Component {
  constructor(props) {
    super(props);
    if (typeof props.onUpdate !== 'function') {
      throw new Error('DateTextInput requires onUpdate(date) function');
    }
    if (props.value && typeof props.value !== 'string') {
      throw new Error('Invalid "date" parameter. Must be a Date object.');
    }
    this.state = {
      value: props.value
    };
  }
  handleUpdate(service, delta) {
    if (delta === 'initialise') {
      initialise(service, this.props.value);
    } else {
      const value = getCreditcardNumberStringFromService(service);
      this.props.onUpdate(value);
      this.setState({ value });
    }
  }
  render() {
    return (
      <DelimitedTextInput onUpdate={this.handleUpdate.bind(this)} />
    );
  }
}
