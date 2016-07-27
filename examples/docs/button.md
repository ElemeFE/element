<script>
  export default {
    data() {
      return {
        isLoading: false,
        isLoading2: false
      };
    },
    methods: {
      handleClick(event) {
        console.log(event);
        alert('button clicked!');
      }
    }
  }
</script>
<style>
  .demo-box.demo-button {
    .el-button + .el-button {
      margin-left: 10px;
    }
    .el-button-group {
      margin-bottom: 20px;

      .el-button + .el-button {
        margin-left: 0;
      }
    }
  }
</style>

## 基础用法

<div class="demo-box demo-button">
  <el-button>Default</el-button>
  <el-button type="primary">primary</el-button>
  <el-button type="success">success</el-button>
  <el-button type="warning">warning</el-button>
  <el-button type="danger">danger</el-button>
  <el-button type="info">info</el-button>
  <el-button :disabled="true">disabled</el-button>
  <el-button type="text">text button</el-button>
</div>

```html
<el-button>Default</el-button>
<el-button type="primary">primary</el-button>
<el-button type="success">success</el-button>
<el-button type="warning">warning</el-button>
<el-button type="danger">danger</el-button>
<el-button type="info">info</el-button>
<el-button :disabled="true">disabled</el-button>
<el-button type="text">text button</el-button>
```

## Plain Button

<div class="demo-box demo-button">
  <el-button :plain="true">Default</el-button>
  <el-button :plain="true" type="success">success</el-button>
  <el-button :plain="true" type="warning">warning</el-button>
  <el-button :plain="true" type="danger">danger</el-button>
  <el-button :plain="true" :disabled="true">disabled</el-button>
</div>

```html
<el-button :plain="true">Default</el-button>
<el-button :plain="true" type="success">success</el-button>
<el-button :plain="true" type="warning">warning</el-button>
<el-button :plain="true" type="danger">danger</el-button>
<el-button :plain="true" :disabled="true">disabled</el-button>
```

## 尺寸

<div class="demo-box demo-button">
  <el-button type="primary" size="large">large</el-button>
  <el-button type="primary">Default</el-button>
  <el-button type="primary" size="small">small</el-button>
  <el-button type="primary" size="mini">mini</el-button>
</div>

```html
<el-button type="primary" size="large">large</el-button>
<el-button type="primary">Default</el-button>
<el-button type="primary" size="small">small</el-button>
<el-button type="primary" size="mini">mini</el-button>
```

## Loading

<div class="demo-box demo-button">
  <el-button type="primary" :loading="true">Button</el-button>
</div>
<p>点击后变成 loading 状态</p>
<div class="demo-box demo-button">
  <el-button type="primary" :loading="isLoading" @click="isLoading = true">Button</el-button>
  <el-button type="primary" icon="search" :loading="isLoading2" @click="isLoading2 = true">Button</el-button>
</div>

```html
<el-button type="primary" :loading="true">Button</el-button>

<el-button type="primary" :loading="isLoading" @click="isLoading = true">Button</el-button>
<el-button type="primary" icon="search" :loading="isLoading2" @click="isLoading2 = true">Button</el-button>
```

## 图标按钮

<div class="demo-box demo-button">
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="search">Search</el-button>
  <el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
</div>

```html
<el-button type="primary" icon="edit"></el-button>
<el-button type="primary" icon="search">Search</el-button>
<el-button type="primary">Upload<i class="el-icon-upload el-icon-right"></i></el-button>
```

## 按钮组

<div class="demo-box demo-button">
  <el-button-group>
    <el-button>Button</el-button>
    <el-button>Button</el-button>
    <el-button>Button</el-button>
  </el-button-group>
  <div></div>
  <el-button-group>
    <el-button type="primary" icon="edit"></el-button>
    <el-button type="primary" icon="share"></el-button>
    <el-button type="primary" icon="delete"></el-button>
  </el-button-group>
</div>

```html
<el-button-group>
  <el-button>Button</el-button>
  <el-button>Button</el-button>
  <el-button>Button</el-button>
</el-button-group>
<div></div>
<el-button-group>
  <el-button type="primary" icon="edit"></el-button>
  <el-button type="primary" icon="share"></el-button>
  <el-button type="primary" icon="delete"></el-button>
</el-button-group>
```

## API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   large,small,mini            |         |
| type     | 类型   | string    |   primary,success,warning,danger,info,text |         |
| plain     | 是否朴素按钮   | Boolean    | true,false | false   |
| disabled  | 禁用    | boolean   | true, false   | false   |
| icon  | 图标，已有的图标库中的图标名 | string   |    |    |
