var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'ElSelect', '_index.js'));

module.exports = cooking.resolve();
