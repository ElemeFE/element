<style>
  .demo-box {
    .el-dropdown {
      vertical-align: top;

      & .el-button-group {
        margin-bottom: 0;
      }
      & + .el-dropdown {
        margin-left: 15px;
      }
    }
  }

  .demo-dropdown .block {
    display: inline-block;
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px #EFF2F6;
    flex: 1;
    &:last-child {
      border-right: none;
    }
  }

 .demo-dropdown .demonstration {
   display: block;
   color: #8492a6;
   font-size: 14px;
   margin-bottom: 20px;
 }
</style>

<script>
  export default {
    methods: {
      handleMainClick() {
        alert('click main button');
      }
    },
    mounted() {
      this.$nextTick(() => {
        let demos = document.querySelectorAll('.source');
        let lastDemo = demos[demos.length - 1];
        lastDemo.style.padding = '0';
        lastDemo.style.display = 'flex';
      });
    }
  }
</script>
## Dropdown 下拉菜单

将动作或菜单折叠到下拉菜单中。

### 基础用法

移动到下拉菜单上，展开更多操作。

:::demo 通过`text`属性来设置按钮文字。默认条件下，他由一个主要按钮和一个下拉按钮组成，`el-dropdown`中的主要按钮同样可以设置点击事件，只要使用`mainclick`事件即可。默认情况下，下拉按钮只要`hover`即可，无需点击也会显示下拉菜单。

```html
<el-dropdown text="下拉菜单" type="text" :icon-separate="false" @mainclick="handleMainClick()">
  <el-dropdown-item>黄金糕</el-dropdown-item>
  <el-dropdown-item>狮子头</el-dropdown-item>
  <el-dropdown-item>螺蛳粉</el-dropdown-item>
  <el-dropdown-item>双皮奶</el-dropdown-item>
  <el-dropdown-item>蚵仔煎</el-dropdown-item>
</el-dropdown>
```
:::

### 触发对象

可使用按钮触发下拉菜单。

:::demo 设置`icon-separate`属性来呈现不带独立按钮的下拉菜单，设置为`false`即可。在选项三和选项四中插入了一条分割线，只需要在选项四中设置`class`为`divider`。

```html
<el-dropdown text="更多菜单" type="primary" :icon-separate="false">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item class="divider">选项四</el-dropdown-item>
</el-dropdown>

<el-dropdown text="主要按钮" type="primary" @mainclick="handleMainClick()">
  <el-dropdown-item>选项一</el-dropdown-item>
  <el-dropdown-item>选项二</el-dropdown-item>
  <el-dropdown-item>选项三</el-dropdown-item>
  <el-dropdown-item>选项四</el-dropdown-item>
</el-dropdown>
```
:::

### 触发方式

可以配置 click 激活或者 hover 激活。

:::demo 在`trigger`属性设置为`click`即可。
```html
<div class="block">
  <span class="demonstration">hover 激活</span>
  <el-dropdown text="下拉菜单" type="text" :icon-separate="false" trigger="hover">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item>选项四</el-dropdown-item>
  </el-dropdown>
</div>
<div class="block">
  <span class="demonstration">click 激活</span>
  <el-dropdown text="下拉菜单" type="text" :icon-separate="false" trigger="click">
    <el-dropdown-item>选项一</el-dropdown-item>
    <el-dropdown-item>选项二</el-dropdown-item>
    <el-dropdown-item>选项三</el-dropdown-item>
    <el-dropdown-item class="divider">选项四</el-dropdown-item>
  </el-dropdown>
</div>
```
:::

### Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| text          | 菜单按钮文本      | string          |          —             |    —     |
| type          | 菜单按钮类型，同 Button 组件   | string  |          —             |    —     |
| trigger       | 触发下拉菜单的方式    | string  |    hover,click  |  hover |
| icon-separate | 独立的下拉菜单按钮 | boolean         |     —       | false   |
| size          | 菜单按钮尺寸，同 Button 组件     | string          | large, small, mini  |  —  |
| menu-align    | 菜单水平对齐方向     | string          | start, end  | end |
