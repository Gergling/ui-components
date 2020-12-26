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
  jump(idx) {
    const next = this.childInputRefs[idx];
    if (next) {
      next.select();
    }
    this.setState({ readyToJump: false });
  }
  componentDidMount() {
    this.props.onUpdate(this.service, 'initialise');
  }
  handleChange(value, idx) {
    this.service.setItem(value, idx);
    this.props.onUpdate(this.service, 'change');
  }
  handleKeyDown(idx) {
    const target = this.childInputRefs[idx];
    const selection = target.selectionStart !== target.selectionEnd;
    this.setState({ selection });
  }
  handleKeyUp(e, idx) {
    const readyToJump = this.state.readyToJump;
    const target = this.childInputRefs[idx];
    if (readyToJump) {
      if (readyToJump === 'left' && e.code === "ArrowLeft") {
        this.jump(idx - 1);
      } else if (readyToJump === 'right' && e.code === "ArrowRight") {
        this.jump(idx + 1);
      }
    } else {
      if (!this.state.selection) {
        // If the current cursor position is not a selection.
        if (e.code === "ArrowLeft" && target.selectionStart === 0 && idx - 1 >= 0) {
          // If the left arrow has been pressed
          // And the cursor position is 0
          // And the next text field to the left exists
          this.setState({ readyToJump: 'left' });
        } else if (e.code === "ArrowRight" && target.selectionStart === target.value.length && idx + 1 < this.service.getItems().length) {
          // If the right arrow has been pressed
          // And the cursor position is the length of the contents
          // And the next text field to the right exists
          this.setState({ readyToJump: 'right' });
        }
      }
    }
  }
  handleInputReference(inputElement) {
    if (inputElement) {
      this.childInputRefs.push(inputElement);
    }
  }
  renderItem(item, idx) {
    return (
      <span key={idx}>
        { idx === 0 ? '' : this.renderDelimiter() }
        <Input
          className="delimitedTextInput__input"
          type="text"
          value={item.value}
          style={{ width: `${item.width}px` }}
          onChange={e => this.handleChange(e.target.value, idx)}
          onKeyUp={e => this.handleKeyUp(e, idx)}
          onKeyDown={() => this.handleKeyDown(idx)}
          ref={this.handleInputReference.bind(this)}
        />
      </span>
    );
  }
  renderDelimiter() {
    return (<span className="delimitedTextInput__delimiter">{this.state.delimiter}</span>);
  }
  render() {
    this.childInputRefs = [];
    return (
      <Container className="delimitedTextInput__container">
        {
          this.state.items.map(this.renderItem.bind(this))
        }
      </Container>
    );
  }
}
