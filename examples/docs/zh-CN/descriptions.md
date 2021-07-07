## Descriptions 描述列表

列表形式展示多个字段。

### 基础用法

:::demo

```html
<el-descriptions title="用户信息">
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
```
:::

### 不同尺寸

:::demo

```html
<template>
  <el-radio-group v-model="size">
    <el-radio label="">默认</el-radio>
    <el-radio label="medium">中等</el-radio>
    <el-radio label="small">小型</el-radio>
    <el-radio label="mini">超小</el-radio>
  </el-radio-group>

  <el-descriptions class="margin-top" title="带边框列表" :column="3" :size="size" border>
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        用户名
      </template>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      苏州市
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        联系地址
      </template>
      江苏省苏州市吴中区吴中大道 1188 号
    </el-descriptions-item>
  </el-descriptions>

  <el-descriptions class="margin-top" title="无边框列表" :column="3" :size="size">
    <template slot="extra">
      <el-button type="primary" size="small">操作</el-button>
    </template>
    <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
    <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
    <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
    <el-descriptions-item label="备注">
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
  </el-descriptions>
</template>

<script>
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
</script>
```
:::

### 垂直列表

:::demo

```html
<el-descriptions title="垂直带边框列表" direction="vertical" :column="4" border>
  <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>

<el-descriptions class="margin-top" title="垂直无边框列表" :column="4" direction="vertical">
  <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
  <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
```
:::

### 自定义样式

:::demo

```html
<el-descriptions title="自定义样式列表" :column="3" border>
  <el-descriptions-item label="用户名" label-class-name="my-label" content-class-name="my-content">kooriookami</el-descriptions-item>
  <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
  <el-descriptions-item label="居住地">苏州市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">学校</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址" :contentStyle="{'text-align': 'right'}">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
</el-descriptions>
<style>
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
</style>
```
:::

### Descriptions Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| border        | 是否带有边框         | boolean  |          —             |    false     |
| column        | 一行 `Descriptions Item` 的数量  | number | — |    3  |
| direction     | 排列的方向  | string | vertical / horizontal |    horizontal  |
| size          | 列表的尺寸    | string  |    medium / small / mini  |  — |
| title         | 标题文本，显示在左上方    | string  |    —  |  — |
| extra         | 操作区文本，显示在右上方    | string  |    —  |  — |
| colon         | 是否显示冒号    | boolean  |    —  |  true |
| labelClassName | 自定义标签类名    | string |    —  |  — |
| contentClassName | 自定义内容类名    | string |    —  | — |
| labelStyle | 自定义标签样式 | object |    —  | — |
| contentStyle | 自定义内容样式    | object |    —  | — |

### Descriptions Slots

| Name | 说明 |
|------|--------|
| title | 自定义标题，显示在左上方  |
| extra | 自定义操作区，显示在右上方  |

### Descriptions Item Attributes
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| label          | 标签文本         | string  |          —             |    —     |
| span          | 列的数量         | number  |          —             |    1     |
| labelClassName | 自定义标签类名    | string |    —  |  — |
| contentClassName | 自定义内容类名    | string |    —  | — |
| labelStyle | 自定义标签样式 | object |    —  | — |
| contentStyle | 自定义内容样式    | object |    —  | — |

### Descriptions Item Slots

| Name | 说明 |
|------|--------|
| label | 自定义标签文本  |
