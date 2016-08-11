<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
        value7: null
      };
    },
    methods: {
      onChange(value) {
        console.log(value);
      }
    }
  }
</script>

## 基本用法

<el-slider v-model="value1"></el-slider>

```html
<el-slider v-model="value1"></el-slider>
```

## 定义初始值

<el-slider v-model="value2"></el-slider>

```html
<el-slider v-model="value2"></el-slider>
```

## 定义区间

<el-slider :min="20" :max="80" v-model="value3"></el-slider>

```html
<el-slider :min="20" :max="80" v-model="value3"></el-slider>
```

## 定义步长

<el-slider :step="10" v-model="value4"></el-slider>

```html
<el-slider :step="10" v-model="value4"></el-slider>
```

## 显示间断点

<el-slider :step="10" show-stops v-model="value5"></el-slider>

```html
<el-slider :step="10" show-stops v-model="value5"></el-slider>
```

## 带有输入框

<el-slider show-input v-model="value6"></el-slider>

```html
<el-slider show-input v-model="value6"></el-slider>
```

## 回调函数

<el-slider @change="onChange" v-model="value7"></el-slider>

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
