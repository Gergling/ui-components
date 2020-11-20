import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import DelimitedTextInput from '../src/delimitedTextInput/DelimitedTextInput';

// Meant to be kept outside the component
function onUpdate(service, delta) {
  if (delta === 'initialise') {
    service
      .setDelimiter('/')
      .setItem(28)
      .setItem(12)
      .setItem(1985)
      .setItemWidth(16)
      .setItemWidth(32, 2)
  }
}

storiesOf('DelimitedTextInput', module)
  .add('default', () => <DelimitedTextInput onUpdate={onUpdate} />);
