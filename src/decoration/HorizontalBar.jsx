import React from 'react';
import styled from 'styled-components';

const HorizontalSpacer = styled.div`
  width: ${props => props.width};
  flex-grow: 1;
`;
HorizontalSpacer.defaultProps = { width: '5px' };

const HorizontalBar = styled(HorizontalSpacer)`
  border-style: solid;
  border-width: 0;
  border-top-width: ${props => props.thickness};
  border-color: ${props => props.colour};
`;
HorizontalBar.defaultProps = { colour: 'black', thickness: '1px' };

const HorizontalContainer = ({ width, colour, thickness }) => (
  <div style={{ display: 'flex', 'flex-direction': 'column' }}>
    <HorizontalSpacer width={width} />
    <HorizontalBar width={width} colour={colour} thickness={thickness} />
  </div>
);

export default HorizontalContainer;
