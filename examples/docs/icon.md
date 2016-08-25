<script>
  var iconList = require('examples/icon.json');

  export default {
    data() {
      return {
        icons: iconList
      };
    }
  }
</script>
<style>
  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
  }
  .icon-list li {
    float: left;
    width: 20%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    transition: color .15s linear;

    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;

    @utils-vertical-center;

    & span {
      display: inline-block;
      line-height: normal;
      vertical-align: middle;
    }
    & i {
      display: block;
      font-size: 30px;
      margin-bottom: 15px;
    }
    &:hover {
      color: rgb(92, 182, 255);
      cursor: pointer;
    }
  }
</style>
## icon-font 图标

提供了一套常用的图标集合。

## 使用方法

直接通过设置类名为`el-icon-iconName`来使用即可。

:::demo
```html
<i class="el-icon-search"></i>
<el-button type="primary" icon="search">搜索</el-button>

```
:::

## 图标集合

下面是目前 Element 所有的图标集合：

<ul class="icon-list">
  <li v-for="name in icons">
    <span>
      <i :class="'el-icon-' + name"></i>
      {{'el-icon-' + name}}
    </span>
  </li>
</ul>
