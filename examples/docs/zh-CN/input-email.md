## InputEmail 邮件输入组件

邮箱输入组件，校验邮箱的合法性

### 基本用法

基本用法和Input一致
:::demo

```html
<template>
  <el-input-email v-model="email" />
</template>

<script>
export default {
  name: 'BasicExample',
  data() {
    return {
      email: '',
    }
  }
}
</script>
```

:::

### 自动填充后缀

增加常用邮箱后缀列表自动填充后缀
:::demo

```html
<template>
  <el-input-email v-model="email" :email-list="list" />
</template>

<script>
export default {
  name: 'EmailList',
  data() {
    return {
      email: '',
      list: ['126.com', '163.com', 'qq.com']
    }
  }
}
</script>
```

:::

### 禁用blur时未输入自动填写

组件默认input框内容为空时触发blur事件会自动填写默认的邮箱，可通过设置autoFill属性阻止该行为
::: demo

```html
<template>
  <el-input-email v-model="email" :auto-fill="false" />
</template>

<script>
export default {
  name: 'EmailList',
  data() {
    return {
      email: '',
    }
  }
}
</script>
```

:::

### Attributes

| 参数      |   说明    |  类型     | 可选值       | 默认值   |
|---------- | -------- |---------- |-------------  |-------- |
| value | 邮箱地址 | string   |  —  |  —  |
| email-list | email后缀列表 | array   |  —  |  []  |
| placeholder | 输入框placeholder | string   |  —  |  请输入邮箱  |
| auto-fill | blur事件自动是否填充默认值 | boolean   |  —  |  true  |
