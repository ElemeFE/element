var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'TmLoading'));

module.exports = cooking.resolve();
