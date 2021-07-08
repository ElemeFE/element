## Descriptions

Display multiple fields in list form.

### Basic usage

:::demo

```html
<el-descriptions title="User Info">
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
</el-descriptions>
```
:::

### Sizes

:::demo

```html
<template>
  <el-radio-group v-model="size">
    <el-radio label="">Default</el-radio>
    <el-radio label="medium">Medium</el-radio>
    <el-radio label="small">Small</el-radio>
    <el-radio label="mini">Mini</el-radio>
  </el-radio-group>

  <el-descriptions class="margin-top" title="With border" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">Operation</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        Username
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        Telephone
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        Place
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        Remarks
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        Address
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="Without border" :column="3" :size="size">
    <template slot="extra">
      <el-button type="primary" size="small">Operation</el-button>
    </template>
    <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
    <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
    <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
    <el-descriptions-item label="Remarks">
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
  </el-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### Vertical List

:::demo

```html
<el-descriptions title="Vertical list with border" direction="vertical" :column="4" border>
  <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
  <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
  <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
  <el-descriptions-item label="Remarks">
    <el-tag size="small">School</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
</el-descriptions>

<el-descriptions class="margin-top" title="Vertical list without border" :column="4" direction="vertical">
  <el-descriptions-item label="Username">kooriookami</el-descriptions-item>
  <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
  <el-descriptions-item label="Place" :span="2">Suzhou</el-descriptions-item>
  <el-descriptions-item label="Remarks">
    <el-tag size="small">School</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="Address">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
</el-descriptions>
```
:::

### Customized Style

:::demo

```html
<el-descriptions title="Customized style list" :column="3" border>
  <el-descriptions-item label="Username" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
  <el-descriptions-item label="Telephone">18100000000</el-descriptions-item>
  <el-descriptions-item label="Place">Suzhou</el-descriptions-item>
  <el-descriptions-item label="Remarks">
    <el-tag size="small">School</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="Address" :content-style="{'text-align': 'right'}">No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province</el-descriptions-item>
</el-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| Attribute     | Description       | Type       | Accepted Values        | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | with or without border      | boolean  |          —             |    false     |
| column        | numbers of `Descriptions Item` in one line  | number | — |    3  |
| direction     | direction of list  | string | vertical / horizontal |    horizontal  |
| size          | size of list    | string  |    medium / small / mini  |  — |
| title         | title text, display on the top left    | string  |    —  |  — |
| extra         | extra text, display on the top right    | string  |    —  |  — |
| colon | change default props colon value of Descriptions Item   | boolean |    —  |  true |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Slots

| Name | Description |
|------|--------|
| title | custom title, display on the top left  |
| extra | custom extra area, display on the top right  |

### Descriptions Item Attributes
| Attribute       | Description        | Type       | Accepted Values       | Default   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | label text         | string  |          —             |    —     |
| span          | colspan of column       | number  |          —             |    1     |
| labelClassName          | custom label class name         | string  |          —             |    —     |
| contentClassName          | custom content class name         | string  |          —             |    —     |
| labelStyle          | custom label style | object |          —             |    —     |
| contentStyle         | custom content style | object |          —             |    —     |

### Descriptions Item Slots

| Name | Description |
|------|--------|
| label | custom label  |
