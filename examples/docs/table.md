<script>
  import Vue from 'vue';
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableData2: [{
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
        tableData3: [{
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

    methods: {
      handleSelectionChange(val) {
        this.singleSelection = val;
      },

      handleMultipleSelectionChange(val) {
        this.multipleSelection = val;
      },

      formatter(row, column) {
        return row.address;
      }
    },

    watch: {
      singleSelection(val) {
        console.log('selection: ', val);
      },

      multipleSelection(val) {
        console.log('selection: ', val);
      }
    }
  };
</script>

## 基础表格

在 Table 组件中，只要在`el-table`元素中注入`data`对象数组后在`el-table-column`中用`property`属性来对应对象中的键名即可填入数据，用`label`属性来定义表格的列名。

在下例中，我们还用了`width`属性来定义列宽：

<el-table :data="tableData" style="width: 520px">
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData">
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 带斑马纹表格

`stripe`属性可以创建带斑马纹的表格，效果如下例，它接受一个`Boolean`，默认为`false`，设置为`true`即为启用。

<el-table :data="tableData" stripe style="width: 520px">
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData" stripe>
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 带边框表格

默认情况下，Table 组件是不具有竖直方向的边框的，如果需要，可以使用`border`属性，它接受一个`Boolean`，设置为`true`即可启用。

<el-table :data="tableData" border style="width: 520px">
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData" border>
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 带状态表格

通过在`data`对象数组中加入字段，可以给行加上状态，Element 提供了四种状态：`$positive`、`$info`、`$warning`以及`$negative`，在对象新增字段中把状态设为`true`表示启用该状态。

<el-table :data="tableData2" style="width: 520px">
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData2">
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData2: [{
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
        }]
      }
    }
  }
</script>
```

## 固定表头

只要在`el-table`元素中定义了`height`属性，即可实现固定表头的表格，而不需要额外的代码，下例是一个固定表头的表格：

<el-table :data="tableData3" height="250" border style="width: 520px">
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData3" height="250" border>
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```

## 固定列
除了固定头以外，固定列也十分方便，只需要使用`fixed-column-count`属性即可，它接受一个`Number`，表示左起要固定的列数，下例展示了如何使用：

<el-table :data="tableData" :fixed-column-count="1" border style="width: 500px">
  <el-table-column property="date" label="日期" width="150"></el-table-column>
  <el-table-column property="name" label="姓名" width="300"></el-table-column>
  <el-table-column property="address" label="地址" width="300"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData" :fixed-column-count="1" border style="width: 500px">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="300"></el-table-column>
    <el-table-column property="address" label="地址" width="300"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>
```

## 固定列和表头

固定列和表头可以同时使用，只需要将上述两个属性分别设置好即可，下例是一个联用的样例：

<el-table :data="tableData3" :fixed-column-count="1" border style="width: 500px" height="250">
  <el-table-column property="date" label="日期" width="150"></el-table-column>
  <el-table-column property="name" label="姓名" width="300"></el-table-column>
  <el-table-column property="address" label="地址" width="300"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData3" :fixed-column-count="1" border style="width: 500px" height="250">
    <el-table-column property="date" label="日期" width="150"></el-table-column>
    <el-table-column property="name" label="姓名" width="300"></el-table-column>
    <el-table-column property="address" label="地址" width="300"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  }
</script>
```

## 单选

更方便的是，Table 组件默认提供了选择的支持，只需要配置`selection-mode`属性即可实现单选（`single`）、多选（`multiple`)，如果不需要则设置为`none`即可。

之后由`selectionchange`事件来管理选中时触发的事件，它会传入一个`value`，`value`为生成表格时的对应对象。

在下例中还使用了`allow-no-selection`属性，它接受一个`Boolean`，为`true`，则允许为空，默认为`false`，此时将会产生默认值，为填入数组的第一个对象。

如果需要显示索引，可以增加一列`el-table-column`，设置`type`属性为`index`即可显示从 1 开始的索引号。

