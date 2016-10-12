var fs = require('fs');
var path = require('path');
var Components = require('../../components.json');
var THEMES = [
  'theme-default'
];
var BASEPATH = path.resolve(__dirname, '../../packages/');
Components = Object.keys(Components);

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
};

THEMES.forEach(function(theme) {
  Components.forEach(function(key) {
    var fileName = key + '.css';
    var filePath = path.resolve(BASEPATH, theme, 'src', fileName);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(theme, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
});
