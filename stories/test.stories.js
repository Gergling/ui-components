import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TestReactComponent from '../src/testComponentGroup/TestReactComponent';

storiesOf('TestReactComponent', module)
  .add('default', () => <TestReactComponent/>);
