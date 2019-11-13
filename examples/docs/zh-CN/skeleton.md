## Skeleton 骨架屏

### 基本

最简单的占位效果。


:::demo
```html
<template>
  <el-skeleton />
</template>
```
:::

### 复杂的组合

更复杂的组合。

:::demo 
```html
<template>
  <el-skeleton avatar :paragraph="{rows: 4}" />
</template>
```
:::


### 动画效果

显示动画效果。

:::demo
```html
<template>
  <el-skeleton avatar active />
</template>
```
:::

### 包含子组件

加载占位图包含子组件。

:::demo
```html
<template>
  <div class="article">
    <el-skeleton :loading="loading">
      <div>
        <h4>Element UI, a design language</h4>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure), to help people create their product prototypes beautifully
          and efficiently.
        </p>
      </div>
    </el-skeleton>
    <el-button @click="showSkeleton" :disabled="loading">
      Show Skeleton
    </el-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false,
      };
    },
    methods: {
      showSkeleton() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      },
    },
  };
</script>
<style>
  .article h4 {
    margin-bottom: 16px;
  }
  .article button {
    margin-top: 16px;
  }
</style>
```
:::

### Skeleton

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| active | 是否展示动画效果 | boolean | false |
| avatar | 是否显示头像占位图 | boolean \| SkeletonAvatarProps(详情看下方说明) | false |
| loading | 为 `true` 时，显示占位图。反之则直接展示子组件 | boolean | - |
| paragraph | 是否显示段落占位图 | boolean \|SkeletonParagraphProps(详情看下方说明) | true |
| title | 是否显示标题占位图 | boolean \| SkeletonTitleProps(详情看下方说明) | true |

### SkeletonAvatarProps

| 属性  | 说明                 | 类型                                | 默认值 |
| ----- | -------------------- | ----------------------------------- | ------ |
| size  | 设置头像占位图的大小 | Enum{ 'large', 'small', 'default' } | -      |
| shape | 指定头像的形状       | Enum{ 'circle', 'square' }          | -      |

### SkeletonTitleProps

| 属性  | 说明                 | 类型             | 默认值 |
| ----- | -------------------- | ---------------- | ------ |
| width | 设置标题占位图的宽度 | number \| string | -      |

### SkeletonParagraphProps

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| rows | 设置段落占位图的行数 | number | - |
| width | 设置段落占位图的宽度，若为数组时则为对应的每行宽度，反之则是最后一行的宽度 | number \| string \| Array<number \| string> | - |