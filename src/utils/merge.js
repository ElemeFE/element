import { hasOwn } from './util';

/**
 * @param {object} target
 * @param {object[]} sources
 */
export default function merge(target, ...sources) {
  for (let i = 0; i < sources.length; i++) {
    let source = sources[i];
    if (!source || typeof source !== 'object') continue;

    for (let prop in source) {
      if (hasOwn(source, prop)) {
        let value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
}
