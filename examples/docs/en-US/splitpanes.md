## Split Panes

This component split a space into panes.

### Basic usage

By setting `pane-size` to determine the percentage size of a pane. `pane-max` sets the maximum percentage size that can be adjusted by drag the splitter. `pane-min` sets the minimum percentage size that can be adjusted by drag the splitter.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Split vertical space

Add `is-vertical` to split a vertical space.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes" is-vertical>
    <el-pane pane-min="20" pane-max="70">
      <span>1</span>
    </el-pane>
    <el-pane>
      <span>2</span>
    </el-pane>
    <el-pane pane-max="70">
      <span>3</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::



### Combination

Nested split panes can be used to combine vertical and horizontal split panes.

:::demo
```html
<template>
  <el-splitpanes style="height: 400px" class="el-splitpanes">
    <el-pane pane-min="20">
      <span>1</span>
    </el-pane>
    <el-pane>
      <el-splitpanes is-vertical>
        <el-pane>
          <span>2</span>
        </el-pane>
        <el-pane>
          <span>3</span>
        </el-pane>
        <el-pane>
          <span>4</span>
        </el-pane>
      </el-splitpanes>
    </el-pane>
    <el-pane>
      <span>5</span>
    </el-pane>
  </el-splitpanes>
</template>
```
:::

### Splitpanes Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| is-expansive  | if true, splitters could push other panes  | Boolean   |  —  |  true |
| is-vertical  | if true, space is split vertically  | Boolean   |  —  |  false |
| has-leading-splitter  | if true, a leading splitter would show for double click to maximize first pane  | Boolean   |  —  |  false |
| has-dblclick-expansion  |  if true, double click a splitter could maximize pane | Boolean   |  —  |  true |

### Pane Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------- |---------- |-------------  |-------- |
| pane-size  | the percentage size of a pane | Number   |  —  | - |
| pane-max  | maximum percentage size that can be adjusted by drag the splitter   | Number   | -  |     100    |
| pane-min  | minimum percentage size that can be adjusted by drag the splitter   | Number   | — |  0  |


### Events
| Event Name | Description | Parameters |
|---------- |-------- |---------- |
| ready | event after panes are ready | — |
| resize | event triggers if panes are resizing  | — |
| resized | event triggers if panes are resized | — |
| pane-maximize | event triggers if a pane is maximized by double clicking a splitter | — |
| pane-click | event triggers if a pane is clicked | — |
| splitter-click | event triggers if a splitter is clicked | — |
