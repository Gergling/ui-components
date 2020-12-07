class Service {
  constructor(delimiter, setState) {
    this._setState = setState;
    this.setDelimiter(delimiter);
    this._items = [];
  }
  getDelimiter() {
    return this._delimiter;
  }
  getItems() {
    return this._items;
  }
  setDelimiter(delimiter) {
    this._delimiter = delimiter;
    this._setState(this);
    return this;
  }
  setDelimitations(delimitations) {
    Array
      .from({ length: delimitations })
      .forEach((junk, idx) => this._items.push({ width: 24, idx }));
    this._setState(this);
    return this;
  }
  setItemWidth(width, idx) {
    if (typeof idx === 'undefined') {
      this._items.forEach(item => item.width = width);
    } else {
      if (idx < this._items.length) {
        this._items[idx].width = width;
      } else {
        this.setDelimitations(idx + 1);
        this.setItemWidth(width, idx);
      }
    }
    this._setState(this);
    return this;
  }
  setItem(value, idx) {
    if (typeof idx === 'undefined') {
      this._items.push({ width: 24, idx: this._items.length + 1, value });
    } else {
      if (idx < this._items.length) {
        this._items[idx].value = value;
      } else {
        this.setDelimitations(idx + 1);
        this.setItem(value, idx);
      }
    }
    this._setState(this);
    return this;
  }
}

const instantiate = (delimiter, setState) => new Service(delimiter, setState);

export default instantiate;
