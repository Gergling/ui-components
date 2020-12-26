import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

import DelimitedTextInput from '../delimitedTextInput/DelimitedTextInput';

function getDate(day, month, year) {
  const date = new Date(year, month - 1, day);
  return date.getDate() === day * 1 && date.getMonth() === month - 1 && date.getFullYear() === year * 1 ? date : undefined;
}

function getFormatIDX(format) {
  const idx = {
    month: 1,
    year: 2
  };
  switch (format) {
    case 'DMY':
      idx.day = 0;
    break;
    case 'MDY':
      idx.day = 1;
      idx.month = 0;
    break;
    case 'ISO':
      idx.year = 0;
      idx.day = 2;
    break;
  }
  return idx;
}

function getDateFromService(service, format) {
  const idx   = getFormatIDX(format);
  const items = service.getItems();
  const day   = items[idx.day].value;
  const month = items[idx.month].value;
  const year  = items[idx.year].value;
  return getDate(day, month, year);
}

function initialise(service, format, date) {
  const idx = getFormatIDX(format);
  service
    .setDelimitations(3)
    .setDelimiter('/')
    .setItemWidth(16)
    .setItemWidth(32, idx.year);

  if (date) {
    service
      .setItem(date.getDate(), idx.day)
      .setItem(date.getMonth() + 1, idx.month)
      .setItem(date.getFullYear(), idx.year);
  }
}

export default class DateTextInput extends Component {
  constructor(props) {
    super(props);
    this.format = 'DMY';
    if (typeof props.onUpdate !== 'function') {
      throw new Error('DateTextInput requires onUpdate(date) function');
    }
    if (props.format) {
      if (typeof props.format !== 'string' && ['DMY', 'MDY', 'ISO'].indexOf(props.format) === -1) {
        throw new Error('Invalid format. Must be one of "DMY", "MDY" and "ISO".');
      } else {
        this.format = props.format;
      }
    }
    if (props.date && (typeof props.date === 'object' || (typeof props.date === 'object' && props.date.constructor !== Date))) {
      throw new Error('Invalid "date" parameter. Must be a Date object.');
    }
    this.state = {
      date: props.date
    };
  }
  handleUpdate(service, delta) {
    if (delta === 'initialise') {
      initialise(service, this.format, this.props.date);
    } else {
      const date = getDateFromService(service, this.format);
      this.props.onUpdate(date);
      this.setState({ date });
    }
  }
  render() {
    return (
      <DelimitedTextInput onUpdate={this.handleUpdate.bind(this)} />
    );
  }
}
