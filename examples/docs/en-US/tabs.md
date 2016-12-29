<script>
  export default {
    data() {
      return {
        activeName: 'first',
        activeName2: 'first',
        tabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2
      }
    },
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

## Tabs

Divide data collections which are related yet belong to different types.

### Basic usage

Basic and concise tabs.

:::demo Tabs provide a selective card functionality. By default the first tab is selected as active, and you can activate any tab by setting the `value` attribute.

```html
<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Card Style

Tabs styled as cards.

:::demo Set `type` to `card` can get a card-styled tab.

```html
<template>
  <el-tabs type="card" @tab-click="handleClick">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```
:::

### Closable

Closable tabs.

:::demo You can set the closable attribute in el-tabs to make all tabs closable. Also, closable can be set in a tab panel to make that specific tab closable.

```html
<template>
  <el-tabs type="card" :closable="true" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="User">User</el-tab-pane>
    <el-tab-pane label="Config">Config</el-tab-pane>
    <el-tab-pane label="Role">Role</el-tab-pane>
    <el-tab-pane label="Task">Task</el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
```

:::

### Border card

Border card tabs.

:::demo Set `type` to `border-card`.

```html
<el-tabs type="border-card">
  <el-tab-pane label="User">User</el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```

:::

### Custom Tab

You can use named slot to customize the tab label content.

:::demo
```html
<el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-date"></i> Route</span>
    Route
  </el-tab-pane>
  <el-tab-pane label="Config">Config</el-tab-pane>
  <el-tab-pane label="Role">Role</el-tab-pane>
  <el-tab-pane label="Task">Task</el-tab-pane>
</el-tabs>
```
:::

### Tabs Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| type     | type of Tab | string   | card/border-card  |     —    |
| closable  | whether Tab is closable | boolean   | — |  false  |
| active-name(deprecated)  | name of the selected tab  | string   |  —  |  name of first tab |
| value  | name of the selected tab  | string   |  —  |  name of first tab |

### Tabs Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| tab-click  | triggers when a tab is clicked | clicked tab |
| tab-remove  | triggers when a tab is removed  | removed tab |

### Tab-pane Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| label     | title of the tab   | string   | — |    —     |
| disabled | whether Tab is disabled | boolean | - | false |
| name      | identifier corresponding to the activeName of Tabs, representing the alias of the tab-pane | string | — | ordinal number of the tab-pane in the sequence, i.e. the first tab-pane is '1' |
| closable  | whether Tab is closable | boolean   | — |  false  |
