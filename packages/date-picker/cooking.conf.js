var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'ElDatePicker', '_index.js'));

module.exports = cooking.resolve();
