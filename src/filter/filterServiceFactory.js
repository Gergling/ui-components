// This needs to manage a structure of nestable filter constructs.

import React from 'react';

import BetweenFilter from './BetweenFilter';
import BooleanFilter from './BooleanFilter';
import StringFilter from './StringFilter';

class FilterType {
  getStructure() {
    throw new Error('FilterType is an abstract class and getStructure must be overridden.');
  }
  getUIComponent() {
    throw new Error('FilterType is an abstract class and getUIComponent must be overridden.');
  }
  setNot(not) {
    this._not = not;
    return this;
  }
}

// FilterType classes
// Instantiations of these are passed into UI components

// Handles filtering between two values
class FilterTypeBetween extends FilterType {
  setStart(start) {
    this._start = start;
    return this;
  }
  setEnd(end) {
    this._end = end;
    return this;
  }
  getStructure() {
    return {
      type: 'between',
      not: this._not,
      start: this._start,
      end: this._end
    };
  }
  getUIComponent() {
    return React.createElement(BetweenFilter);
  }
}

// Checks whether a value constitutes empty or not
class FilterTypeBoolean extends FilterType {
  getStructure() {
    return {
      type: 'empty',
      empty: this._not
    }
  }
  getUIComponent() {
    return React.createElement(BooleanFilter);
  }
}

// TODO: Also needs capacity to match partial strings.
class FilterTypeString extends FilterType {
  getStructure() {
    return {
      type: 'string',
      empty: this._not
    }
  }
  getUIComponent() {
    return React.createElement(StringFilter);
  }
}

class FilterTypeConditional extends FilterType {
  constructor() {
    super();
    this.setAndOperand();
    this._children = [];
  }
  setAndOperand() {
    this._operand = 'AND';
    return this;
  }
  setOrOperand() {
    this._operand = 'OR';
    return this;
  }
  addChild(filterType) {
    // Should always be passed a FilterType subclass
    this._children.push(filterType);
    return this;
  }
  getStructure() {
    return {
      type: 'conditional',
      not: this._not,
      operand: this._operand,
      children: this._children.map(filterType => filterType.getStructure())
    };
  }
}

const filterTypeMapping = {
  between: field => new FilterTypeBetween(field),
  string: field => new FilterTypeString(field),
  boolean: field => new FilterTypeBoolean(field),
};

class Field {
  constructor(name, label, type, filterTypes) {
    this.name = name;
    this.label = label;
    this.type = type;
    this._filterTypes = filterTypes;
  }
  get filterTypes() {
    return this._filterTypes.map(filterType => filterTypeMapping[filterType](this));
  }
}

class Instance {
  constructor() {
    this._fields = [];
  }
  get fields() {
    return this._fields;
  }
  addDate(name, label) {
    this._fields.push(new Field(name, label, 'date', [
      'between',
      'boolean',
    ]));
    return this;
  }
  addBoolean(name, label) {
    this._fields.push(new Field(name, label, 'boolean', [
      'boolean',
    ]));
    return this;
  }
  addString(name, label) {
    this._fields.push(new Field(name, label, 'string', [
      'string',
      'boolean',
    ]));
    return this;
  }
}

const instantiate = () => new Instance;

export default instantiate;