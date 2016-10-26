var makeMap = require('./make-map')
var isTopLevel = makeMap('class,staticClass,style,key,ref,slot')
var isNestable = makeMap('domProps,on,nativeOn,hook')

module.exports = function groupProps (props, t) {
  var newProps = []
  var currentNestedObjects = Object.create(null)
  props.forEach(function (prop) {
    var name = prop.key.value || prop.key.name
    if (isTopLevel(name)) {
      // top-level special props
      newProps.push(prop)
    } else {
      // nested modules
      var prefixIndex = name.indexOf('-')
      var prefix = prefixIndex > 0 && name.slice(0, prefixIndex)
      if (prefix && isNestable(prefix)) {
        var suffix = name.slice(prefixIndex + 1)
        var nestedProp = t.objectProperty(t.stringLiteral(suffix), prop.value)
        var nestedObject = currentNestedObjects[prefix]
        if (!nestedObject) {
          nestedObject = currentNestedObjects[prefix] = t.objectProperty(
            t.identifier(prefix),
            t.objectExpression([nestedProp])
          )
          newProps.push(nestedObject)
        } else {
          nestedObject.value.properties.push(nestedProp)
        }
      } else if (prefix === 'v') {
        // custom directive
        name = name.slice(prefixIndex + 1)
        var dirs = currentNestedObjects.directives
        if (!dirs) {
          dirs = currentNestedObjects.directives = t.objectProperty(
            t.identifier('directives'),
            t.arrayExpression([])
          )
          newProps.push(dirs)
        }
        dirs.value.elements.push(t.objectExpression([
          t.objectProperty(
            t.identifier('name'),
            t.stringLiteral(name)
          ),
          t.objectProperty(
            t.identifier('value'),
            prop.value
          )
        ]))
      } else {
        // rest are nested under attrs
        var attrs = currentNestedObjects.attrs
        if (!attrs) {
          attrs = currentNestedObjects.attrs = t.objectProperty(
            t.identifier('attrs'),
            t.objectExpression([prop])
          )
          newProps.push(attrs)
        } else {
          attrs.value.properties.push(prop)
        }
      }
    }
  })
  return t.objectExpression(newProps)
}
