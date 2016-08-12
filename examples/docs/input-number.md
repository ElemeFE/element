<script>
  export default {
    data() {
      return {
        num1: 1,
        num2: 1
      }
    }
  };
</script>
<style>
  .demo-box.demo-input-number {
    .el-input-number + .el-input-number {
      margin-left: 10px;
    }
  }
</style>

## 基础使用

<p>当我们需要标准的数字值时可以用到这个组件，它为你提供了数值输入提供了范围控制和递增递减的步数控制。</p>

<div class="demo-box demo-input-number">
  <el-input-number v-model="num1"></el-input-number>
</div>

```html
<el-input-number v-model="num1"></el-input-number>
```

## 禁用状态

<div class="demo-box demo-input-number">
  <el-input-number v-model="num1" :disabled="true"></el-input-number>
</div>

```html
<el-input-number v-model="num1" :disabled="true"></el-input-number>
```

## 步数

<div class="demo-box demo-input-number">
  <el-input-number v-model="num2" :step="2"></el-input-number>
</div>

```html
<el-input-number v-model="num2" :step="2"></el-input-number>
```

## 尺寸

<div class="demo-box demo-input-number">
  <el-input-number v-model="num1" size="large"></el-input-number>
  <el-input-number v-model="num1"></el-input-number>
  <el-input-number v-model="num1" size="small"></el-input-number>
</div>

```html
<el-input-number v-model="num1" size="large"></el-input-number>
<el-input-number v-model="num1"></el-input-number>
<el-input-number v-model="num1" size="small"></el-input-number>
```

## API
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| model    | 绑定值         | number   |       | |
| step     | 步数           | number   |      | 1 |
| size     | 尺寸           | string   | large, small | |
| disabled | 是否禁用        | boolean | true, false | false |
