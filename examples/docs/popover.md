<script>
  export default {
    data() {
      return {
        visible2: false,
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
        gridData2: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $info: true
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          $positive: true
        }],
        gridData3: [{
          tag: '家',
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '家',
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          tag: '公司',
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        singleSelection: {},
        multipleSelection: []
      };
    },

    watch: {
      singleSelection(val) {
        console.log('selection: ', val);
      },

      multipleSelection(val) {
        console.log('selection: ', val);
      }
    },

    events: {
      handleClick(row) {
        console.log('you clicked ', row);
      }
    }
  };
</script>

<style>
  .demo-box.demo-popover {
    .el-popover + .el-popover {
      margin-left: 10px;
    }
    .el-input {
      width: 360px;
    }
    .el-button + .el-button {
      margin-left: 10px;
    }
  }
</style>

## 基础用法
可选择提示出现的位置。

<div class="demo-box demo-popover">
  <el-popover
    v-ref:popover1
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段容,这是一段容,这是一段容,这是一段容。">
  </el-popover>

  <el-popover
    v-ref:popover2
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段容,这是一段容,这是一段容,这是一段容。">
  </el-popover>

  <el-popover
    v-ref:popover3
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段容,这是一段容,这是一段容,这是一段容。">
  </el-popover>

  <el-button v-popover:popover1>hover 激活</el-button>
  <el-button v-popover:popover2>click 激活</el-button>

  <el-input :value="model" v-popover:popover3 placeholder="focus 激活"></el-input>
</div>


```html
<el-popover
  v-ref:popover1
  placement="top-start"
  title="标题"
  width="200"
  trigger="hover"
  content="这是一段容,这是一段容,这是一段容,这是一段容。">
</el-popover>

<el-popover
  v-ref:popover2
  placement="bottom"
  title="标题"
  width="200"
  trigger="click"
  content="这是一段容,这是一段容,这是一段容,这是一段容。">
</el-popover>

<el-popover
  v-ref:popover3
  placement="right"
  title="标题"
  width="200"
  trigger="focus"
  content="这是一段容,这是一段容,这是一段容,这是一段容。">
</el-popover>

<el-button v-popover:popover1>hover 激活</el-button>
<el-button v-popover:popover2>click 激活</el-button>
<el-button v-popover:popover3>focus 激活</el-button>
```

## 嵌套信息
可以嵌套表格等多种信息。

<div class="demo-box demo-popover">
  <el-popover
    v-ref:popover4
    placement="right"
    width="400"
    trigger="click">
    <el-table :data="gridData">
      <el-table-column width="150" property="date" label="日期"></el-table-column>
      <el-table-column width="100" property="name" label="姓名"></el-table-column>
      <el-table-column width="300" property="address" label="地址"></el-table-column>
    </el-table>
  </el-popover>

  <el-button v-popover:popover4>click 激活</el-button>
</div>

```html
<el-popover
  v-ref:popover4
  placement="right"
  width="400"
  trigger="click">
  <el-table :data="gridData">
    <el-table-column width="150" property="date" label="日期"></el-table-column>
    <el-table-column width="100" property="name" label="姓名"></el-table-column>
    <el-table-column width="300" property="address" label="地址"></el-table-column>
  </el-table>
</el-popover>

<el-button v-popover:popover4>click 激活</el-button>
```


## 嵌套操作
常用于确认操作中,比 Dialog 更加轻量。

<div class="demo-box demo-popover">
  <el-popover
    v-ref:popover5
    placement="top"
    width="160"
    :visible.sync="visible2">
    <p>这是一段内容这是一段内容确定删除吗？</p>
    <div style="text-align: right; margin: 0">
      <el-button size="mini" type="text" v-on:click="visible2 = false">取消</el-button>
      <el-button type="primary" size="mini" v-on:click="visible2 = false">确定</el-button>
    </div>
  </el-popover>

  <el-button v-popover:popover5>删除</el-button>
</div>

```html
<el-popover
  v-ref:popover5
  placement="top"
  width="160"
  :visible.sync="visible2">
  <p>这是一段内容这是一段内容确定删除吗？</p>
  <div style="text-align: right; margin: 0">
    <el-button size="mini" type="text" v-on:click="visible2 = false">取消</el-button>
    <el-button type="primary" size="mini" v-on:click="visible2 = false">确定</el-button>
  </div>
</el-popover>

<el-button v-popover:popover5>删除</el-button>
```

## API
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| trigger | 触发方式 | String  | 'click', 'focus', 'hover' |    click    |
|  title              | 标题 | String |  |   |
|  content        |  显示的内容  | String            |  |  |
|  width        |  宽度  | String, Number            |  | 最小宽度 150px |
|  placement        |  出现位置  | String           |  `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end` |  bottom |
|  visible        |  初始状态是否可见  | Boolean           |  |  false |
|  offset        |  出现位置的偏移量  | Number, String           |  |  0 |
|  options        | [popper.js](https://popper.js.org/documentation.html) 的参数 | Object            | 参考 [popper.js](https://popper.js.org/documentation.html) 文档 | { boundariesElement: 'body' } |

## Slot
| 参数               | 说明                                                     |
|--- | ---|
| - | 触发 popover 显示的元素|
| content | 显示的 HTML 内容 |
