## RadioImgButton 带有图片的 radio

### 基本用法

除了能够使用普通 radio 的所有属性之外，我们还给单选按钮添加了具有图片的样式，使用该组件需要设置组件的图片地址 imgUrl 和宽度 width，按钮默认宽度为 160px

:::demo

```html
<template>
  <div style="display: flex">
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="1"
      text="radio-img-button"
      vertical
      description="我是radio1"
    >
    </el-radio-img-button>
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="2"
      text="radio-img-button"
      vertical
      description="真是一段很长很长很真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字长的文字"
    >
    </el-radio-img-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "2"
      };
    }
  };
</script>
```

:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合`el-radio-group`元素和子元素`el-radio-img-button`可以实现单选组，在`el-radio-group`中绑定`v-model`，在`el-radio-img-button`中设置好`label`即可，无需再给每一个`el-radio-img-button`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

```html
<template>
  <el-radio-group v-model="value" style="display: flex">
    <el-radio-img-button
      vertical
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="1"
      text="radio-img-button"
      ref="radio1"
      description="备选项"
    >
    </el-radio-img-button>
    <el-radio-img-button
      vertical
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="2"
      text="radio-img-button"
      ref="radio2"
      description="备选项"
    >
    </el-radio-img-button>
    <el-radio-img-button
      vertical
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="3"
      text="radio-img-button"
      ref="radio3"
      description="备选项"
    >
    </el-radio-img-button>
  </el-radio-group>
</template>

<script>
  export default {
    data() {
      return {
        value: "3"
      };
    }
  };
</script>
```

:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在`el-radio-img-button`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

```html
<template>
  <div style="display: flex">
    <el-radio-img-button
      v-model="value"
      disabled
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="1"
      text="radio-img-button"
      vertical
      description="我是radio1"
    ></el-radio-img-button>
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="2"
      disabled
      text="radio-img-button"
      vertical
      description="真是一段很长很长很真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字真是一段很长很长很长的文字长的文字"
    ></el-radio-img-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: "2"
      };
    }
  };
</script>
```

:::

### 横向布局

当设置为横向布局，记住一定要设置 width

:::demo 默认只有两种布局，设置为横向布局时只需要去掉 vertical 属性或者设置其值为 false 即可

```html
<template>
  <div style="display: flex">
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="1"
      width="586px"
      text="radio-img-button"
      description="此处风景优美，令人身心向往；但是却带一股寒冷之气，恰恰还是那些市井之地，才充满生活气息；不知是知了还是蛐蛐的叫声，使得夜晚更加的宁静安逸"
    ></el-radio-img-button>
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="2"
      width="586px"
      text="radio-img-button"
      description="此处风景优美，令人身心向往；但是却带一股寒冷之气，恰恰还是那些市井之地，才充满生活气息；不知是知了还是蛐蛐的叫声，使得夜晚更加的宁静安逸"
    ></el-radio-img-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "2"
      };
    }
  };
</script>
```

:::

### 按钮文字与描述

与 radio 不同的是，如果我们需要给按钮添加文字和描述，则用 text 和 description

:::demo 值得注意的是，description 只有在横向布局时才有效

```html
<template>
  <div style="display: flex">
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="1"
      width="310px"
      text="按钮文字"
      description="按钮描述"
    ></el-radio-img-button>
    <el-radio-img-button
      v-model="value"
      imgUrl="http://img5.imgtn.bdimg.com/it/u=3987907653,720009510&fm=26&gp=0.jpg"
      label="2"
      width="310px"
      text="按钮文字"
      description="按钮描述"
    ></el-radio-img-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: "2"
      };
    }
  };
</script>
```

:::

### Radio-img-button Attributes

| 参数            | 说明           | 类型                      | 可选值 | 默认值      |
| --------------- | -------------- | ------------------------- | ------ | ----------- |
| value / v-model | 绑定值         | string / number / boolean | —      | —           |
| disabled        | 是否禁用       | boolean                   | —      | false       |
| name            | 原生 name 属性 | string                    | —      | —           |
| width           | 按钮宽度       | string / number           | —      | 160px / 160 |
| imgUrl          | 图片地址       | string                    | —      | —           |
| text            | 按钮文字       | string                    | —      | —           |
| description     | 按钮描述       | string                    | —      | —           |

:::tip
说明：其他属性和方法请参考 `Radio`组件
:::