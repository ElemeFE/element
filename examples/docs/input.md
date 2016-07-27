<script>
  module.exports = {
    data() {
      return {
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        textarea: ''
      };
    }
  };
</script>

<style>
  .demo-box.demo-input {
    .el-input {
      width: 180px;

      & + .el-input,
      & + .el-textarea {
        margin-top: 15px;
      }
    }
    .el-textarea {
      width: 414px;
    }
    .el-input-group + .el-input-group {
      margin-top: 15px;
    }
  }
</style>

## 基本用法

<div class="demo-box demo-input">
  <el-input
    placeholder="请输入内容"
    :value.sync="input"
    name="user">
  </el-input>
  <el-input
    placeholder="请输入内容"
    :value.sync="textarea"
    name="desc"
    type="textarea">
  </el-input>
</div>

```html
<el-input
  placeholder="请输入内容"
  :value.sync="input"
  name="user">
</el-input>
<el-input
  placeholder="请输入内容"
  :value.sync="textarea"
  name="desc"
  type="textarea">
</el-input>
```

## 禁用状态

<div class="demo-box demo-input">  
  <el-input
    :disabled="true"
    placeholder="请输入内容"
    :value.sync="input1">
  </el-input>
</div>

```html
<el-input
  :disabled="true"
  placeholder="请输入内容"
  :value.sync="input1">
</el-input>
```

<!-- ## readonly 状态

<el-input
  :readonly="true"
  placeholder="请输入内容"
  :value.sync="input1">
</el-input>

```html
<el-input
  :readonly="true"
  placeholder="请输入内容"
  :value.sync="input1">
</el-input>
``` -->

## Input 图标

<div class="demo-box demo-input">
  <el-input
    placeholder="请选择日期"
    icon="time"
    :value.sync="input1">
  </el-input>
</div>

```html
<el-input
  placeholder="请选择日期"
  icon="time"
  :value.sync="input1">
</el-input>
```

## Input Group

前置和后置元素可以是任何东西， 通过使用`.el-input-group__label`可以声明附加元素是一个标签从而获得合适的样式。

### 后置元素

<div class="demo-box demo-input">
  <el-input-group>
    <el-input
      placeholder="请输入内容"
      :value.sync="input2">
    </el-input>
    <span class="el-input-group__label" slot="append">.com</span>
  </el-input-group>
</div>

```html
<el-input-group>
  <el-input
    placeholder="请输入内容"
    :value.sync="input2">
  </el-input>
  <span class="el-input-group__label" slot="append">.com</span>
</el-input-group>
```

### 前置元素
<div class="demo-box demo-input">
  <el-input-group>
    <el-button slot="prepend" type="text">按钮</el-button>
    <el-input
      placeholder="请输入内容"
      :value.sync="input2">
    </el-input>
  </el-input-group>
</div>

```html
<el-input-group>
  <el-button slot="prepend" type="text">按钮</el-button>
  <el-input
    placeholder="请输入内容"
    :value.sync="input2">
  </el-input>
</el-input-group>
```

### 前置和后置元素
<div class="demo-box demo-input">
  <el-input-group>
    <el-dropdown text="下拉菜单" type="text" :icon-separate="false" slot="prepend">
      <li>选项一</li>
      <li>选项二</li>
      <li>选项三</li>
      <li class="divider">选项四</li>
    </el-dropdown>
    <el-input placeholder="请输入内容" :value.sync="input2"></el-input>
    <el-button type="text" slot="append">搜索</el-button>
  </el-input-group>
</div>

```html
<el-input-group>
  <el-dropdown text="下拉菜单" type="text" :icon-separate="false" slot="prepend">
    <li>选项一</li>
    <li>选项二</li>
    <li>选项三</li>
    <li class="divider">选项四</li>
  </el-dropdown>
  <el-input placeholder="请输入内容" :value.sync="input2"></el-input>
  <el-button type="text" slot="append">搜索</el-button>
</el-input-group>
```

## 尺寸
### large

<div class="demo-box demo-input">
  <el-input
    size="large"
    placeholder="请输入内容"
    :value.sync="input4">
  </el-input>
</div>

### normal

<div class="demo-box demo-input">
  <el-input
    placeholder="请输入内容"
    :value.sync="input4">
  </el-input>
</div>

### small

<div class="demo-box demo-input">
  <el-input
    size="small"
    placeholder="请输入内容"
    :value.sync="input4">
  </el-input>
</div>

### mini

<div class="demo-box demo-input">
  <el-input
    size="mini"
    placeholder="请输入内容"
    :value.sync="input4">
  </el-input>
</div>

```html
<el-input
  size="large"
  placeholder="请输入内容"
  :value.sync="input4">
</el-input>
<el-input
  placeholder="请输入内容"
  :value.sync="input4">
</el-input>
<el-input
  size="small"
  placeholder="请输入内容"
  :value.sync="input4">
</el-input>
<el-input
  size="mini"
  placeholder="请输入内容"
  :value.sync="input4">
</el-input>
```

## API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 同原生的 input 的 type 属性，如果为textarea则显示为extarea   | string  |                    |         |
| name         | 同原生的 input 的 name 属性   | string  |                     |         |
| model         | 绑定值           | string, number  |                       |         |
| maxlength     | 最大输入长度           | number  |                       |         |
| minlength     | 最小输入长度           | number  |                       |         |
| placeholder   | 输入框占位文本   | string          |                       |         |
| disabled      | 禁用            | boolean         | true, false           | false   |
| readonly      | 禁用            | boolean         | true, false           | false   |
| size          | 输入框尺寸       | string          | large, small, mini  |     |
| icon          | 输入框尾部图标       | string          |                  |     |
| number        | 指定model值为number类型  |  boolean    |                  |  false   |

