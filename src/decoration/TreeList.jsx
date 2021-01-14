import React, { Component } from 'react';
import styled from 'styled-components';

const ColumnContainer = styled.div`
  display: flex;
`;
const ListContainer = styled.ul`
  list-style: none;
`;
const ListItem = styled.li``;
const VerticalSpacer = styled.div`
  width: 0;
  height: 50%;
`;
const VerticalBar = styled(VerticalSpacer)`
  border-left: solid 1px black;
  width: 0;
  height: 50%;
`;
const VerticalCorner = styled(VerticalBar)`
  height: 1px;
`;

const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const HorizontalSpacer = styled.div`
  width: 5px;
  flex-grow: 1;
`;
const HorizontalBar = styled(HorizontalSpacer)`
  border-top: solid 1px black;
`;

class Brace extends Component {
  render() {
    return (
      <ColumnContainer>
        <div>
          {this.props.top ? <VerticalSpacer/> : <VerticalBar/>}
          {this.props.bottom ? <VerticalCorner/> : <VerticalBar/>}
        </div>
        <HorizontalContainer>
          <HorizontalSpacer/>
          <HorizontalBar/>
        </HorizontalContainer>
      </ColumnContainer>
    );
  }
}

export default class TreeList extends Component {
  renderChild(child, key, children) {
    const top = key === 0;
    const bottom = key === children.length - 1;
    return (
      <ListItem key={key}>
        <ColumnContainer>
          <Brace top={top} bottom={bottom} />
          <div>{child}</div>
        </ColumnContainer>
      </ListItem>
    );
  }
  render() {
    return (
      <ListContainer>
        {this.props.children.map(this.renderChild)}
      </ListContainer>
    );
  }
}
