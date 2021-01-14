import React from 'react';

import { storiesOf } from '@storybook/react';

import TreeList from '../src/decoration/TreeList';

storiesOf('TreeList', module)
  .add('with four children', () => (<TreeList>
    <div>A</div>
    <div>B</div>
    <div>C</div>
    <div>D</div>
  </TreeList>));
