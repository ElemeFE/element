'use strict';

const sassExtract = require('sass-extract');
const fs = require('fs');
const path = require('path');
const fontFile = path.resolve(__dirname, '../../packages/theme-chalk/src/iconList.scss');

sassExtract.render({
  file: fontFile
}).then(rendered => {
  let iconArray = [];
  let icons = rendered.vars.global.$siagriIcons.value;
  Object.keys(icons).forEach((icon) => {
    iconArray.push(icon);
  });
  fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(iconArray), () => {});
});
