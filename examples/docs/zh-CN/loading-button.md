## LoadingButton 加载按钮

用于显示加载中的按钮，不需要重新添加变量

### 基本用法

用法跟button的一致，就是在绑定button方法的时候，如果是promise,则需要返回promise

:::demo 当只返回普通promise函数的时候，详细用法如下。
```html
<template>
  <el-loading-button
    :loadingClick="promiseButton"
  >
    loadingButton
  </el-loading-button>
</template>
<script>
  export default {
    methods: {
      promiseButton() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 3000)
        })
      }
    }
  }
</script>
```
:::

### 当函数中需要传参数

当loadingClick中需要绑定参入的参数就需要使用bind

:::demo 触发的函数需要绑定对应的参数。
```html
<template>
  <el-loading-button
    :loadingClick="promiseButton.bind(this, '我是传入的参数')"
  >
    bind
  </el-loading-button>
</template>
<script>
  export default {
    methods: {
      promiseButton(val) {
        return new Promise((resolve) => {
          setTimeout(() => {
            window.alert(val);
            resolve()
          }, 3000)
        })
      }
    }
  }
</script>
```
:::

### 当需要使用触发的原生事件

当组件需要获取到触发的原生事件，则在函数调用中可以获取到对应的事件

:::demo 获取原生事件
```html
<template>
  <el-loading-button
    :loadingClick="promiseButton1"
  >
    普通按钮
  </el-loading-button>
  <el-loading-button
    :loadingClick="promiseButton2.bind(this, '我是传入的参数')"
  >
    传入参数按钮
  </el-loading-button>
</template>
<script>
  export default {
    methods: {
      promiseButton1(e) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(e);
            resolve()
          }, 3000)
        })
      },
      promiseButton2(val, e) {
        return new Promise((resolve) => {
          setTimeout(() => {
            console.log(val);
            console.log(e);
            resolve()
          }, 3000)
        })
      }
    }
  }
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| loading-button     | 点击触发的函数，必须返回promise           | Function | — | — |


:::tip
说明：其他参数请参照`Button`组件
:::
