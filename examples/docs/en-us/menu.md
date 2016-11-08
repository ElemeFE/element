<style>
  .demo-box.demo-menu {
    .el-menu-demo {
      padding-left: 55px;
    }
    .el-menu-vertical-demo {
      width: 200px;
      min-height: 400px;
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

## NavMenu

Menu that provides navigation for your website.

### Top bar

Top bar NavMenu can be used in a variety of scenarios.

::: demo
```html
<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">Orders</el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">Processing Center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">Workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">Orders </el-menu-item>
</el-menu>
```

:::

### Side bar

Vertical NavMenu with sub-menus.

::: demo
```html
<el-row class="tac">
  <el-col :span="8">
    <h5>With icons</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>Navigator One</template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>Navigator Two</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>Navigator Three</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>Without icons</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">
      <el-submenu index="1">
        <template slot="title">Navigator One</template>
        <el-menu-item-group title="Group One">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">Navigator Two</el-menu-item>
      <el-menu-item index="3">Navigator Three</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>Groups</h5>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="Group One">
        <el-menu-item index="1"><i class="el-icon-message"></i>Navigator One</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>Navigator Two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="3"><i class="el-icon-message"></i>Navigator Three</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>Navigator Four</el-menu-item>
          <!-- <el-submenu index="5">
            <template slot="title">Navigator Five</template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="5-1">item one</el-menu-item>
              <el-menu-item index="5-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="5-3">item three</el-menu-item>
            </el-menu-item-group>
          </el-submenu> -->
      </el-menu-item-group>
    </el-menu>
  </el-col>
</el-row>
```
:::

### Menu Attribute
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | menu display mode   | string  |   horizontal/vertical   | vertical |
| theme     | theme color   | string    | light/dark | light |
| default-active | index of currently active menu | string    | — | — |
| default-openeds | array that contains keys of currently active sub-menus  | Array    | — | — |
| unique-opened  |  whether only one sub-menu can be active  | boolean   | — | false   |
| menu-trigger | how sub-menus are triggered, only works when `mode` is 'horizontal' | string    | — | hover |
| router  | whether `vue-router` mode is activated. If true, index will be used as 'path' to activate the route action | boolean   | — | false   |


### Menu Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| select  | callback function when menu is activated | index: index of activated menu, indexPath: index path of activated menu  |
| open  | callback function when sub-menu expands | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu |
| close  | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu |

### SubMenu Attribute
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | unique identification   | string  | — | — |

### Menu-Item Attribute
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| index     | unique identification   | string  | — | — |
| route     | Vue Router object   | object | — | — |

### Menu-Group Attribute
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| title     | group title   | string  | — | — |







