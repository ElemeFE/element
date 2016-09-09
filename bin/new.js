'use strict';

console.log();
process.on('exit', () => {
  console.log();
});

if (!process.argv[2]) {
  console.error('[组件名]必填.');
  process.exit(1);
}

const path = require('path');
const fileSave = require('file-save');
const uppercamelcase = require('uppercamelcase');
const componentname = process.argv[2];
const chineseName = process.argv[3] || componentname;
const ComponentName = uppercamelcase(componentname);
const PackagePath = path.resolve(__dirname, '../packages', componentname);
const Files = [
  {
    filename: 'index.js',
    content: `const ${ComponentName} = require('./src/main');

${ComponentName}.install = function(Vue) {
  Vue.component(${ComponentName}.name, ${ComponentName});
};

module.exports = ${ComponentName};`
  },
  {
    filename: 'cooking.conf.js',
    content: `var cooking = require('cooking');
var path = require('path');

cooking.set({
  entry: {
    index: path.join(__dirname, 'index.js')
  },
  dist: path.join(__dirname, 'lib'),
  template: false,
  format: 'umd',
  moduleName: 'El${ComponentName}',
  extends: ['vue2']
});

cooking.add('resolve.alias', {
  'main': path.join(__dirname, '../../src'),
  'packages': path.join(__dirname, '../../packages')
});

cooking.add('externals', {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
});

module.exports = cooking.resolve();`
  },
  {
    filename: 'package.json',
    content: `{
  "name": "el-${componentname}",
  "version": "0.0.0",
  "description": "A ${componentname} component for Vue.js.",
  "keywords": [
    "element",
    "vue",
    "component"
  ],
  "main": "./lib/index.js",
  "repository": "https://github.com/element-component/element/tree/master/packages/${componentname}",
  "author": "elemefe",
  "license": "MIT",
  "dependencies": {}
}`
  },
  {
    filename: 'src/main.vue',
    content: `<template>
  <div class="el-${componentname}"></div>
</template>

<script>
export default {
  name: 'el-${componentname}'
};
</script>`
  },
  {
    filename: path.join('../../examples/docs/', `${componentname}.md`),
    content: `## ${chineseName}`
  }
];

// 添加到 components.json
const componentsFile = require('../components.json');
if (componentsFile[componentname]) {
  console.error(`${componentname} 已存在.`);
  process.exit(1);
}
componentsFile[componentname] = [`./packages/${componentname}/index.js`];
fileSave(path.join(__dirname, '../components.json'))
  .write(JSON.stringify(componentsFile, null, '  '), 'utf8')
  .end('\n');

// 创建 package
Files.forEach(file => {
  fileSave(path.join(PackagePath, file.filename))
  .write(file.content, 'utf8')
  .end('\n');
});

// 添加到 nav.config.json
const navConfigFile = require('../examples/nav.config.json');
navConfigFile[navConfigFile.length - 1].list.push({
  path: `/${componentname}`,
  name: `${chineseName} (${componentname})`,
  title: componentname === chineseName
          ? componentname
          : `${componentname} ${chineseName}`
});

fileSave(path.join(__dirname, '../examples/nav.config.json'))
  .write(JSON.stringify(navConfigFile, null, '  '), 'utf8')
  .end('\n');

console.log('DONE!');
