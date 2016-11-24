<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }],
        tableData2: [{
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          $info: true
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
        }, {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          $positive: true
        }],
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }],
        currentRow: null,
        multipleSelection: []
      };
    },

    methods: {
      handleClick() {
        console.log('click');
      },

      handleEdit(index, row) {
        console.log(index, row);
      },

      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },

      handleCurrentChange(val) {
        this.currentRow = val;
      },

      formatter(row, column) {
        return row.address;
      },

      filterTag(value, row) {
        return row.tag === value;
      },

      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },

    watch: {
      multipleSelection(val) {
        console.log('selection: ', val);
      }
    }
  };
</script>

## Table 

Display multiple data with similar format. You can sort, filter, compare your data in a table.

### Basic table

Basic table is just for data display.

:::demo After setting attribute `data` of `el-table` with an object array, you can use `prop` (corresponding to a key of the object in `data` array) in `el-table-column` to insert data to table columns, and set the attribute `label` to define the column name. You can also use the attribute `width` to define the width of columns.

```html
  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="Address">
      </el-table-column>
    </el-table>
  </template>

  <script>
    export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }, {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles'
          }]
        }
      }
    }
  </script>
```
:::

### Striped Table

Striped table makes it easier to distinguish different rows.

:::demo Attribute `stripe` accepts a `Boolean`. If `true`, table will be striped.
```html
<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### Table with border

:::demo By default, Table has no vertical border. If you need it, you can set attribute `border` to `true`.

```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### Table with status

You can highlight your table content to distinguish between "success, information, warning, danger" and other states.

:::demo Use `row-class-name` in `el-table` to add custom classes to a certain row. Then you can style it with custom classes.
```html
<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :row-class-name="tableRowClassName">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<style>
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
</style>

<script>
  export default {
    methods: {
      tableRowClassName(row, index) {
        if (index === 1) {
          return 'info-row';
        } else if (index === 3) {
          return 'positive-row';
        }
        return '';
      }
    },
    data() {
      return {
        tableData2:  [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    }
  }
</script>
```
:::

### Table with fixed header

When there are too many rows, you can use a fixed header.

:::demo By setting the attribute `height` of `el-table`, you can fix the table header without any other codes.
```html
<template>
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
      }
    }
  }
</script>
```
:::

### Table with fixed column 

When there are too many columns, you can fix some of them.

:::demo Attribute `fixed` is used in `el-table-column`, it accepts a `Boolean`. If `true`, the column will be fixed at left. It also accepts two string literals: 'left' and 'right', both indicating that the column will be fixed at corresponding direction.
```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
    </el-table-column>
    <el-table-column
      inline-template
      :context="_self"
      fixed="right"
      label="Operations"
      width="120">
      <span>
        <el-button @click="handleClick" type="text" size="small">Detail</el-button>
        <el-button type="text" size="small">Edit</el-button>
      </span>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('click');
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036',
          tag: 'Office'
        }]
      }
    }
  }
</script>
```
:::

### Table with fixed columns and header 

When you have huge chunks of data to put in a table, you can fix the header and columns at the same time.

:::demo  Fix columns and header at the same time by combining the above two examples.
```html
<template>
  <el-table
    :data="tableData3"
    border
    style="width: 100%"
    height="250">
    <el-table-column
      fixed
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      prop="state"
      label="State"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      prop="zip"
      label="Zip"
      width="120">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### Grouping table head

When the data structure is complex, you can use group header to show the data hierarchy.

:::demo Only need to place el-table-column inside a el-table-column, you can achieve group header.
```html
<template>
  <el-table
    :data="tableData3"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column label="Delivery Info">
      <el-table-column
        prop="name"
        label="Name"
        width="120">
      </el-table-column>
      <el-table-column label="Address Info">
        <el-table-column
          prop="state"
          label="State"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="City"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="Address"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="Zip"
          width="120">
        </el-table-column>
      </el-table-column>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'No. 189, Grove St, Los Angeles',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### Single select

Single row selection is supported.

:::demo Table supports single row selection. You can activate it by adding the `highlight-currnet-row` attribute. An event called `current-change` will be triggered when row selection changes, and its parameters are the rows after and before this change: `currentRow` and `oldCurrentRow`. If you need to display row index, you can add a new `el-table-column` with its `type` attribute assigned to `index`, and you will see the index starting from 1.
```html
<template>
  <el-table
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
    style="width: 100%">
    <el-table-column
      type="index"
      width="50">
    </el-table-column>
    <el-table-column
      property="date"
      label="Date"
      width="120">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        currentRow: null
      }
    },

    methods: {
      handleCurrentChange(val) {
        this.currentRow = val;
      }
    }
  }
</script>
```
:::

### Multiple select

You can also select multiple rows.

:::demo Activating multiple selection is easy: simply add an `el-table-column` with its `type` set to `selection`. Apart from multiple selection, this example also uses `inline-template` and `show-overflow-tooltip`: when the attribute `inline-template` is set, you can use custom template inside `el-table-column`, and access current row data via `row`; by default, if the content is too long, it will break into multiple lines. If you want to keep it in one line, use attribute `show-overflow-tooltip`, which accepts a `Boolean` value. When set `true`, the extra content will show in tooltip when hover on the cell.
```html
<template>
  <el-table
    :data="tableData3"
    border
    selection-mode="multiple"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      width="50">
    </el-table-column>
    <el-table-column
      inline-template
      label="Date"
      width="120">
      <div>{{ row.date }}</div>
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
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
:::

### Sorting

Sort the data to find or compare data quickly.

:::demo Set attribute `sortable` in a certain column to sort the data based on this column. It accepts `Boolean` with a default value `false`. In this example we use another attribute named `formatter` to format the value of certain columns. It accepts a function which has two parameters: `row` and `column`. You can handle it according to your own needs.
```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
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
:::

