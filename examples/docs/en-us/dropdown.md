# Dropdown 
Toggleable, contextual menu for displaying lists of links and binding your action on it.


---

## How to use
Hover on the dropdown menu to unfold it and do more actions 

:::demo It has an attribute `text`, change it to set the button content. And it consists of a main button and a group containing several dropdown button. You could bind event on the primary button `el-dropdown` by event name `mainClick`.  Dropdown list will show when hover on main button by default, you don't need to click it .

```html
<el-dropdown text="dropdown list" type="text" :icon-separate="false" @mainclick="handleMainClick()">
  <el-dropdown-item>link</el-dropdown-item>
  <el-dropdown-item>other link</el-dropdown-item>
  <el-dropdown-item>action</el-dropdown-item>
  <el-dropdown-item>other action</el-dropdown-item>
  <el-dropdown-item>more</el-dropdown-item>
</el-dropdown>
```

:::

## Trigger component 

Use the button to trigger the component to display the dropdown list.


:::demo Set attribute `icon-separate` to get a dropdown list without the main button.
If you wanna insert a seperator line between item three and item four, just add a class `divider` to item four.

```html
<el-dropdown text="more menus" type="primary" :icon-separate="false">
  <el-dropdown-item>item one</el-dropdown-item>
  <el-dropdown-item>item two</el-dropdown-item>
  <el-dropdown-item>item three</el-dropdown-item>
  <el-dropdown-item class="divider">item four</el-dropdown-item>
</el-dropdown>

<el-dropdown text="main button" type="primary" @mainclick="handleMainClick()">
  <el-dropdown-item>item one</el-dropdown-item>
  <el-dropdown-item>item two</el-dropdown-item>
  <el-dropdown-item>item three</el-dropdown-item>
  <el-dropdown-item>item four</el-dropdown-item>
</el-dropdown>

```

### How to trigger
Click main button or hover on it. Default is hover.

:::demo Set attribute `trigger` as 'click'.

```html
<div class="block">
  <span class="demonstration">hover to trigger</span>
  <el-dropdown text="dropdown list" type="text" :icon-separate="false" trigger="hover">
    <el-dropdown-item>item one</el-dropdown-item>
    <el-dropdown-item>item two</el-dropdown-item>
    <el-dropdown-item>item three</el-dropdown-item>
    <el-dropdown-item>item four</el-dropdown-item>
  </el-dropdown>
</div>
<div class="block">
  <span class="demonstration">click to trigger</span>
  <el-dropdown text="dropdown list" type="text" :icon-separate="false" trigger="click">
    <el-dropdown-item>item one</el-dropdown-item>
    <el-dropdown-item>item two</el-dropdown-item>
    <el-dropdown-item>item three</el-dropdown-item>
    <el-dropdown-item class="divider">item four</el-dropdown-item>
  </el-dropdown>
</div>

```
:::
### Attributes
| Attribute          | Description            | Type            | Options                 | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| text          | main button text      | string          |          —             |    —     |
| type          | main button type, refer to  `Button` Component    | string  |          —             |    —     |
| trigger       | how to trigger     | string  |    hover,click  |  hover |
| icon-separate | display independent main button or not | boolean         |     —       | false   |
| size          | component size, refer to `Button` component     | string          | large, small, mini  |  —  |
| menu-align    | horizontal alignment     | string          | start, end  | end |




