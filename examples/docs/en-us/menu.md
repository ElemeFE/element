# NavMenu

Menu that provides navigation for your website.

---

### Top bar

Basic usages that can be used in a variety of scenarios

::: demo

```html
<el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">processing center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">orders</el-menu-item>
</el-menu>
<div class="line"></div>
<el-menu default-active="1" class="el-menu-demo" mode="horizontal" @select="handleselect">
  <el-menu-item index="1">processing center</el-menu-item>
  <el-submenu index="2">
    <template slot="title">workspace</template>
    <el-menu-item index="2-1">item one</el-menu-item>
    <el-menu-item index="2-2">item two</el-menu-item>
    <el-menu-item index="2-3">item three</el-menu-item>
  </el-submenu>
  <el-menu-item index="3">orders </el-menu-item>
</el-menu>
```

:::

##Side bar

Vertical menu which has submenus

::: demo

```html
<el-row class="tac">
  <el-col :span="8">
    <h5>WITH ICON</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>navigator one</template>
        <el-menu-item-group title="group one">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item one</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="group two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>navigator two</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>navigator three</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>WITHOUT ICON</h5>
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" theme="dark">
      <el-submenu index="1">
        <template slot="title">navigator one</template>
        <el-menu-item-group title="group one">
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="group two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">navigator two</el-menu-item>
      <el-menu-item index="3">navigator three</el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="8">
    <h5>GROUP</h5>
    <el-menu mode="vertical" default-active="1" class="el-menu-vertical-demo">
      <el-menu-item-group title="group one">
        <el-menu-item index="1"><i class="el-icon-message"></i>navigator one</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-message"></i>navigator two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="group two">
        <el-menu-item index="3"><i class="el-icon-message"></i>navigator three</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-message"></i>navigator four</el-menu-item>
      </el-menu-item-group>
    </el-menu>
  </el-col>
</el-row>
```

:::




### Menu Attribute
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| mode     | menu display mode   | string  |   horizontal,vertical   | vertical |
| theme     | theme color   | string    | light,dark | light |
| default-active | the index of active menu | string    | — | — |
| default-openeds | array that contains keys of current active submenu   | Array    | — | — |
| unique-opened  |  keep only one submenu opened or not  | boolean   | — | false   |
| router  | work with `vue-router` or not. if it was set to true, index will be used as the 'path' to activate the route action | boolean   | — | false   |


### Menu Events
| Event      | Description    | Callback Paramters      |
|---------- |-------- |---------- |
| select  | callback function when activate menu | index: index of selected menu ,indexPath:  index path of selected menu  |
| open  | callback function when SubMenu expand | index:   index of expanded subMenu,  indexPath:  index path of expanded subMenu |
| close  | callback function when SubMenu collapse | index:  index of menu collapsed,  indexPath:  index path of subMenu collapsed  |

### SubMenu Attribute
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Unique Identification   | string  | — | — |

### Menu-Item Attribute
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| index     | Unique Identification   | string  | — | — |

### Menu-Group Attribute
| Attribute      | Description    | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| title     | Group Title   | string  | — | — |







