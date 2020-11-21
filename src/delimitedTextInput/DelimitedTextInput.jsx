import React, { Component } from 'react';
import styled from 'styled-components';

import serviceFactory from './delimitedTextInputServiceFactory';

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

export default class DelimitedTextInput extends Component {
  constructor(props) {
    super(props);
    if (typeof props.onUpdate !== 'function') {
      throw new Error('DelimitedTextInput requires onUpdate(service, delta) function');
    }
    this.service = serviceFactory('-', service => {
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
