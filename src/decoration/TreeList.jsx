import React, { Component } from 'react';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
`;
const ListContainer = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li``;
const VerticalSpacer = styled.div`
  width: 0;
  height: 50%;
`;
const VerticalBar = styled(VerticalSpacer)`
  border-style: solid;
  border-width: 0;
  border-left-width: ${props => props.thickness};
  border-color: ${props => props.colour};
  width: 0;
  height: 50%;
`;
VerticalBar.defaultProps = { colour: 'black', thickness: '1px' };

const VerticalCorner = styled(VerticalBar)`
  /* height: ${props => props.thickness}; */
  height: 1px;
`;

const HorizontalContainer = ({ width, colour, thickness }) => (
  <div style={{ display: 'flex', 'flex-direction': 'column' }}>
    <HorizontalSpacer width={width} />
    <HorizontalBar width={width} colour={colour} thickness={thickness} />
  </div>
);
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

class Brace extends Component {
  renderVerticalBar() {
    return <VerticalBar colour={this.props.colour} thickness={this.props.thickness} />;
  }
  render() {
    return (
      <ColumnContainer>
        <div>
          {this.props.top ? <VerticalSpacer/> : this.renderVerticalBar()}
          {this.props.bottom ? <VerticalCorner colour={this.props.colour} thickness={this.props.thickness} /> : this.renderVerticalBar()}
        </div>
        <HorizontalContainer colour={this.props.colour} width={this.props.width} thickness={this.props.thickness} />
      </ColumnContainer>
    );
  }
}

// TODO: Needs props implemented.
export default class TreeList extends Component {
  getHorizontalSpacerWidth() {
    return this.props.spacing;
  }
  getColour() {
    return this.props.colour;
  }
  getThickness() {
    return this.props.thickness;
  }
  renderChild(child, key, children) {
    const top = key === 0;
    const bottom = key === children.length - 1;
    return (
      <ListItem key={key}>
        <ColumnContainer>
          <Brace top={top} bottom={bottom} colour={this.getColour()} thickness={this.getThickness()} />
          <div>{child}</div>
        </ColumnContainer>
      </ListItem>
    );
  }
  render() {
    return (
      <ColumnContainer>
        <HorizontalContainer colour={this.getColour()} width={this.getHorizontalSpacerWidth()} thickness={this.getThickness()} />
        <ListContainer>
          {this.props.children.map(this.renderChild.bind(this))}
        </ListContainer>
      </ColumnContainer>
    );
  }
}
