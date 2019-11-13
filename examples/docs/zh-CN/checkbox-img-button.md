## CheckboxImgButton 带图片的Checkbox

该组件支持 `el-checkbox` 的所有属性和方法，相关文档可参考`el-checkbox`组件

### 自定义内容用法

自定义内容 -- `vertical`属性可设置纵向和横向（默认）

:::demo 
```html
<template>
  <div style="display:flex;">
    <el-checkbox-img-button v-model="checked" label="1">
      <div style="padding:5px 20px">自定义内容</div>
      <div style="padding:5px 20px;">自定义内容</div>
    </el-checkbox-img-button>

    <el-checkbox-img-button v-model="checked" label="2" vertical>
      <div style="padding:5px 20px">自定义内容</div>
      <div style="padding:5px 20px;">自定义内容</div>
    </el-checkbox-img-button>

    <el-checkbox-img-button v-model="checked" label="2" disabled vertical>
      <div style="padding:5px 20px">自定义内容</div>
      <div style="padding:5px 20px;">自定义内容</div>
    </el-checkbox-img-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        checked: ['1']
      };
    }
  };
</script>
```
:::

### 带图片用法

根据 `el-checkbox-img-button` 标签中属性 `img-url` 的值不为空进行判断.

#### 纵向布局

:::demo
```html
<div style="display:flex;">
  <el-checkbox-img-button
    vertical
    v-model="check1"
    :img-url="imgUrl"
    img-title="飞飞飞飞飞飞飞飞飞"
    label="1">
  </el-checkbox-img-button>
  <el-checkbox-img-button
    vertical
    v-model="check1"
    :img-url="imgUrl"
    img-title="呀呀呀呀呀呀哎呀"
    label="2">
  </el-checkbox-img-button>
</div>

<script>
  export default {
    data() {
      return {
        imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        check1: ['1']
      }
    }
  }
</script>
```
:::

#### 横向布局

:::demo 可自行通过style设置`width`，样式默认有`min-width:320px`;
```html
<div  style="display:flex;flex-direction:column;">
  <el-checkbox-img-button  
    v-model="check1"
    :img-url="img.url"
    :img-title="img.title"
    :img-desc="img.desc"
    label="1">
  </el-checkbox-img-button>
  <el-checkbox-img-button  
    v-model="check1"
    :img-url="img.url"
    :img-title="img.title"
    :img-desc="img.desc"
    label="2"
    style="margin-top:15px;width:400px">
  </el-checkbox-img-button>
</div>

<script>
  export default {
    data() {
      return {
        check1: ['1'],
        img:{
          url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          title: '飞飞飞飞飞飞飞飞飞',
          desc:'在多人协作项目中，良好的规则和规范是保证项目有序进行下去的必要条件'
        }
      }
    }
  }
</script>
```
:::

### Checkbox-img-button Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| disabled  | 是否禁用    | boolean   | — | false   |
| vertical  | 控制是否垂直方向显示    | boolean   | — | false   |
| img-url  | 图片地址    | string   | — | —   |
| img-title  | 图片标题    | string   | — | —  |
| img-desc  | 图片描述    | string   | — | —  |

:::tip
说明：其他属性和方法请参考 `Checkbox`组件
:::