## Avatar 头像

用图标、图片或者字符的形式展示用户或事物信息

### 基本用法

通过 `shape` 和 `size` 设置头像的形状和大小。

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

### 展示类型

支持三种类型：图标、图标和字符

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

### 图片加载失败的 fallback 行为

当展示类型为图片的时候，图片加载失败的 fallback 行为

:::demo
```html
<template>
  <div class="demo-type">
    <el-avatar :size="60" src="https://empty" @error="errorHandler"> fallback </el-avatar>
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

### 通过 style 自定义样式

当展示类型为图片的时候，图片加载失败的 fallback 行为

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

| 参数              | 说明                             | 类型            | 可选值 | 默认值 |
| ----------------- | -------------------------------- | --------------- | ------ | ------ |
| icon              | 设置头像的图标类型，参考 Icon 组件   | string          |        |        |
| size              | 设置头像的大小                     | number/string | number/large/medium/small | large  |
| shape             | 设置头像的形状  | string |    circle/square     |   circle  |
| src               | 图片头像的资源地址 | string |        |      |

### Events

| 事件名 | 说明               | 回调参数 |
| ------ | ------------------ | -------- |
| error  | 图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为 |(e: Event)  |

### Slot

| 名称	 | 说明               |  
| ------ | ------------------ | 
| default  | 自定义头像展示内容 |
