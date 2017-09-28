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

  .page-component .content > ul.icon-list {
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

## Icon

Element provides a set of common icons.

### Basic usage

Just assign the class name to `el-icon-iconName`.

:::demo

```html
<i class="el-icon-edit"></i>
<i class="el-icon-share"></i>
<i class="el-icon-delete"></i>
<el-button type="primary" icon="search">Search</el-button>

```
:::

### Icons

<ul class="icon-list">
  <li v-for="name in icons" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      {{'el-icon-' + name}}
    </span>
  </li>
</ul>

### Third-party icons

Some of Element's components has an `icon` attribute, e.g. Input. If you want to use a third-party icon in the `icon` attribute, here's what you need to do:
<p>
  <span>1.</span> Modify the class name prefix of the third-party library
</p>

Please read third-party icon library documentation on how to do it. For example, if you're using [iconfont.cn](http://iconfont.cn/), you can find prefix editor in the "Edit Project" dialog. If you're using [Font Awesome](http://fontawesome.io/), you can refer to [this demo](https://github.com/ElementUI/element-font-awesome).

<p>
  <span>2.</span> Add some CSS:
</p>

```CSS
[class^="el-icon-my"], [class*=" el-icon-my"] {
font-family:"your-font-family" !important;

/* The following is based on original CSS rules of third-party library */
font-size: inherit;
font-style:normal;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
```

Now you can use them as you do with Element built-in icons. For example, in el-input:

```html
<el-input icon="my-xxx" />
```