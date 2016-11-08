<script>
  import Vue from 'vue';
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }],
        tableData2: [{
          date: '2016-05-02',
          name: 'Tom',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          $info: true
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
        }, {
          date: '2016-05-03',
          name: 'Tom',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          $positive: true
        }],
        tableData3: [{
          date: '2016-05-03',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          state: 'California',
          city: 'Los Angeles',
          address: 'The Grove, 189 The Grove Dr, Los Angeles',
          zip: 'CA 90036'
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

## Table 

Display multiple data in same or similar format.
You can sort, filter, compare or other custom actions on your data.



### Basic Table

Usage with basic table.

:::demo 
When set attribute `data` of component `el-table` with an object array, you can set attribute `property` to correspond to the key of object in the data array in `el-table-column`, and set the attribute `label` to define the column name.
You can also use the attribute `width` to define the width of columns.

```html
  <template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        property="date"
        label="Date"
        width="180">
      </el-table-column>
      <el-table-column
        property="name"
        label="Name"
        width="180">
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
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }]
        }
      }
    }
  </script>
```
:::

### Strped Table

Striped table adds zebra-stripes to a table, so you can easily distinguish between different rows of data.

:::demo
Attribute `stripe` could get it. It accepts a `Boolean` parameter, whose default value is false. Set it to true to turn it on.
```html
<template>
  <el-table
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      property="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="180">
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
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }]
      }
    }
  }
</script>
```
:::

### Table with border

:::demo 
By default, table component has no border in vertical. If you need it, you can set attribute `border` to `Boolean` value true. It accepts boolean type value. Turn on it by setting to `true`.

```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      property="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="180">
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
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }]
      }
    }
  }
</script>
```
:::

### Table with status

You can highlight your table content to distinguish between "success, information, warning, danger" and others.


:::demo 
Add customer background color to display the line in certain status.  If some line has the field which is true in the array `custom-criteria`, it will be set the corresponding background color in the array `custom-background-colors`.
```html
<template>
  <el-table
    :data="tableData2"
    style="width: 100%"
    :custom-criteria="['$info', '$positive']"
    :custom-background-colors="['#C9E5F5', '#E2F0E4']">
    <el-table-column
      property="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="180">
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
        tableData2:  [{
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing',
            $info: true
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu',
            $positive: true
          }]
      }
    }
  }
</script>
```
:::

### Table with fixed header

When there are too many rows with so much data in vertical orientation, you could use a fixed header.

:::demo 
By setting the atrribute `height` of element `el-table`, you can fix the table header without any othercodes.
```html
<template>
  <el-table
    :data="tableData3"
    height="250"
    border
    style="width: 100%">
    <el-table-column
      property="date"
      label="Date"
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="180">
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
        tableData3: [{
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }]
      }
    }
  }
</script>
```
:::

### Table with fixed column 

When so many columns and so much data in horizontal orientation, you can set the first column fixed.

:::demo 
Set the attribute `fixed-column-count`, it accepts a `Number` which indicates the number of columns to be fixed from the left.
```html
<template>
  <el-table
    :data="tableData"
    :fixed-column-count="1"
    border
    style="width: 100%">
    <el-table-column
      property="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="state"
      label="state"
      width="120">
    </el-table-column>
    <el-table-column
      property="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      property="zip"
      label="Zip"
      width="120">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### Table with fixed columns and header 

When so much data in vertical and horizontal orientation, you could set certain column and header fixed.

:::demo  Fix columns and header at the same time with set attribute at the same time.
```html
<template>
  <el-table
    :data="tableData3"
    :fixed-column-count="1"
    border
    style="width: 100%"
    height="250">
    <el-table-column
      property="date"
      label="Date"
      width="150">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="120">
    </el-table-column>
    <el-table-column
      property="state"
      label="state"
      width="120">
    </el-table-column>
    <el-table-column
      property="city"
      label="City"
      width="120">
    </el-table-column>
    <el-table-column
      property="address"
      label="Address"
      width="300">
    </el-table-column>
    <el-table-column
      property="zip"
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
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          state: 'Shanghai',
          city: 'Putuo district',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }]
      }
    }
  }
