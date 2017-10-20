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
  .demo-icon .source > i {
    color: #8492a6;
    margin: 0 20px;
    font-size: 1.5em;
    vertical-align: middle;
  }
  
  .demo-icon .source > button {
    margin: 0 20px;
  }

  .icon-list {
    overflow: hidden;
    list-style: none;
    padding: 0;
    border: solid 1px #eaeefb;
    border-radius: 4px;
  }
  .icon-list li {
    float: left;
    width: 16.66%;
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
      font-family: 'Helvetica Neue',Helvetica,'PingFang SC','Hiragino Sans GB','Microsoft YaHei',SimSun,sans-serif;
      color: #99a9bf;
    }
    & i {
      display: block;
      font-size: 24px;
      margin-bottom: 15px;
      color: #8492a6;
    }
    &:hover {
      color: rgb(92, 182, 255);
    }
  }
</style>
## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `el-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">搜索</el-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      {{'el-icon-' + name}}
    </span>
  </li>
</ul>

### 第三方图标库

Element 的一些组件提供了 `icon` 属性（如 Input），如果希望传入第三方图标库中的图标，需要进行如下操作：
<p>
  <span>1.</span> 修改第三方图标库的前缀（见下方说明）
</p>
<p>
  <span>2.</span> 添加以下 CSS：
</p>

```CSS
[class^="el-icon-my"], [class*=" el-icon-my"] {
  font-family:"your-font-family" !important;
  
  /* 以下内容参照第三方图标库本身的规则 */
  font-size: inherit;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

之后就可以像使用 Element 内置图标一样使用第三方图标。比如在 el-input 中：

```html
<el-input icon="my-xxx" />
```

关于如何修改第三方图标库的前缀，请参阅第三方图标库的文档。比如，如果使用 [iconfont.cn](http://iconfont.cn/)，则可以在「编辑项目」弹框中修改；如果使用 [Font Awesome](http://fontawesome.io/)，可以参考[这个示例](https://github.com/ElementUI/element-font-awesome)。