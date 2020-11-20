import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  border: solid 1px grey;
  display: inline-block;
`;

const Input = styled.input`
  border: none;
  min-width: 20px;
  outline: none;
  margin: 0;
  padding: 0;
  text-align: center;
`;

class Service {
  constructor(delimiter, setState) {
    this._setState = setState;
    this.setDelimiter(delimiter);
    this._items = [];
  }
  getDelimiter() {
    return this._delimiter;
  }
  getItems() {
    return this._items;
  }
  setDelimiter(delimiter) {
    this._delimiter = delimiter;
    this._setState(this);
    return this;
  }
  setDelimitations(delimitations) {
    Array
      .from({ length: delimitations })
      .forEach((junk, idx) => this._items.push({ width: 24, idx }));
    this._setState(this);
    return this;
  }
  setItemWidth(width, idx) {
    if (typeof idx === 'undefined') {
      this._items.forEach(item => item.width = width);
    } else {
      if (idx < this._items.length) {
        this._items[idx].width = width;
      } else {
        this.setDelimitations(idx + 1);
        this.setItemWidth(width, idx);
      }
    }
    this._setState(this);
    return this;
  }
  setItem(value, idx) {
    console.log(value, idx)
    if (typeof idx === 'undefined') {
      this._items.push({ width: 24, idx: this._items.length + 1, value });
    } else {
      if (idx < this._items.length) {
        this._items[idx].value = value;
      } else {
        this.setDelimitations(idx + 1);
        this.setItem(value, idx);
      }
    }
    this._setState(this);
    return this;
  }
}

export default class DelimitedTextInput extends Component {
  constructor(props) {
    super(props);
    if (typeof props.onUpdate !== 'function') {
      throw new Error('DelimitedTextInput requires onUpdate(service, delta) function');
    }
    this.service = new Service('-', service => {
      this.setState({
        items    : service.getItems(),
        delimiter: service.getDelimiter()
      });
    });
    this.state = {
      items    : [],
      delimiter: '-'
    };
  }
  componentDidMount() {
    this.props.onUpdate(this.service, 'initialise');
  }
  handleChange(value, idx) {
    this.service.setItem(value, idx);
    this.props.onUpdate(this.service, 'change');
  }
  renderItem(item, idx) {
    return (
      <>
        { idx === 0 ? '' : this.renderDelimiter() }
        <Input className="delimitedTextInput__input" value={item.value} style={{ width: `${item.width}px` }} onChange={e => this.handleChange(e.target.value, idx)} />
      </>
    );
  }
  renderDelimiter() {
    return (<span className="delimitedTextInput__delimiter">{this.state.delimiter}</span>);
  }
  render() {
    return (
      <Container className="delimitedTextInput__container">
        {
          this.state.items.map(this.renderItem.bind(this))
        }
      </Container>
    );
  }
}
