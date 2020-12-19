import React, { Component } from 'react';
import styled from 'styled-components';

import serviceFactory from './filterServiceFactory';

// import DateFilter from './DateFilter';

// In theory we could use a logical filter here, which ofc can take any filter itself.

export default class ConditionalFilter extends Component {
  render() {
    // Needs the capacity to add children.
    // Each child needs to come from a list of field configurations.
    return (
      <div>
        <div>(Field name)</div>
        <div>(Operand)</div>
        <div>(Children)</div>
      </div>
    );
  }
}
