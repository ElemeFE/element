## Avatar avatar

Avatars can be used to represent people or objects. It supports images, Icons, or characters.

### Basic

use `shape` and `size` prop to set avatar's shape and size

:::demo
```html
<template>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div>
        <el-avatar :size="50" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="large" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="medium" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="small" icon="el-icon-user-solid"></el-avatar>
      </div>
    </el-col>  
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div>
        <el-avatar :size="50" shape="square" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="large" shape="square" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="medium" shape="square" icon="el-icon-user-solid"></el-avatar>
        <el-avatar size="small" shape="square" icon="el-icon-user-solid"></el-avatar>
      </div>
    </el-col> 
  </el-row>
</template>
```
:::

### Types

It supports images, Icons, or characters

:::demo
```html
<template>
  <div class="demo-type">
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
```
:::

### Fallback when image load error

fallback when image load error

:::demo
```html
<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler"> fallback </el-avatar>
  </div>
</template>

```
:::

### Customize style

:::demo
```html
<template>
  <div class="demo-type">
    <el-avatar style="background-color: #409eff; color: #fff;" icon="el-icon-user-solid"></el-avatar>
  </div>
</template>
<script>
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
</script>

```
:::

### Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | set representation type to Icon, more info on Icon Component   | string          |        |        |
| size              | set avatar size                     | number/string | number/large/medium/small | large  |
| shape             | set avatar shape  | string |    circle/square     |   circle  |
| src               | the address of the image for an image avatar | string |        |      |
| srcSet            | A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use | string |        |      |
| alt               | This attribute defines an alternative text description of the image | string |        |      |


### Events

| Event Name | Description         | Parameters  |
| ------ | ------------------ | -------- |
| error  | handler when img load error, return false to prevent default fallback behavior |(e: Event)  |

### Slot

| Slot Name | Description | 
| default  | customize avatar content |
