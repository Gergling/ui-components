// This is needed to solve the problem of selecting only one dropzone, and which one we are selecting when we hover over it.
// So, which dropzone are we selecting?
// If there is more than one dropzone being hovered, it won't be the root.
// If there are multiple conditional dropzones, figure out which one is within which.
// Consider connecting the model to a depth or something?
// OR
// Each model calls a parent which disables the ancestor from being selectable.
// That callback is implemented by accepting a prop.

// Immutable object for fun

// A reducer.
const add = (state, value) => {
  state.things.push(value);
  return createImmutable(state);
};

const set = (state, value) => {
  state.stuff = value;
  return createImmutable(state);
};

const createImmutable = state => {
  const immutable = {
    add: value => add(state, value),
    set: value => set(state, value),
    getPrevious: step => state.history[state.history.length - 1 - step],
    get: () => state.things.join(', ') + state.stuff,
  };

  state = {
    stuff: 1,
    things: [],
    ...state,
    history: (state.history ? [ ...state.history, immutable ] : [])
  };

  return immutable;
};

const obj = createImmutable()
  .add({ x: 1, y: 2 })
  .set(3);

const objWithXYZ = obj.add({ x: 3, y: 4, z: 5 });
