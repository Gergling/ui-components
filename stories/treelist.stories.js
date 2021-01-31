import React from 'react';

import { storiesOf } from '@storybook/react';

import TreeList from '../src/decoration/TreeList';

storiesOf('TreeList', module)
  .add('with four children', () => (<TreeList>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </TreeList>))
  .add('with four irregular children', () => (<TreeList>
    <div>A if it was a bit longer</div>
    <div>B, but also<br/>E</div>
    <div>C</div>
    <div>D</div>
  </TreeList>))
  .add('with four children in a red tree', () => (<TreeList colour="#f00">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </TreeList>))
  .add('with four children and more space', () => (<TreeList spacing="10px">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </TreeList>))
  .add('with four children and thicker lines', () => (<TreeList thickness="3px">
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </TreeList>));
