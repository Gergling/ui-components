import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CreditCardNumberInput from '../src/creditCardNumberInput/CreditCardNumberInput';

storiesOf('CreditCardNumberInput', module)
  .add('empty', () => <CreditCardNumberInput onUpdate={action('CC number updated')} />)
  .add('preset', () => <CreditCardNumberInput onUpdate={action('CC number updated')} value="0123456789101112" />);
