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

<el-table :data="tableData" selection-mode="single" @selectionchange="handleSelectionChange" style="width: 520px" allow-no-selection>
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

<el-table :data="tableData3" selection-mode="multiple" style="width: 520px" @selectionchange="handleMultipleSelectionChange">
  <el-table-column type="selection" width="50"></el-table-column>
  <el-table-column inline-template property="date" label="日期" width="120">
    <div>{{ row.date }}</div>
  </el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>
<p>{{ multipleSelection }}</p>

```html
<template>
  <el-table :data="tableData3" selection-mode="multiple" @selectionchange="handleSelectionChange">
    <el-table-column type="selection" width="50"></el-table-column>
    <el-table-column inline-template property="date" label="日期" width="120">
      <div>{{ row.date }}</div>
    </el-table-column>
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

<el-table :data="tableData" border style="width: 520px">
  <el-table-column property="date" label="日期" sortable width="120"></el-table-column>
  <el-table-column property="name" label="姓名" width="120"></el-table-column>
  <el-table-column property="address" label="地址"></el-table-column>
</el-table>

```html
<template>
  <el-table :data="tableData" border style="width: 520px">
    <el-table-column property="date" label="日期" sortable width="120"></el-table-column>
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

## el-table API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | 显示的数据 | array | | |
| height | table 的高度，默认高度为空，即自动高度 | string | | '' |
| stripe | 是否为斑马纹 table | boolean | | false |
| border | 是否带有纵向边框 | boolean | | false |
| selectionMode | 列表项选择模式 | string | 'single', 'multiple', 'none' | 'none' |
| allowNoSelection | 单选模式是否允许选项为空 | boolean | | false |
| fixedColumnCount | 固定列的个数 | number | | 0 |

## el-table 事件
| 事件名 | 说明 | 参数 |
| ---- | ---- | ---- |
| selectionchange | 当选择项发生变化时会触发该事件 | selected |
| cellmouseenter | 当单元格 hover 进入时会触发该事件 | row, column, cell, event |
| cellmouseleave | 当单元格 hover 退出时会触发该事件 | row, column, cell, event |
| cellclick | 当某个单元格被点击时会触发该事件 | row, column, cell, event |

## el-table-column API
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

