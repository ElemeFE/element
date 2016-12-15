# element-tree
> A element-tree component for Vue.js.

## Demo
http://element-component.github.io/element-tree

## Installation
```shell
npm i element-tree -D
```

## Usage
```javascript
import Vue from 'vue'
import ElTree from 'element-tree'
import 'element-theme-default/dist/tree.css'

Vue.use(ElTree)
```

or

```javascript
import Vue from 'vue'
import ElTree from 'element-tree'

Vue.component('el-tree', ElTree)
```

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data     | 展示数据 | array | — | — |
| empty-text | 内容为空的时候展示的文本 | String | — | — |
| node-key | 每个树节点用来作为唯一标识的属性，整颗树应该是唯一的 | String | — | — |
| props | 配置选项，具体看下表 | object | — | — |
| load | 加载子树数据的方法 | function(node, resolve) | — | — |
| render-content | 树节点的内容区的渲染 Function | Function(h, { node } | - | - |
| highlight-current | 是否高亮当前选中节点，默认值是 false。| boolean | - | false |
| default-expand-all | 是否默认展开所有节点 | boolean | - | false |
| auto-expand-parent | 展开子节点的时候是否自动展开父节点 | boolean | — | true |
| default-expanded-keys | 默认展开的节点的 key 的数组 | array | — | — |
| show-checkbox | 节点是否可被选择 | boolean | — | false |
| check-strictly | 在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false | boolean | — | false |
| default-checked-keys | 默认勾选的节点的 key 的数组 | array | — | — |
| filter-node-method | 对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏 | Function(value, data, node) | - | - |

### props
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 指定节点标签为节点对象的某个属性值 | string | — | — |
| children | 指定子树为节点对象的某个属性值 | string | — | — |

### 方法
`Tree` 拥有如下方法，返回目前被选中的节点数组：
| 方法名 | 说明 | 参数 |
|------|--------|------|
| filter | 对树节点进行筛选操作 | 接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数 |
| getCheckedNodes | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点，默认值为 `false` |
| setCheckedNodes | 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (nodes) 接收勾选节点数据的数组 |
| getCheckedKeys | 若节点可被选择（即 `show-checkbox` 为 `true`），则返回目前被选中的节点所组成的数组 | (leafOnly) 接收一个 boolean 类型的参数，若为 `true` 则仅返回被选中的叶子节点的 keys，默认值为 `true` |
| setCheckedKeys | 通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性 | (keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 `true` 则仅设置叶子节点的选中状态，默认值为 `true` |
| setChecked | 通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性 | (key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| node-click  | 节点被点击时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。 |
| check-change  | 节点选中状态发生变化时的回调 | 共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点 |

## Development
```shell
make dev

## test
make test

## build
make build
```

# License
[MIT](https://opensource.org/licenses/MIT)
