var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'ElColorPicker'));

module.exports = cooking.resolve();
