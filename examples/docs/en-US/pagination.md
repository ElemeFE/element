## Pagination 

When the amount of data is too large, use pagination to page data.

### How to use

:::demo Setting `layout` to indicate the content to be displayed. With commas seperator, layout elements will be displayed in order. `prev` represents the previous page. `next` represents the next page. `pager` represents a list of page numbers. In addition, it provides `jumper`, `total`, `size` and `->`(a special layout symbol). Elements following `->` will be displayed on the right. `jumper` represents jumping the page element. `total` represents the total number of pages displayed. `size` is used to set the number of pages displayed per page.
```html
<div class="block">
  <span class="demonstration">Fewer Pages.</span>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
</div>
<div class="block">
  <span class="demonstration">Effect that more than 7 Pages.</span>
    <el-pagination
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</div>
```
:::

### Small Pagination

Use simple small pagination in the case of limited space.

:::demo Just one `small` attribute is needed. The attribute is a `Boolean` type whose default value is `false`. It works when set `true`.
```html
<el-pagination
  small
  layout="prev, pager, next"
  :total="50">
</el-pagination>
```
:::

### Additional

According to the needs of the scene, you can add other functional modules.

:::demo This example is a complete use case. It uses `sizechange` and `currentchange` event to handle the page number and the events that fire when the current page changes. `page-sizes` accepts an array of integers whose elements are options to show the number of choices displayed per page. `[100, 200, 300, 400]` indicates four options, showing 100, 200, 300 or 400 per page.

```html
<template>
  <div class="block">
    <span class="demonstration">The total number to be displayed</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Adjust the number of pages per page</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Jump directly</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-size="100"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
  <div class="block">
    <span class="demonstration">Full functionality</span>
    <el-pagination
      @sizechange="handleSizeChange"
      @currentchange="handleCurrentChange"
      :current-page="5"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    }
  }
</script>
```
:::
<script>
  export default {
    methods: {
      handleSizeChange(val) {
        console.log(`${val} items per page`);
      },
      handleCurrentChange(val) {
        console.log(`current page: ${val}`);
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let firstDemo = demos[0];
        let lastDemo = demos[demos.length - 1];
        firstDemo.classList.add('first');
        lastDemo.classList.add('last');
      });
    }
  }
</script>
<style>
  .demo-pagination .source.first {
    padding: 0;
    display: flex;
  }

  .demo-pagination .first .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

  .demo-pagination .first .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .demo-pagination .source.last {
    padding: 0;
  }

  .demo-pagination .last .block {
    padding: 30px 24px;
    border-bottom: solid 1px #EFF2F6;
    &:last-child {
      border-bottom: none;      
    }
  }

  .demo-pagination .last .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demo-pagination .last .demonstration + .el-pagination {
    float: right;
    width: 70%;
    margin: 5px 20px 0 0;
  }
</style>


### Attributes
| Attribute               | Description                                                     | Type              | Options      | Default |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| small              |   Whether to use small pagination    | Boolean |      —       | false |
| page-size              | The number of entries per page                                                   | Number |      —       | 10 |
| total | The total number of entries | Number | — | 0 |
| current-page | The current page count | Number | — | 0|
| layout | Component layout, subcomponents separated by commas. | String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total` | 'prev, pager, next, jumper, ->, total'  |
| page-sizes | Options showing the number of selector per page | Number[] | — |  [10, 20, 30, 40, 50, 100] |

### Events
| Event | Description | Callback |
|---------|--------|---------|
| sizechange | triggered when pageSize changed | The number of entries per page `size` |
| currentchange | triggered when currentPage changed | `currentPage` |


