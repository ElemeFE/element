<style>
  .demo-box .nav {
    background-color: #eff2f7;
    line-height: 60px;
    @utils-clearfix;

    h1 {
      font-size: 20px;
      color: #1f2f3d;
      float: left;
      margin: 0 25px 0 20px;
    }
    > .el-menu {
      float: left;
    }
    &-right {
      float: right;
      padding-right: 20px;
    }
    .nav__button {
      font-size: 24px;
      vertical-align: middle;
      margin-left: 20px;
      cursor: pointer;
      display: inline-block;
      position: relative;
      color: #8492a6;

      i {
        vertical-align: middle;
        display: block;
      }

      &.is-unread:after {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: -2px;
        right: -4px;
        border-radius: 50%;
        background-color: #ff4949;
      }
    }
    .el-input {
      display: inline-block;
    }
    .el-input__inner {
      background-color: #e5e9f2;
      border-color: #d3dce6;

      &:focus {
        border-color: #20a0ff;
      }
    }

    &.nav-dark {
      background-color: #324057;

      h1 {
        color: #fff;
      }

      .nav__button {
        color: #fff;
      }
      .el-input__inner {
        background-color: #1f2d3d;
        border-color: #1f2d3d;
        color: #fff;

        &:focus {
          border-color: #1f2d3d;
        }
      }
    }
  }
  .demo-box .nav-vertical {
    h1 {
      float: none;
    }
    .el-menu--vertical {
      float: none;
    }
  }
</style>

