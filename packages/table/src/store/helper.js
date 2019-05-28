import Store from './index';
let id = 0;

export function createStore(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }

  const store = new Store();
  store.table = table;
  store.id = id++;
  Object.keys(initialState).forEach(key => {
    store.states[key] = initialState[key];
  });
  Object.keys(store.modifiers).forEach(key => {
    store.modifiers[key] = store.modifiers[key].bind(store);
  });
  // Object.keys(store.modifiers).forEach(key => {
  //   store.modifiers[key] = store.modifiers[key].bind(store);
  // });
  return store;
}

export function mapStates(mapper) {
  const res = {};
  Object.keys(mapper).forEach(key => {
    const value = mapper[key];
    let fn;
    if (typeof value === 'string') {
      fn = function() {
        return this.store.states[value];
      };
    } else if (typeof value === 'function') {
      fn = function() {
        return value.call(this, this.store.states);
      };
    } else {
      console.error('invalid value type');
    }
    if (fn) {
      res[key] = fn;
    }
  });
  return res;
};
