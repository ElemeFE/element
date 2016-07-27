<script>
  export default {
    methods: {
      onChange(value) {
        console.log(value);
      }
    }
  }
</script>

## 基本用法

<el-slider></el-slider>

```html
<el-slider></el-slider>
```

## 定义初始值

<el-slider :value="50"></el-slider>

```html
<el-slider :value="50"></el-slider>
```

## 定义区间

<el-slider :min="20" :max="80"></el-slider>

```html
<el-slider :min="20" :max="80"></el-slider>
```

## 定义步长

<el-slider :step="10"></el-slider>

```html
<el-slider :step="10"></el-slider>
```

## 显示间断点

<el-slider :step="10" show-stops></el-slider>

```html
<el-slider :step="10" show-stops></el-slider>
```

## 带有输入框

<el-slider show-input></el-slider>

```html
<el-slider show-input></el-slider>
```

## 回调函数

<el-slider @change="onChange"></el-slider>

```html
<template>
  <el-slider @change="onChange"></el-slider>
</template>

<script>
  export default {
    methods: {
      onChange(value) {
        console.log(value);
      }
    }
  }
</script>
```


## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 绑定值 | number | | 最小值 min |
| min | 最小值 | number | | 0 |
| max | 最大值 | number | | 100 |
| step | 步长 | number | | 1 |
| showInput | 是否显示输入框 | boolean | | false |
| showStops | 是否显示间断点 | boolean | | false |
| change | 值改变时的回调函数 | function | | |
