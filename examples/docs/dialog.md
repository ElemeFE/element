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

<el-button :plain="true" v-on:click.native="dialogVisible = true">点击打开 Dialog</el-button>

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
<el-button :plain="true" v-on:click.native="dialogVisible = true">点击打开 Dialog</el-button>

<el-dialog title="提示" v-model="dialogVisible">
  <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
  </span>
</el-dialog>
```

## 设置尺寸

<el-button :plain="true" v-on:click.native="dialogTinyVisible = true">点击打开小尺寸 Dialog</el-button>

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
<el-button :plain="true" v-on:click.native="dialogTinyVisible = true">点击打开小尺寸 Dialog</el-button>

<el-dialog title="提示" v-model="dialogTinyVisible" size="tiny">
  <span>这是一段内容</span>
  <span slot="footer" class="dialog-footer">
    <el-button @click.native="dialogTinyVisible = false">取 消</el-button>
    <el-button type="primary" @click.native="dialogTinyVisible = false">确 定</el-button>
  </span>
</el-dialog>
```

<el-button v-on:click.native="dialogFullVisible = true">点击打开全屏幕 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示" v-model="dialogFullVisible" size="full">
    <img src="http://placekitten.com/1920/1280" class="full-image">
  </el-dialog>
</div>

```html
<el-button v-on:click.native="dialogFullVisible = true">点击打开全屏幕 Dialog</el-button>

<el-dialog title="提示" v-model="dialogFullVisible" size="full">
  <img src="http://placekitten.com/1920/1280">
</el-dialog>
```

## 设置能否通过点击modal或按下esc关闭dialog

<el-button v-on:click.native="dialogStubbornVisible = true">打开 Dialog，点击 modal 或按下 esc 关闭无法将其关闭</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="提示"
    v-model="dialogStubbornVisible"
    :close-on-click-modal="false"
    :close-on-press-escape="false">
    <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
  </el-dialog>
</div>

```html
<el-button v-on:click.native="dialogStubbornVisible = true">打开 Dialog，点击 modal 或按下 esc 关闭无法将其关闭</el-button>

<el-dialog title="提示"
  v-model="dialogStubbornVisible"
  :close-on-click-modal="false"
  :close-on-press-escape="false">
  <span>这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息，这是一段信息</span>
</el-dialog>
```

## 自定义内容

<el-button v-on:click.native="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<div class="demo-box demo-dialog">
  <el-dialog title="收货地址" v-model="dialogTableVisible">
    <el-table :data="gridData">
      <el-table-column property="date" label="日期" width="150"></el-table-column>
      <el-table-column property="name" label="姓名" width="200"></el-table-column>
      <el-table-column property="address" label="地址"></el-table-column>
    </el-table>
  </el-dialog>
</div>

<el-button v-on:click.native="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

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
<el-button v-on:click.native="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

<el-dialog title="收货地址" v-model="dialogTableVisible">
  <el-table :data="gridData">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="200"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</el-dialog>

<el-button v-on:click.native="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

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

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title     | dialog 的标题 | string    |                                  |         |
| size      | dialog 的大小 | string    | 'tiny', 'small', 'large', 'full' | 'small' |
| customClass      | dialog 的自定义类名 | string    | | |
| closeOnClickModal | 是否可以通过点击 modal 关闭 dialog | boolean    |  | true |
| closeOnPressEscape | 是否可以通过按下 esc 关闭 dialog | boolean    |  | true |

## Slot
| name | 说明 |
|------|--------|
| - | dialog 的内容 |
| footer | dialog 按钮操作区的内容 |

## 方法
每个 el-dialog 实例都暴露了如下方法，用于在不使用 v-model 的情况下打开 / 关闭实例：
| 方法名 | 说明 |
|------|--------|
| open | 打开当前实例 |
| close | 关闭当前实例 |
