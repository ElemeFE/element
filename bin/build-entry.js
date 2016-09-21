var Components = require('../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var uppercamelcase = require('uppercamelcase');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../src/index.js');
var IMPORT_TEMPLATE = 'import {{name}} from \'../packages/{{package}}/index.js\';';
var ISNTALL_COMPONENT_TEMPLATE = '  Vue.component({{name}}.name, {{name}});';
var MAIN_TEMPLATE = `{{include}}

const install = function(Vue) {
  if (install.installed) return;

{{install}}

  Vue.use(Loading);

  Vue.prototype.$msgbox = MessageBox;
  Vue.prototype.$alert = MessageBox.alert;
  Vue.prototype.$confirm = MessageBox.confirm;
  Vue.prototype.$prompt = MessageBox.prompt;
  Vue.prototype.$notify = Notification;
  Vue.prototype.$message = Message;
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

module.exports = {
  version: '{{version}}',
  install,
{{list}}
};
`;

delete Components.font;

var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];
var installTemplate = [];
var listTemplate = [];

ComponentNames.forEach(name => {
  var componentName = uppercamelcase(name);

  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: componentName,
    package: name
  }));

  if (['Loading', 'MessageBox', 'Notification'].indexOf(componentName) === -1) {
    installTemplate.push(render(ISNTALL_COMPONENT_TEMPLATE, {
      name: componentName,
      component: name
    }));
  }

  listTemplate.push(`  ${componentName}`);
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n'),
  install: installTemplate.join('\n'),
  version: require('../package.json').version,
  list: listTemplate.join(',\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build entry] DONE:', OUTPUT_PATH);