<script>
  export default {
    data() {
      return {
        search: '',
        search2: ''
      };
    },
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

## 基础用法

<div class="demo-box">
  <div class="nav">
    <h1>Element</h1>
    <el-menu active-key="2">
      <el-menu-item key="1">处理中心</el-menu-item>
      <el-menu-item key="2">我的工作台</el-menu-item>
      <el-menu-item key="3">订单管理</el-menu-item>
    </el-menu>
    <div class="nav-right">
      <el-input placeholder="搜索用户手机号" icon="search" :value="search"></el-input>
      <span class="nav__button is-unread">
        <i class="el-icon-message"></i>
      </span>
      <span class="nav__button">
        <i class="el-icon-setting"></i>
      </span>
    </div>
  </div>
</div>

```html
<div class="nav">
  <h1>Element</h1>
  <el-menu active-key="1">
    <el-menu-item key="1">处理中心</el-menu-item>
    <el-menu-item key="2">我的工作台</el-menu-item>
    <el-menu-item key="3">订单管理</el-menu-item>
  </el-menu>
  <div class="nav-right">
    <el-input placeholder="搜索用户手机号" icon="search" :value="search"></el-input>
    <span class="nav__button is-unread">
      <i class="el-icon-message"></i>
    </span>
    <span class="nav__button">
      <i class="el-icon-setting"></i>
    </span>
  </div>
</div>
```

<div class="demo-box">
  <div class="nav nav-dark">
    <h1>Element</h1>
    <el-menu theme="dark" active-key="1">
      <el-menu-item key="1">处理中心</el-menu-item>
      <el-menu-item key="2">我的工作台</el-menu-item>
      <el-menu-item key="3">订单管理</el-menu-item>
    </el-menu>
    <div class="nav-right">
      <el-input placeholder="搜索用户手机号" icon="search" :value="search2"></el-input>
      <span class="nav__button is-unread">
        <i class="el-icon-message"></i>
      </span>
      <span class="nav__button">
        <i class="el-icon-setting"></i>
      </span>
    </div>
  </div>
</div>

```html
<div class="nav nav-dark">
  <h1>Element</h1>
  <el-menu theme="dark" active-key="1">
    <el-menu-item key="1">处理中心</el-menu-item>
    <el-menu-item key="2">我的工作台</el-menu-item>
    <el-menu-item key="3">订单管理</el-menu-item>
  </el-menu>
  <div class="nav-right">
    <el-input placeholder="搜索用户手机号" icon="search" :value="search2"></el-input>
    <span class="nav__button is-unread">
      <i class="el-icon-message"></i>
    </span>
    <span class="nav__button">
      <i class="el-icon-setting"></i>
    </span>
  </div>
</div>
```

## 侧边栏导航

<div class="demo-box" style="width: 200px;">
  <div class="nav nav-vertical">
    <h1>Element</h1>
    <el-menu mode="vertical" active-key="2-1">
      <el-menu-item key="1"><i class="el-icon-message"></i>导航一</el-menu-item>
      <el-submenu key="sub1">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item key="2-1">选项1</el-menu-item>
        <el-menu-item key="2-2">选项2</el-menu-item>
        <el-menu-item key="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu key="sub2">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item key="3-1">选项1</el-menu-item>
        <el-menu-item key="3-2">选项2</el-menu-item>
        <el-menu-item key="3-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</div>

```html
<div class="nav nav-vertical">
  <h1>Element</h1>
  <el-menu mode="vertical" active-key="2-1">
    <el-menu-item key="1"><i class="el-icon-message"></i>导航一</el-menu-item>
    <el-submenu key="sub1">
      <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      <el-menu-item key="2-1">选项1</el-menu-item>
      <el-menu-item key="2-2">选项2</el-menu-item>
      <el-menu-item key="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu key="sub2">
      <template slot="title"><i class="el-icon-setting"></i>导航三</template>
      <el-menu-item key="3-1">选项1</el-menu-item>
      <el-menu-item key="3-2">选项2</el-menu-item>
      <el-menu-item key="3-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</div>
```

<div class="demo-box" style="width: 200px;">
  <div class="nav nav-vertical nav-dark">
    <h1>Element</h1>
    <el-menu mode="vertical" theme="dark" :opened-keys="['sub3']" active-key="3-1" :unique-opend="true" @open="handleopen" @close="handleclose" @select="handleselect">
      <el-menu-item key="1"><i class="el-icon-message"></i>导航一</el-menu-item>
      <el-submenu key="sub2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item key="2-1">选项1</el-menu-item>
        <el-menu-item key="2-2">选项2</el-menu-item>
        <el-menu-item key="2-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu key="sub3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item key="3-1">选项1</el-menu-item>
        <el-menu-item key="3-2">选项2</el-menu-item>
        <el-menu-item key="3-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu key="sub4">
        <template slot="title"><i class="el-icon-setting"></i>导航四</template>
        <el-menu-item key="4-1">选项1</el-menu-item>
        <el-menu-item key="4-2">选项2</el-menu-item>
        <el-menu-item key="4-3">选项3</el-menu-item>
      </el-submenu>
      <el-submenu key="sub5">
        <template slot="title"><i class="el-icon-setting"></i>导航五</template>
        <el-menu-item key="5-1">选项1</el-menu-item>
        <el-menu-item key="5-2">选项2</el-menu-item>
        <el-menu-item key="5-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</div>

```html
<div class="nav nav-vertical nav-dark">
  <h1>Element</h1>
  <el-menu mode="vertical" theme="dark" active-key="3-1">
    <el-menu-item key="1"><i class="el-icon-message"></i>导航一</el-menu-item>
    <el-submenu key="sub1">
      <template slot="title"><i class="el-icon-menu"></i>导航二</template>
      <el-menu-item key="2-1">选项1</el-menu-item>
      <el-menu-item key="2-2">选项2</el-menu-item>
      <el-menu-item key="2-3">选项3</el-menu-item>
    </el-submenu>
    <el-submenu key="sub2">
      <template slot="title"><i class="el-icon-setting"></i>导航三</template>
      <el-menu-item key="3-1">选项1</el-menu-item>
      <el-menu-item key="3-2">选项2</el-menu-item>
      <el-menu-item key="3-3">选项3</el-menu-item>
    </el-submenu>
  </el-menu>
</div>
```

## menu API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | 模式   | string  |   horizontal,vertical   | horizontal |
| theme     | 主题色   | string    | light,dark | light |
| activeKey | 当前激活菜单的 key | string    |  |    |
| openedKeys | 当前打开的submenu的 key 数组 | Array    |  |    |
| uniqueOpend  | 是否只保持一个子菜单的展开 | boolean   | true, false   | false   |
| router  | 是否使用 vue-router 的模式，启用该模式会在 select 事件触发时执行 this.$route.$router.go(key) 进行路由跳转 | boolean   | true, false   | false   |
| select  | 菜单激活回调 | function(key, keyPath)   |    |    |
| open  | SubMenu 展开的回调 | function(key, keyPath)   |    |    |
| close  | SubMenu 收起的回调 | function(key, keyPath)   |    |    |

## submenu API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| key     | 唯一标志   | string  |      |  |

## menu-item API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| key     | 唯一标志   | string  |      |  |
