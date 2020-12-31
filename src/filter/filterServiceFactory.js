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
    return createElement(this.type.getUIComponentClass(), this.type.getUIComponentProperties(model => this.setValue(model.value)));
  }
}

function createElement(JSXClass, props) {
  return React.createElement(JSXClass, props);
}

// FilterType classes
// Instantiations of these are passed into UI components

// Handles filtering between two values
class FilterTypeBetween extends FilterType {
  setMode(mode) {
    this._mode = mode;
    return this;
  }
  get mode() {
    return this._mode;
  }
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
  getUIComponentClass() {
    return ConditionalFilter;
}

class Field {
  constructor(name, label, type, filterTypes) {
    this.name = name;
    this.label = label;
    this.type = type;
    this._filterTypes = filterTypes;
  }
  get filterTypes() {
    return this._filterTypes.map(filterTypeFactory => filterTypeFactory());
  }
}

class FieldCollection {
  constructor() {
    this._fields = [
      new Field('conditional', 'Conditional', 'conditional', [
        () => new FilterTypeBoolean(),
        () => new FilterTypeConditional(),
      ])
    ];
  }
  get fields() {
    return this._fields;
  }
  addDate(name, label) {
    this._fields.push(new Field(name, label, 'date', [
      () => new FilterTypeBoolean(),
      () => (new FilterTypeBetween()).setMode('date'),
    ]));
    return this;
  }
  addBoolean(name, label) {
    this._fields.push(new Field(name, label, 'boolean', [
      () => FilterTypeBoolean(),
    ]));
    return this;
  }
  addString(name, label) {
    this._fields.push(new Field(name, label, 'string', [
      () => FilterTypeString(),
      () => FilterTypeBoolean(),
    ]));
    return this;
  }
}

const instantiate = () => new FieldCollection;

export default instantiate;