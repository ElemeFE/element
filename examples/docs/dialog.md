<script>
  module.exports = {
    data() {
      return {
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        dialogVisible: false,
        dialogTinyVisible: false,
        dialogFullVisible: false,
        dialogStubbornVisible: false,
        dialogTableVisible: false,
        dialogBindVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '80px'
      };
    },
    methods: {
      openDialog() {
        this.$refs.dialogBind.open();
      }
    }
  };
</script>

<style>
  .demo-box.demo-dialog {
    .dialog-footer button:first-child {
      margin-right: 10px;
    }
    .full-image {
      width: 100%;
    }
    .el-dialog__wrapper {
      margin: 0;
    }
    .el-input {
      width: 300px;
    }
  }
</style>

## 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景，如果只是弹出框，可以尝试 MessageBox 组件。

要使用 Dialog 组件，首先你需要设置`v-model`属性，它接收`Boolean`，当为`true`时显示 Dialog。

Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。

`title`属性用于定义标题，它是可选的，默认值为空，下面是一个最简单的用例：

<el-button :plain="true" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示" v-model="dialogVisible">
    <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click.native="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>

```html
<el-button :plain="true" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog title="提示" v-model="dialogVisible">
  <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
```

## 设置尺寸

Dialog 组件提供四种尺寸：`tiny`, `small`, `large`, `full`。通过`size`属性来设置，下面是一个 tiny 的例子。

<el-button :plain="true" @click.native="dialogTinyVisible = true">点击打开小尺寸 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示" v-model="dialogTinyVisible" size="tiny">
    <span>这是一段内容</span>
    <span slot="footer" class="dialog-footer">
      <el-button @click.native="dialogTinyVisible = false">取 消</el-button>
      <el-button type="primary" @click.native="dialogTinyVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>

```html
<el-button :plain="true" @click.native="dialogTinyVisible = true">点击打开小尺寸 Dialog</el-button>

<el-dialog title="提示" v-model="dialogTinyVisible" size="tiny">
  <span>这是一段内容</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogTinyVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogTinyVisible = false">确 定</el-button>
  </span>
</el-dialog>
```

下面是一个全屏幕 Dialog 的样例：

<el-button @click.native="dialogFullVisible = true">点击打开全屏幕 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示" v-model="dialogFullVisible" size="full">
    <img src="http://placekitten.com/1920/1280" class="full-image">
  </el-dialog>
</div>

```html
<el-button @click.native="dialogFullVisible = true">点击打开全屏幕 Dialog</el-button>

<el-dialog title="提示" v-model="dialogFullVisible" size="full">
  <img src="http://placekitten.com/1920/1280">
</el-dialog>
```

## 设置能否通过点击modal或按下esc关闭Dialog

在默认条件下，你可以通过 ESC 和点击 modal 关闭 Dialog，但是可以通过设置`close-on-click-modal`属性和`close-on-press-escape`属性来关闭这一功能，它们接收`Boolean`，默认均为`true`。

<el-button @click.native="dialogStubbornVisible = true">打开 Dialog，点击 modal 或按下 esc 关闭无法将其关闭</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示"
    v-model="dialogStubbornVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false">
    <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  </el-dialog>
</div>

```html
<el-button @click.native="dialogStubbornVisible = true">打开 Dialog，点击 modal 或按下 esc 关闭无法将其关闭</el-button>

<el-dialog title="提示"
  v-model="dialogStubbornVisible"
  :close-on-click-modal="false"
  :close-on-press-escape="false">
  <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
</el-dialog>
```

## 使用 Dialog 方法打开

使用`v-model`确实是一个不错的做法，为了一些特殊需求，我们暴露了实例`open`和`close`方法，你可以不用显式改变`v-modal`的值了：

<el-button @click.native="openDialog()">使用Dialog方法</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示" v-model="dialogBindVisible" ref="dialogBind">
    <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  </el-dialog>
</div>

```html
<template>
  <el-dialog title="提示" v-model="dialogBindVisible" ref="dialogBind">
    <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  </el-dialog>
</template>
<script>
  export default {
    data() {
      return {
        dialogBindVisible: false
      }
    },
    methods: {
      openDialog() {
        this.$refs.dialogBind.open();
      }
    }
  };
</script>
```

## 自定义内容

Dialog 组件的正文标题可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例，除此以外，它们并没有什么特殊之处：

<el-button @click.native="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="收货地址" v-model="dialogTableVisible">
    <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </el-dialog>
</div>

<el-button @click.native="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="收货地址" v-model="dialogFormVisible">
    <el-form :models="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input :model.sync="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select :value.sync="form.region" :width="300" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click.native="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click.native="dialogFormVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>

```html
<el-button @click.native="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>

<el-button @click.native="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" v-model="dialogFormVisible">
  <el-form :models="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input :model.sync="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select :value.sync="form.region" :width="300" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogFormVisible = false">确 定</el-button>
  </span>
</el-dialog>
```

## Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Dialog 的标题 | string    |                                  |         |
| size      | Dialog 的大小 | string    | 'tiny', 'small', 'large', 'full' | 'small' |
| modal     | 是否需要遮罩层   | boolean   | | true |
| customClass      | Dialog 的自定义类名 | string    | | |
| closeOnClickModal | 是否可以通过点击 modal 关闭 Dialog | boolean    |  | true |
| closeOnPressEscape | 是否可以通过按下 ESC 关闭 Dialog | boolean    |  | true |

## Slot
| name | 说明 |
|------|--------|
| - | Dialog 的内容 |
| footer | Dialog 按钮操作区的内容 |

## 方法
每个`el-dialog`实例都暴露了如下方法，用于在不显式改变`v-model`值的情况下打开 / 关闭实例：
| 方法名 | 说明 |
|------|--------|
| open | 打开当前实例 |
| close | 关闭当前实例 |
