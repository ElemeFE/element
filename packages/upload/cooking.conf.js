var cooking = require('cooking');
var gen = require('../../build/gen-single-config');

cooking.set(gen(__dirname, 'TmUpload'));

module.exports = cooking.resolve();
