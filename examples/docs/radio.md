<script>
  module.exports = {
    data() {
      return {
        radio: '',
        radio1: '选中且禁用',
        radio2: 3,
        radio31: '',
        radio32: '',
        radio33: ''
      };
    }
  };
</script>

## 基本用法

<div class="demo-box demo-radio">
  <el-radio class="radio" v-model="radio" label="单选框 A"></el-radio>
  <el-radio class="radio" v-model="radio" label="单选框 B"></el-radio>
  <el-radio class="radio" v-model="radio" label="单选框 C"></el-radio>
</div>

```html
<template>
  <el-radio class="radio" v-model="radio" label="单选框 A"></el-radio>
  <el-radio class="radio" v-model="radio" label="单选框 B"></el-radio>
  <el-radio class="radio" v-model="radio" label="单选框 C"></el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      }
    }
  }
</script>
```

## Radio Group

<div class="demo-box demo-radio">
  <el-radio-group v-model="radio2">
    <el-radio :label="9"></el-radio>
    <el-radio :label="6"></el-radio>
    <el-radio :label="3"></el-radio>
  </el-radio-group>
</div>

```html
<el-radio-group v-model="radio2">
  <el-radio :label="9"></el-radio>
  <el-radio :label="6"></el-radio>
  <el-radio :label="3"></el-radio>
</el-radio-group>
```

## Radio Group Button

<div class="demo">
  <el-radio-group v-model="radio31" size="large">
    <el-radio-button label="上海"></el-radio-button>
    <el-radio-button label="北京"></el-radio-button>
    <el-radio-button label="广州" :disabled="true"></el-radio-button>
    <el-radio-button label="深圳"></el-radio-button>
  </el-radio-group>
</div>
<div class="demo">
  <el-radio-group v-model="radio32">
    <el-radio-button label="上海"></el-radio-button>
    <el-radio-button label="北京"></el-radio-button>
    <el-radio-button label="广州" :disabled="true"></el-radio-button>
    <el-radio-button label="深圳"></el-radio-button>
  </el-radio-group>
</div>
<div class="demo">
  <el-radio-group v-model="radio33" size="small">
    <el-radio-button label="上海"></el-radio-button>
    <el-radio-button label="北京"></el-radio-button>
    <el-radio-button label="广州" :disabled="true"></el-radio-button>
    <el-radio-button label="深圳"></el-radio-button>
  </el-radio-group>
</div>

```html
<el-radio-group v-model="radio31" size="large">
  <el-radio-button label="上海"></el-radio-button>
  <el-radio-button label="北京"></el-radio-button>
  <el-radio-button label="广州" :disabled="true"></el-radio-button>
  <el-radio-button label="深圳"></el-radio-button>
</el-radio-group>
<el-radio-group v-model="radio32">
  <el-radio-button label="上海"></el-radio-button>
  <el-radio-button label="北京"></el-radio-button>
  <el-radio-button label="广州" :disabled="true"></el-radio-button>
  <el-radio-button label="深圳"></el-radio-button>
</el-radio-group>
<el-radio-group v-model="radio33" size="small">
  <el-radio-button label="上海"></el-radio-button>
  <el-radio-button label="北京"></el-radio-button>
  <el-radio-button label="广州" :disabled="true"></el-radio-button>
  <el-radio-button label="深圳"></el-radio-button>
</el-radio-group>
```

## 禁用

<div class="demo-box demo-radio">
  <el-radio disabled v-model="radio" label="禁用"></el-radio>
  <el-radio disabled v-model="radio1" label="选中且禁用"></el-radio>
</div>

```html
<el-radio disabled v-model="radio" label="禁用"></el-radio>
<el-radio disabled v-model="radio1" label="选中且禁用"></el-radio>
```


## Radio API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定值   | string,number  |               |         |
| label     | 真实值   | string,number    |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |

## Radio Group API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 绑定值   | string,number  |               |         |
| size     | 尺寸   | string  | large, small  |         |
| change  | 绑定值变化时触发的事件 | Function(value) |    |    |

## Radio Button API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 真实值   | string,number  |               |         |
| disabled  | 禁用    | boolean   | true, false   | false   |
