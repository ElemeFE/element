## Panel 展示板
查看信息展示板


### 基础用法

### view
包含标题、小标题、展示类型(view)

:::demo 
```html
<el-panel title="标题" subtitle="小标题" type="view"></el-panel>
```
:::

### edit
包含标题、小标题、展示类型(edit)

:::demo 
```html
<el-panel title="标题" subtitle="小标题" type="edit"></el-panel>

```
:::

### slot
除设置标题外，还可以通过 slot 来添加操作属性。
:::demo 
```html
<el-panel title="标题" subtitle="小标题" type="view">
    <div slot="operation">操作</div>
</el-panel>

```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | string | — | — |
| subtitle | 小标题 | string | — | — |
| type | 展示类型 | string | view/edit | view |
| bodyPadding | 内边距 | string | — | — |
| width | 宽度 | string/number | — | — |