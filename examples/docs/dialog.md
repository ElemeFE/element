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
    .el-select {
      width: 300px;
    }
    .el-input {
      width: 300px;
    }
  }
</style>
## Dialog 对话框
在保留当前页面状态的情况下，告知用户并承载相关操作。

### 基本用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

:::demo 需要设置`v-model`属性，它接收`Boolean`，当为`true`时显示 Dialog。Dialog 分为两个部分：`body`和`footer`，`footer`需要具名为`footer`的`slot`。`title`属性用于定义标题，它是可选的，默认值为空。本例通过显式改变`v-model`的值来打开 Dialog，此外我们还为 Dialog 实例提供了`open`和`close`方法，可以通过调用它们来打开/关闭 Dialog。

```html
<el-button type="text" @click.native="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog title="提示" v-model="dialogVisible" size="tiny">
  <span>这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
```
:::

### 自定义内容

Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。

:::demo
```html
<!-- Table -->
<el-button type="text" @click.native="dialogTableVisible = true" type="text">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>

<!-- Form -->
<el-button type="text" @click.native="dialogFormVisible = true" type="text">打开嵌套表单的 Dialog</el-button>

<el-dialog title="收货地址" v-model="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="活动名称" :label-width="formLabelWidth">
      <el-input v-model="form.name" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="活动区域" :label-width="formLabelWidth">
      <el-select v-model="form.region" placeholder="请选择活动区域">
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
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | Dialog 的标题 | string    | —                               | —      |
| size      | Dialog 的大小 | string    | tiny/small/large/full | small |
| modal     | 是否需要遮罩层   | boolean   | — | true |
| custom-class      | Dialog 的自定义类名 | string    | — | — |
| close-on-click-modal | 是否可以通过点击 modal 关闭 Dialog | boolean    | — | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Dialog | boolean    | — | true |

### Slot
| name | 说明 |
|------|--------|
| — | Dialog 的内容 |
| footer | Dialog 按钮操作区的内容 |

### 方法
每个 `el-dialog` 实例都暴露了如下方法，用于在不显式改变 `v-model` 值的情况下打开 / 关闭实例：
| 方法名 | 说明 |
|------|--------|
| open | 打开当前实例 |
| close | 关闭当前实例 |
