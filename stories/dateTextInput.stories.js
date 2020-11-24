import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DateTextInput from '../src/dateTextInput/DateTextInput';

storiesOf('DateTextInput', module)
  .add('Default format', () => <DateTextInput onUpdate={action('Date updated')} />)
  .add('DMY format', () => <DateTextInput format="DMY" onUpdate={action('Date updated')} />)
  .add('MDY format', () => <DateTextInput format="MDY" onUpdate={action('Date updated')} />)
  .add('ISO format', () => <DateTextInput format="ISO" onUpdate={action('Date updated')} />)
