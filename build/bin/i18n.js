'use strict';

var fs = require('fs');
var path = require('path');
var langConfig = require('../../examples/i18n.json');

langConfig.forEach(lang => {
  Object.keys(lang.pages).forEach(page => {
    if (!fs.existsSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`))) {
      fs.mkdirSync(path.resolve(__dirname, `../../examples/pages/${ lang.lang }`));
    }
    var templatePath = path.resolve(__dirname, `../../examples/pages/template/${ page }.vue`);
    var outputPath = path.resolve(__dirname, `../../examples/pages/${ lang.lang }/${ page }.vue`);
    var content = fs.readFileSync(templatePath, 'utf8');
    var pairs = lang.pages[page];
    Object.keys(pairs).forEach(key => {
      content = content.replace(new RegExp(`<%=\\s*${ key }\\s*>`, 'g'), pairs[key]);
    });
    fs.writeFileSync(outputPath, content);
  });
});
