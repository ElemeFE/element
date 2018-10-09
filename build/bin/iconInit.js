'use strict';

const sassExtract = require('sass-extract');
const fs = require('fs');
const path = require('path');
const fontFile = path.resolve(__dirname, '../../packages/theme-chalk/src/iconList.scss')


sassExtract.render({
  file: fontFile
})
.then(rendered => {
  let iconArray = []
  let icons = rendered.vars.global.$siagriIcons.value;
  Object.keys(icons).forEach((icon) => {
    iconArray.push(icon)
  })
  fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(iconArray), () => {});
})

/* var postcss = require('postcss');
var fs = require('fs');
var path = require('path');
var fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme-chalk/src/icon.scss'), 'utf8');
var nodes = postcss.parse(fontFile).nodes;
var classList = [];

nodes.forEach((node) => {
  var selector = node.selector || '';
  var reg = new RegExp(/\.siagri-icon-([^:]+):before/);
  var arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
}); */

// fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});