</script>
```
:::

### Single Select

When select a row , display with certain background color.

:::demo 
You can choose one row or more with the table component. You can select one row (`single`) or several rows(`multiple`) by setting the attribute `selection-mode`. If you don't need it, set it to `none`.  `selectselectionchange` event will be triggered when the table row is selected. It accepts a parameter `value` which is the corresponding object when the table is generated.  The example below shows the attribute `allow-no-selection`, which accepts a `Boolean` type. If `true`, it is allowed to be empty. With setting to `false` by default, the default value the first object of the data array. If you wanna display index, you can add a new element `el-table-column`. Set attribute `type` to `index`, you will see the index  starting with 1 .
```html
<template>
  <el-table
    :data="tableData"
    selection-mode="single"
    @selectionchange="handleSelectionChange"
    style="width: 100%"
    allow-no-selection>
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
            date: '2016-05-02',
            name: 'Jack',
            address: 'Shanghai'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
          }, {
            date: '2016-05-04',
            name: 'Lily',
            address: 'Beijing'
          }, {
            date: '2016-05-01',
            name: 'Nathan',
            address: 'Guangzhou'
          }, {
            date: '2016-05-03',
            name: 'Natalia',
            address: 'Chengdu'
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
:::

### Multiple Select

Use Checkbox to choose multiple options.


:::demo 
There is not much difference between Multiple Select and Single Select, except that the argument in the` selectionchange` event is changed from object to object array. A column is needed to display the checkbox: manually adding an `el-table-column`, and setting the` type` to `selection`. Attributes `inline-template` and `show-tooltip-when-overflow` are used to show other Attributes in the example below. 

When the attribute `inline-template` is set, you can use the object of `row` to replace the setting of attribute `property`.

By default, if the content is too much, the extra content will display in the new line. If you wanna show content in one line, use attribute `show-tooltip-when-overflow`, which accepts the `Boolean` type. When set true the extra content will show in tooltip when hover on it.



```html
<template>
  <el-table
    :data="tableData3"
    selection-mode="multiple"
    style="width: 100%"
    @selectionchange="handleMultipleSelectionChange">
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
      show-tooltip-when-overflow>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData3:  [{
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
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

### Order

Sort the data to find or compare data quickly.

:::demo 
Set attribute `sortable` to a certain column to sort the data 
based on the column . It accepts the `Boolean` type with an default value `false`. In the example below we use  attribute `formatter` to format the value of certain column. It accepts a function which has two parameters: `row` and `column`. You can handle it according to your own needs.
```html
<template>
  <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      property="date"
      label="Date"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      property="name"
      label="Name"
      width="180">
    </el-table-column>
    <el-table-column
      property="address"
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
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
        }, {
          date: '2016-05-03',
          name: 'Jack',
          address: 'Putuo District of Shanghai Jinsha River Road 1518 Lane',
          zip: 'CA 90036'
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

### Table Attributes
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| data | data to display | array | — | — |
| height | table 's height, default is null, meaning height is set automatically | string | — | — |
| stripe | whether stripe table or not| boolean | — | false |
| border | whether has border in vertical orientation or not | boolean | — | false |
| fit | whether width of column automatically distract or not | boolean | — | true |
| selection-mode | select mode | string | single/multiple/none | none |
| allow-no-selection | whether is allowed to be empty or not in Single Select | boolean | — | false |
| fixed-column-count | fixed columns counts | number | — | 0 |

### Table Events
| Event | Description | Paramters |
| ---- | ---- | ---- |
| selectionchange | triggered when selection changes    | selected |
| cellmouseenter | triggered when hovering on cell| row, column, cell, event |
| cellmouseleave | triggered when hovering leave cell | row, column, cell, event |
| cellclick | triggered when clicking cell| row, column, cell, event |

### Table-column Attributes
| Paramters      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | title | string | — | — |
| property |  field name corresponding to the column name | string | — | — |
| width | column width | string | — | — |
| sortable | whether can be sort or not | boolean | — | false |
| resizable | whether width of the column will change when dragged (If need it, you should set attribute `border` of `el-table` to true) ） | boolean | — | false |
| type | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring with 1)  | string | selection/index | — |
| formatter | function that formats content, which has two parameters row and column | function | — | — |
| show-tooltip-when-overflow | if cell content is too long , the extra content will hide. Hovering on it the extra content will show in tooltip | Boolean | — | false |
| inline-template | when using the attribute, you could customize the content which the column. Refer to the date column in Multiple Select, getting row data by `row` object, getting current context by _self in JSX. In this case you don't need set the attribute `property`. | — | — |
| align | Alignment | String | left, center, right | left |





