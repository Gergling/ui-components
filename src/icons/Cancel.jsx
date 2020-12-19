import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Span = styled.span`
  color: red;
`;

export default class LogicalFilter extends Component {
  render() {
    return (
      <Span style={this.props.style || {}}>
        <FontAwesomeIcon icon={faTimes} />
      </Span>
    );
  }
}
