import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Cancel from '../src/icons/Cancel';
import Grip from '../src/icons/Grip';

storiesOf('Icons', module)
  .add('Grip', () => <Grip/>)
  .add('Cancel', () => <Cancel/>);
