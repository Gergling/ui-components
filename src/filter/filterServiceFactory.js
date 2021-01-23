// This needs to manage a structure of nestable filter constructs.

import React from 'react';

import BetweenFilter from './BetweenFilter';
import BooleanFilter from './BooleanFilter';
import StringFilter from './StringFilter';
import ConditionalFilter from './ConditionalFilter';

function createElement(JSXClass, props) {
  return React.createElement(JSXClass, props);
}

// Base class for types of filter.
class FilterType {
  get field() {
    return this._field;
  }
  setField(field) {
    this._field = field;
    return this;
  }
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
  createModel(onUpdate) {
    return new FilterModel(this, onUpdate);
  }
  updateCollection(model) {
    this.field.updateCollection(model);
  }
}

// Model object which supplies the capacity to modify the value and generate the UI Component.
class FilterModel {
  constructor(type, onUpdate) {
    this._type = type;
    this._onUpdate = onUpdate || (() => {});
  }
  get type() {
    return this._type;
  }
  get value() {
    return this._value;
  }
  getStructure() {
    return this.type.getStructure(this.value || {});
  }
  updateCollection() {
    this.type.updateCollection(this);
  }
  setValue(value) {
    this._value = value;
    this.updateCollection();
    return this;
  }
  createUIComponent() {
    return createElement(this.type.getUIComponentClass(), this.type.getUIComponentProperties(this.setValue.bind(this)));
  }
}

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
  getStructure(value) {
    return {
      type: 'between',
      not: value.not,
      start: value.start,
      end: value.end
    };
  }
  getUIComponentClass() {
    return BetweenFilter;
  }
  getUIComponentProperties(onUpdate) {
    return {
      mode: this.mode,
      onUpdate
    };
  }
}

// For handling simple on/off logic.
class FilterTypeBoolean extends FilterType {
  getStructure(value) {
    return {
      type: 'boolean',
      state: value.state
    }
  }
  getUIComponentClass() {
    return BooleanFilter;
  }
  getUIComponentProperties(onUpdate) {
    return { onUpdate };
  }
}

// For matching string data.
class FilterTypeString extends FilterType {
  getStructure(value) {
    return {
      type: 'string',
      empty: value.not,
      start: value.start,
      end: value.end
    }
  }
  getUIComponentClass() {
    return StringFilter;
  }
  getUIComponentProperties(onUpdate) {
    return { onUpdate };
  }
}

// For nesting conditional data.
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
  getStructure(value) {
    return {
      type: 'conditional',
      not: value.not,
      operand: value.operand,
      children: (value.childModels || []).map(child => child.getStructure())
    };
  }
  getUIComponentClass() {
    return ConditionalFilter;
  }
  getUIComponentProperties(onUpdate) {
    return { onUpdate };
  }
}

// Handles field configurations.
class Field {
  constructor(name, label, type, filterTypes, fieldCollection) {
    this.name = name;
    this.label = label;
    this.type = type;
    this._filterTypes = filterTypes;
    this._fieldCollection = fieldCollection;
  }
  get filterTypes() {
    return this._filterTypes.map(filterTypeFactory => filterTypeFactory().setField(this));
  }
  updateCollection(model) {
    this._fieldCollection.update(model);
  }
}

// Handles the root model and all possible field configurations.
class FieldCollection {
  constructor() {
    this._fields = [
      new Field('conditional', 'Conditional', 'conditional', [
        () => new FilterTypeBoolean(),
        () => new FilterTypeConditional(),
      ], this)
    ];
    this._onUpdate = () => {};
  }
  get fields() {
    return this._fields;
  }
  update(model) {
    // TODO: Indicate when the root is being deleted.
    // Requires a separate function.
    if (!this._root) {
      this._root = model;
    }
    this._onUpdate();
    return this;
  }
  get root() {
    return this._root;
  }
  setUpdate(fnc) {
    this._onUpdate = fnc;
    return this;
  }
  addDate(name, label) {
    this._fields.push(new Field(name, label, 'date', [
      () => (new FilterTypeBetween()).setMode('date'),
    ], this));
    return this;
  }
  addBoolean(name, label) {
    this._fields.push(new Field(name, label, 'boolean', [
      () => new FilterTypeBoolean(),
    ], this));
    return this;
  }
  addString(name, label) {
    this._fields.push(new Field(name, label, 'string', [
      () => new FilterTypeString(),
    ], this));
    return this;
  }
  addNumber(name, label) {
    this._fields.push(new Field(name, label, 'number', [
      () => new FilterTypeBetween(),
    ], this));
    return this;
  }
}

const instantiate = () => new FieldCollection;

export default instantiate;