<el-table :data="tableData" selection-mode="single" @selectionchange="handleSelectionChange" style="width: 520px" allow-no-selection>
  <el-table-column type="index" width="50"></el-table-column>
  <el-table-column property="date" label="日期" width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>
<p>{{ singleSelection }}</p>

```html
<template>
  <el-table :data="tableData" selection-mode="single" @selectionchange="handleSelectionChange">
    <el-table-column property="date" label="日期" width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        singleSelection: {}
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.singleSelection = val;
      }
    }
  }
</script>
```

## 多选

除了`selection-mode`的设置外，多选与单选并没有太大差别，只是传入`selectionchange`的事件中，我们提供的参数从对象变成了对象数组。

此外，需要提供一个栏目来显示多选框，手动添加一列，设`type`属性为`selection`即可。

在下例中，为了方便说明其他属性，我们还使用了`inline-template`和`show-tooltip-when-overflow`属性，设置了`inline-template`属性后，可以通过调用`row`对象中的值取代`property`属性的设置。

而如果设置了宽度，默认情况无法完整显示的内容会被隐藏，可以使用`show-tooltip-when-overflow`属性，它接受一个`Boolean`，为`true`时当 hover 在指定内容上就会显示完整内容。

<el-table :data="tableData3" selection-mode="multiple" style="width: 520px" @selectionchange="handleMultipleSelectionChange">
  <el-table-column type="selection" width="50"></el-table-column>
  <el-table-column inline-template label="日期" width="120">
    <div>{{ row.date }}</div>
  </el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址" show-tooltip-when-overflow></el-table-column>
</el-table>
<p>{{ multipleSelection }}</p>

```html
<template>
  <el-table :data="tableData3" selection-mode="multiple" style="width: 520px" @selectionchange="handleMultipleSelectionChange">
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column inline-template label="日期" width="120">
      <div>{{ row.date }}</div>
    </el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址" show-tooltip-when-overflow></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []
      }
    },

    methods: {
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
```

## 排序

Table 组件中，只要在列中设置`sortable`属性即可实现以该列为基准的排序，接受一个`Boolean`，默认为`false`。

在下例中，我们还使用了`formatter`属性，它用于格式化指定列的值，接受一个`Function`，会传入两个参数：`row`和`column`，可以根据自己的需求进行处理。

<el-table :data="tableData" border style="width: 520px">
  <el-table-column property="date" label="日期" sortable width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址" :formatter="formatter"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData" border style="width: 520px">
    <el-table-column property="date" label="日期" sortable width="120"></el-table-column>
    <el-table-column property="name" label="姓名" width="120"></el-table-column>
    <el-table-column property="address" label="地址" :formatter="formatter"></el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    }
  }
</script>
```

## Table Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | | |
| height | table 的高度，默认高度为空，即自动高度 | string | | '' |
| stripe | 是否为斑马纹 table | boolean | | false |
| border | 是否带有纵向边框 | boolean | | false |
| selection-mode | 列表项选择模式 | string | 'single', 'multiple', 'none' | 'none' |
| allow-no-selection | 单选模式是否允许选项为空 | boolean | | false |
| fixed-column-count | 固定列的个数 | number | | 0 |

## Table Events
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| selectionchange | 当选择项发生变化时会触发该事件 | selected |
| cellmouseenter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cellmouseleave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cellclick | 当某个单元格被点击时会触发该事件 | row, column, cell, event |

## Table-column Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 显示的标题 | string | | '' |
| property | 对应列内容的字段名 | string | | '' |
| width | 对应列的宽度 | string | | |
| sortable | 对应列是否可以排序 | boolean | | false |
| type | 对应列的类型。如果设置了 `selection` 则显示多选按钮，如果设置了 `index` 则显示该行的索引（从 1 开始计算） | string | 'selection', 'index' | 0 |
| formatter | 用来格式化内容，在 formatter 执行的时候，会传入 row 和 column | function | |  |
| show-tooltip-when-overflow | 当过长被隐藏时显示 tooltip | Boolean | | false |
| inline-template | 指定该属性后可以自定义 column 模板，参考多选的时间列，通过 row 获取行信息。此时不需要配置 property 属性  | | |
