import Store from './index';

export function createStore(table, initialState = {}) {
  if (!table) {
    throw new Error('Table is required.');
  }

  const store = new Store();
  store.table = table;
  Object.keys(initialState).forEach(key => {
    store.states[key] = initialState[key];
  });
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
