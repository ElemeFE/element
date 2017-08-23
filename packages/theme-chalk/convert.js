const fs = require('fs')
const path = require('path')
const component = process.argv[2]

if (!component) {
  console.error('请提供文件名')
  process.exit(1)
}

const processDefaultStyle = style => {
  return style
    .replace(/var\(([^\)]+)\)/g, (match, p1) => `$${ p1 }`)
    .replace('@charset "UTF-8";', '@import "mixins/mixins";')
    .replace('./common/var.css', 'common/var')
    .replace(/@b ([^\s]+) /g, (match, p1) => `@include b(${ p1 }) `)
    .replace(/@e ([^\s]+) /g, (match, p1) => `@include e(${ p1 }) `)
    .replace(/@modifier ([^\s]+) /g, (match, p1) => `@include m(${ p1 }) `)
    .replace(/@m ([^\s]+) /g, (match, p1) => `@include m(${ p1 }) `)
    .replace(/@when ([^\s]+) /g, (match, p1) => `@include when(${ p1 }) `)
    .replace(/@utils-clearfix/g, '@include utils-clearfix')
    .replace(/@utils-user-select none/g, '@include utils-user-select(none)')
    .replace(/@utils-vertical-center/g, '@include utils-vertical-center')
    .replace('@component-namespace el {\n', '')
}

const defaultStyle = fs.readFileSync(path.resolve(__dirname, `../theme-default/src/${ component }.css`), 'utf8')
fs.writeFileSync(path.resolve(__dirname, `./src/${ component }.scss`), processDefaultStyle(defaultStyle))


