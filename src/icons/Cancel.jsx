import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Span = styled.span`
  color: red;
`;

export default ({ style }) => <Span style={style || {}}><FontAwesomeIcon icon={faTimes} /></Span>
