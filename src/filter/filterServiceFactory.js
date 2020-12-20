// This needs to manage a structure of nestable filter constructs.

import React from 'react';

import BetweenFilter from './BetweenFilter';
import BooleanFilter from './BooleanFilter';
import StringFilter from './StringFilter';

class FilterType {
  // TODO: Decide whether this is relevant anymore, since the component will choose the structure.
  getStructure() {
    throw new Error('FilterType is an abstract class and getStructure must be overridden.');
  }
  getUIComponent() {
    throw new Error('FilterType is an abstract class and getUIComponentClass must be overridden.');
  }
  setNot(not) {
    this._not = not;
    return this;
  }
  createModel() {
    return new FilterModel(this);
  }
}

class FilterModel {
  constructor(type) {
    this._type = type;
  }
  get type() {
    return this._type;
  }
  get value() {
    return this._value;
  }
  setValue(value) {
    this._value = value;
    return this;
  }
  createUIComponent() {
    console.log('creating component for', this.type)
    return createElement(this.type.getUIComponentClass(), this);
  }
}

function createElement(JSXClass, model) {
  return React.createElement(JSXClass, { model });
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
  getUIComponentClass() {
    return BetweenFilter;
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
  getUIComponentClass() {
    return BooleanFilter;
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
  getUIComponentClass() {
    return StringFilter;
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

class Field {
  constructor(name, label, type, filterTypes) {
    this.name = name;
    this.label = label;
    this.type = type;
    this._filterTypes = filterTypes;
  }
  get filterTypes() {
    return this._filterTypes.map(filterType => new filterType.type(this, filterType.label));
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
      { type: FilterTypeBoolean, label: 'not' },
      { type: FilterTypeBetween, label: 'between two dates' },
    ]));
    return this;
  }
  addBoolean(name, label) {
    this._fields.push(new Field(name, label, 'boolean', [
      { type: FilterTypeBoolean, label: 'match' },
    ]));
    return this;
  }
  addString(name, label) {
    this._fields.push(new Field(name, label, 'string', [
      { type: FilterTypeString, label: 'match' },
      { type: FilterTypeBoolean, label: 'not' },
    ]));
    return this;
  }
}

const instantiate = () => new Instance;

export default instantiate;