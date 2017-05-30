var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.0.9': '1.0', '1.1.6': '1.1', '1.2.9': '1.2' };
if (!content[version]) content[version] = '1.3';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
