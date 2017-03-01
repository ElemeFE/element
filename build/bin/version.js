var fs = require('fs');
var path = require('path');
var version = process.env.VERSION || require('../../package.json').version;
var content = { '1.0.9': '1.0', '1.1.6': '1.1' };
if (!content[version]) content[version] = '1.2';
fs.writeFileSync(path.resolve(__dirname, '../../examples/versions.json'), JSON.stringify(content));
