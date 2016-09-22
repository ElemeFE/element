<style>
  .demo-box.demo-menu {
    .el-menu-demo {
      padding-left: 55px;
    }
    .el-menu-vertical-demo {
      width: 200px;
      height: 400px;
    }
    .line {
      height: 1px;
      background-color: #e0e6ed;
      margin: 35px -24px;
    }
    h5 {
      font-size: 14px;
      color: #8492a6;
      margin-top: 10px;
    }
    .tac {
      text-align: center;

      .el-menu-vertical-demo {
        display: inline-block;
        text-align: left;
      }
    }
  }
</style>

<script>
  export default {
    methods: {
      handleopen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleclose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleselect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

## NavMenu 导航菜单

为网站提供导航功能的菜单。

### 顶栏

适用广泛的基础用法。

::: demo
```html
<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">订单管理</el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">处理中心</el-menu-item>
  <el-submenu index="2">
    <template slot="title">我的工作台</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">订单管理</el-menu-item>
</el-menu>
```
:::

### 侧栏

垂直菜单，可内嵌子菜单。

::: demo
```html
<el-row class="tac">
  <el-col :span="8">
    <h5>带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>不带 icon</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">
      <el-submenu index="1">
        <template slot="title">导航一</template>
        <el-menu-item-group title="分组一">
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">导航二</el-menu-item>
      <el-menu-item index="3">导航三</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>分组</h5>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="分组一">
        <el-menu-item index="1"><i class="el-icon-message"></i>导航一</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>导航二</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组二">
        <el-menu-item index="3"><i class="el-icon-message"></i>导航三</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>导航四</el-menu-item>
        <!-- <el-submenu index="5">
          <template slot="title">导航五</template>
          <el-menu-item-group title="分组一">
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组二">
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
      </el-menu-item-group>
    </el-menu>
  </el-col>
</el-row>
```
:::

### Menu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal,vertical   | vertical |
| theme     | 主题色   | string    | light,dark | light |
| default-active | 当前激活菜单的 index | string    | — | — |
| default-openeds | 当前打开的submenu的 key 数组 | Array    | — | — |
| unique-opened  | 是否只保持一个子菜单的展开 | boolean   | — | false   |
| router  | 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 | boolean   | — | false   |

### Menu Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| select  | 菜单激活回调 | index: 选中菜单项的 indexPath: 选中菜单项的 index path  |
| open  | SubMenu 展开的回调 | index: 打开的 subMenu 的 index， indexPath: 打开的 subMenu 的 index path  |
| close  | SubMenu 收起的回调 | index: 收起的 subMenu 的 index， indexPath: 收起的 subMenu 的 index path  |

### SubMenu Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |

### Menu-Item Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | 唯一标志   | string  | — | — |

### Menu-Group Attribute
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | 分组标题   | string  | — | — |
