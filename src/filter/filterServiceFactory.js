// This needs to manage a structure of nestable filter constructs.

class FilterType {
  getStructure() {
    throw new Error('FilterType is an abstract class and getStructure must be overridden.');
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
}

// Checks whether a value constitutes empty or not
class FilterTypeEmpty extends FilterType {
  getStructure() {
    return {
      type: 'empty',
      empty: this._not
    }
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
  constructor(name, label, type) {
    this.name = name;
    this.label = label;
    this.type = type;
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
    this._fields.push(new Field(name, label, 'date'));
    return this;
  }
  addBoolean(name, label) {
    this._fields.push(new Field(name, label, 'boolean'));
    return this;
  }
  addString(name, label) {
    this._fields.push(new Field(name, label, 'string'));
    return this;
  }
  conditional() {
    return new FilterTypeConditional();
  }
  between() {
    return new FilterTypeBetween();
  }
  empty() {
    return new FilterTypeEmpty();
  }
}

const instantiate = () => new Instance;

export default instantiate;