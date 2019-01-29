'use strict';

const fs = require('fs');
const path = require('path');
const uppercamelcase = require('uppercamelcase');
const render = require('json-templater/string');
const endOfLine = require('os').EOL;

const iconsPath = '../../packages/theme-chalk/src/icons';
const iconsDir = fs.readdirSync(path.resolve(__dirname, iconsPath));

let iconsList = [];
let importIconsList = [];
let exportIconsList = [];
let exportIconsTemplate = `{{importList}}

module.exports = {
{{exportList}}
};
`;

iconsDir.forEach(file => {
  // Collect icons name
  let fileName = file.replace('.svg', '');
  iconsList.push(fileName);
  // Preparing an import file
  let componentName = uppercamelcase(fileName);
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

fs.writeFile(
  path.resolve(__dirname, '../../examples/icon.json'),
  JSON.stringify(iconsList),
  error => {
    if (error) console.error(error);
  }
);
fs.writeFile(
  path.resolve(__dirname, '../../packages/theme-chalk/icons.js'),
  exportIconsTemplate,
  error => {
    if (error) console.error(error);
  }
);
