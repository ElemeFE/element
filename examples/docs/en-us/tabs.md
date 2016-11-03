## Tabs

Divide data collections which have related contents however belong to different types.

### How to use

Basic and concise tabs.

:::demo Tabs provide a selective card functionality and it can be achieved only by using `el-tabs` and child element `el-tab-pane`. In these two elements, we provide a list of attributes. The `label` in `el-tab-pane` determines the label of selective cards, you can write content in the label; In the next example, we add a `active-name` attribute in `el-tabs`, which can take a `String` value. It means an active card. In the `el-tab-pane` you can set corresponding `name` attribute,if there is no `name`, then the default sequence is `1`/`2`/`3`/`4`. In the example, the selected card is card 2. Since there's no `name`, then set `active-name` to `2` can reach the same goal.

```html
<template>
  <el-tabs>
    <el-tab-pane label="User Admin"></el-tab-pane>
    <el-tab-pane label="Config Admin"></el-tab-pane>
    <el-tab-pane label="Role Admin"></el-tab-pane>
    <el-tab-pane label="Task Compensation"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    }
  };
</script>
```
:::

### Card Style

Selective card style tabs.

:::demo Set `type` to `card` can get a selective card style tab.

```html
<template>
  <el-tabs type="card" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="User Admin"></el-tab-pane>
    <el-tab-pane label="Config Admin"></el-tab-pane>
    <el-tab-pane label="Role Admin"></el-tab-pane>
    <el-tab-pane label="Task Compensation"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
      }
    }
  };
</script>
```
:::

### Closable

Closable tabs.

:::demo You can set `closable` attribute in `el-tabs`.It accept `Boolean` and it will be closable when the boolean is `true`.

```html
<template>
  <el-tabs type="card" :closable="true" @tab-click="handleClick" @tab-remove="handleRemove">
    <el-tab-pane label="User Admin"></el-tab-pane>
    <el-tab-pane label="Config Admin"></el-tab-pane>
    <el-tab-pane label="Role Admin"></el-tab-pane>
    <el-tab-pane label="Task Compensation"></el-tab-pane>
  </el-tabs>
</template>
<script>
  export default {
    methods: {
      handleRemove(tab) {
        console.log(tab);
      },
      handleClick(tab) {
        console.log(tab);
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
  <el-tab-pane label="User Admin"></el-tab-pane>
  <el-tab-pane label="Config Admin"></el-tab-pane>
  <el-tab-pane label="Role Admin"></el-tab-pane>
  <el-tab-pane label="Task Compensation"></el-tab-pane>
</el-tabs>
```

:::

### Tabs Attributes
| Attribute       | Description     | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| type     | Tabs type   | string   | card, border-card  |     —    |
| closable  | If can close the tab   | boolean   | true, false |  false  |
| active-name  | Name of the selected card  | string   |  —  |  Name of first selective card |

### Tabs Events

| Event name | Description | Callback parameter |
|---------- |-------- |---------- |
| tab-click  | Hook function when tab is clicked | Clicked tab |
| tab-remove  | Hook function when tab is removed  | Removed tab |

### Tab-pane Attributes

| Attribute       | Description     | Type      | Options       | Default   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | Card label   | string   | — |    —     |
| name      | The identifier corresponding to the activeName of the selective card, representing the alias of the selective card | string | — | The ordinal number of the selective card in the sequence, i.e. the first one is '1' |
