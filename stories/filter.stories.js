import React, { Component } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import LogicalFilter from '../src/filter/LogicalFilter';
import BetweenFilter from '../src/filter/BetweenFilter';

// TODO: IF you use a separate function non-initialisation updates, it will be a lot tidier.
function initialiseComplexNestedFilter(options) {
  options
    .addDate('dateOfBirth', 'Date of Birth')
    .addDate('dateOfDeath', 'Date of Death')
    .addBoolean('isAmbulatory', 'Ambulatory')
    // .addInteger('numberBrainsEaten', 'Total Brains Eaten')
    // .addInteger('numberLimbsRemaining', 'Total Limbs Remaining')
    // .addInteger('numberLimbsRemaining', 'Total Limbs Remaining')
    .addString('firstName', 'First Name')
    .addString('surName', 'Surname')
    .setUpdate(action('Service updated'))

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

const betweenFilterModel = {
  value: {
    start: new Date('2020-12-26'),
    end: new Date('2020-12-26')
  }
};

class Demo extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleInitialisation(service) {
    service
      .addDate('dateOfBirth', 'Date of Birth')
      .addDate('dateOfDeath', 'Date of Death')
      .addBoolean('isAmbulatory', 'Ambulatory')
      .addString('firstName', 'First Name')
      .addString('surName', 'Surname')
      .setUpdate(() => this.setState({ structure: service.root.getStructure() }));
  }
  render() {
    return (
      <>
        <LogicalFilter initialise={this.handleInitialisation.bind(this)} />
      </>
    );
  }
}

storiesOf('Filter', module)
  .add('Demo', () => <Demo />)
  .add('LogicalFilter', () => <LogicalFilter initialise={initialiseComplexNestedFilter} />)
  .add('BetweenFilter empty', () => <BetweenFilter onUpdate={action('Date updated')} />)
  .add('BetweenFilter empty date mode', () => <BetweenFilter mode='date' onUpdate={action('Date updated')} />)
  .add('BetweenFilter with a starting value', () => <BetweenFilter model={betweenFilterModel} onUpdate={action('Date updated')} />)