### Filter

Filter the table to find desired data.

:::demo Set attribute `filters` and `filter-method` in `el-table-column` makes this column filterable. `filters` is an array, and `filter-method` is a function deciding which rows are displayed. It has two parameters: `value` and `row`.
```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="Date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="Address"
      :formatter="formatter">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="Tag"
      width="100"
      :filters="[{ text: 'Home', value: 'Home' }, { text: 'Office', value: 'Office' }]"
      :filter-method="filterTag"
      inline-template>
      <el-tag :type="row.tag === 'Home' ? 'primary' : 'success'" close-transition>{{row.tag}}</el-tag>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Home'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles',
          tag: 'Office'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      }
    }
  }
</script>
```
:::

### Custom column template
 
Customize table column so it can be integrated with other components.
:::demo Activate custom column template by adding the `inline-template` attribute. By default, the context of `el-table-column` is the one where `el-table` lies, and you can customize it with the `context` attribute, e.g. `:context="_self"` refers to the current context. This is useful when sometimes Table is encapsulated into another component, and `table-column` is distributed by slots. In `el-column`, you have access to the following data: row, column, $index and store (state management of Table).
```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      inline-template
      label="Date"
      width="180">
      <div>
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ row.date }}</span>
      </div>
    </el-table-column>
    <el-table-column
      inline-template
      label="Name"
      width="180">
      <el-popover trigger="hover" placement="top">
        <p>Name: {{ row.name }}</p>
        <p>Addr: {{ row.address }}</p>
        <div slot="reference">
          <el-tag>{{ row.name }}</el-tag>
        </div>
      </el-popover>
    </el-table-column>
    <el-table-column
      :context="_self"
      inline-template
      label="Operations">
      <div>
        <el-button
          size="small"
          @click="handleEdit($index, row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete($index, row)">
          Delete
        </el-button>
      </div>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
```
:::

### Table Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | table data | array | — | — |
| height | Table's height. By default it has an auto height. If its value is a number, the height is measured in pixels; if its value is a string, the height is affected by external styles | string/number | — | — |
| stripe | whether table is striped | boolean | — | false |
| border | whether table has vertical border | boolean | — | false |
| fit | whether width of column automatically fits its container | boolean | — | true |
| show-header | whether table header is visible | boolean | - | true |
| highlight-current-row | whether current row is highlighted | boolean | — | false |
| row-class-name | function that returns custom class names for a row, or a string assigning class names for every row | Function(row, index)/String | — | — |
| row-style | function that returns custom style for a row,  or a string assigning custom style for every row | Function(row, index)/Object | — | — |
| row-key | key of row data, used for optimizing rendering. Required if `reserve-selection` is on | Function(row)/String | — | — |
| context | context of Table, e.g. `_self` refers to the current context, `$parent` parent context, `$root` root context, can be overridden by `context` in `el-table-column` | Object | - | current context where Table lies |

### Table Events
| Event Name | Description | Parameters |
| ---- | ---- | ---- |
| select | triggers when user clicks the checkbox in a row | selection, row |
| select-all | triggers when user clicks the checkbox in table header | selection |
| selection-change | triggers when selection changes | selection |
| cell-mouse-enter | triggers when hovering into a cell| row, column, cell, event |
| cell-mouse-leave | triggers when hovering out of a cell | row, column, cell, event |
| cell-click | triggers when clicking a cell | row, column, cell, event |
| row-click | triggers when clicking a row | row, event |
| header-click | triggers when clicking a column header | column, event |
| sort-change | triggers when Table's sorting changes | { column, prop, order } |
| current-change | triggers when current row changes | currentRow, oldCurrentRow |

### Table Methods
| Method | Description | Parameter |
|------|--------|-------|
| clearSelection | clear selection, might be useful when `reserve-selection` is on | selection |
| toggleRowSelection | toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected | row, selected |

### Table-column Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1)  | string | selection/index | — |
| label | column label | string | — | — |
| prop |  field name. You can also use its alias: `property` | string | — | — |
| width | column width | string | — | — |
| min-width | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion | string | — | — |
| fixed | whether column is fixed at left/right. Will be fixed at left if `true` | string/boolean | true/left/right | — |
| render-header | render function for table header of this column | Function(h, { column, $index }) | — | — |
| sortable | whether column can be sorted | boolean | — | false |
| sort-method | sorting method, works when `sortable` is `true` | Function(a, b) | — | — |
| resizable | whether column width can be resized, works when `border` of `el-table` is `true` | boolean | — | false |
| formatter | function that formats content | Function(row, column) | — | — |
| show-overflow-tooltip | whether to hide extra content and show them in a tooltip when hovering on the cell | boolean | — | false |
| context | context of Table-column, e.g. `_self` refers to the current context, `$parent` parent context, `$root` root context | Object | - | current context where Table lies |
| inline-template | by using this attribute, you can customize column template. Row data can be accessed by `row` object. In your template, you have access to the following: `{ row (current row), column (current column), $index (row index), store (table store) }` | — | — |
| align | alignment | string | left/center/right | left |
| class-name | class name of cells in the column | string | — | — |
| selectable | function that determines if a certain row can be selected, works when `type` is 'selection' | Function(row, index) | — | — |
| reserve-selection | whether to reserve selection after data refreshing, works when `type` is 'selection' | boolean | — | false |
| filters | an array of data filtering options. For each element in this array, `text` and `value` are required | Array[{ text, value }] | — | — |
| filter-multiple | whether data filtering supports multiple options | Boolean | — | true |
| filter-method | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true` | Function(value, row) | — | — |
| filtered-value | filter value for selected data, might be useful when table header is rendered with `render-header` | Array | — | — |
