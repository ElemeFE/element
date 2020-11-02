var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.4.13': '1.4', '2.0.11': '2.0', '2.1.0': '2.1', '2.2.2': '2.2', '2.3.9': '2.3', '2.4.11': '2.4', '2.5.4': '2.5', '2.6.3': '2.6', '2.7.2': '2.7', '2.8.2': '2.8', '2.9.2': '2.9', '2.10.1': '2.10', '2.11.1': '2.11', '2.12.0': '2.12', '2.13.2': '2.13' };
if (!content[version]) content[version] = '2.14';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
