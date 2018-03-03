'use strict';

var fs = require('fs');
var path = require('path');
var uppercamelcase = require('uppercamelcase');
var render = require('json-templater/string');
var endOfLine = require('os').EOL;

var iconsPath = '../../packages/theme-chalk/src/icons';
var iconsDir = fs.readdirSync(path.resolve(__dirname, iconsPath));
var iconsList = [];
var importIconsList = [];
var exportIconsList = [];
var exportIconsTemplate = `{{importList}}

module.exports = {
{{exportList}}
};
`;

iconsDir.forEach(file => {
  // Collect icons name
  var fileName = file.replace('.svg', '');
  iconsList.push(fileName);
  // Preparing an import file
  var componentName = uppercamelcase(fileName);
  importIconsList.push(render('import {{name}} from \'' + iconsPath + '/{{icon}}.svg\';', {
    name: componentName,
    icon: fileName
  }));
  exportIconsList.push('  ' + componentName);
});

exportIconsTemplate = render(exportIconsTemplate, {
  importList: importIconsList.join(endOfLine),
  exportList: exportIconsList.join(',' + endOfLine)
});

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(iconsList));
fs.writeFile(path.resolve(__dirname, '../../packages/theme-chalk/icons.js'), exportIconsTemplate);
