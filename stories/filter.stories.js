import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogicalFilter from '../src/filter/LogicalFilter';

// TODO: IF you use a separate function non-initialisation updates, it will be a lot tidier.
function initialiseComplexNestedFilter(options) {
  // console.log(service.conditional())
  // return service
  //   .conditional()
  //   .setAndOperand()
  //   .addChild(service
  //     .between()
  //     .setStart('2020-01-01')
  //   );

  options
    .addDate('dateOfBirth', 'Date of Birth')
    .addDate('dateOfDeath', 'Date of Death')
    .addBoolean('isAmbulatory', 'Ambulatory')
    // .addInteger('numberBrainsEaten', 'Total Brains Eaten')
    // .addInteger('numberLimbsRemaining', 'Total Limbs Remaining')
    // .addInteger('numberLimbsRemaining', 'Total Limbs Remaining')
    .addString('firstName', 'First Name')
    .addString('surName', 'Surname')

  return {
    type: 'conditional',
    not: false,
    operand: 'AND',
    children: [
      {
        type: 'between',
        not: true,
        start: this._start,
        end: this._end
      },
      {
        type: 'empty',
        not: false
      }
    ]
  };
}

storiesOf('Filter', module)
  .add('Default filter', () => <LogicalFilter initialise={initialiseComplexNestedFilter} onUpdate={action('Date updated')} />)
