const path = require('path');

try {
  process.env.VUE_ENV = 'server';
  require(path.join(process.env.PWD, './lib/index'));
  console.log('SSR require test PASS');
} catch (e) {
  console.error('SSR require test error');
  throw Error(e);
}
