var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'ElTable', '_index.js'));

module.exports = cooking.resolve();
