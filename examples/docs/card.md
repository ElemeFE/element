<script>
  import dateUtil from 'main/utils/date'
  export default {
    data() {
      return {
        currentDate: dateUtil.format(new Date(), 'yyyy-MM-dd HH:mm')
      };
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .item {
    padding: 18px 0;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix {
    @utils-clearfix;
  }
</style>

## 基础用法

Card 组件包括`header`和`body`部分，`header`部分需要有显式具名 slot 分发，同时他也是可选的。

下面是一个带有标题、内容和操作（按钮）的 Card 组件示例，需要注意的是，部分样式需要你自己填入，下例中我们使用了布局来限制卡片的宽度：

<el-row>
  <el-col :span="12">
    <el-card>
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;">卡片名称</span>
        <el-button style="float: right;" type="primary">操作按钮</el-button>
      </div>
      <div v-for="o in 4" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-col>
</el-row>

```html
<el-card>
  <div slot="header" class="clearfix">
    <span style="line-height: 36px;">卡片名称</span>
    <el-button style="float: right;" type="primary">操作按钮</el-button>
  </div>
  <div v-for="o in 4" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
```

## 简单卡片

如上述所言，Card 组件可以只有`body`区域，下面是一个没有定义`header`的 Card 组件。

<el-row>
  <el-col :span="12">
    <el-card>
      <div v-for="o in 4" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-col>
</el-row>

```html
<el-card>
  <div v-for="o in 4" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
```


## 进阶使用
配置`body-style`属性来自定义`body`部分的`style`。

可以让你的卡片极大程度的被个性化，为更丰富的内容展示服务。。

下例是一个带图片的示例，能帮助你更好地理解`body-style`配合分发内容自定义样式的强大：

<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~examples/assets/images/hamburger.png" class="image">
      <div style="padding: 14px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
          <time class="time">{{ currentDate }}</time>
          <el-button type="text" class="button">操作按钮</el-button>
        </div>
      </div>
    </el-card>
  </el-col>
</el-row>

```html
<el-card :body-style="{ padding: '0px' }">
  <img src="~examples/assets/images/hamburger.png" class="image">
  <div style="padding: 14px;">
    <span>好吃的汉堡</span>
    <div class="bottom clearfix">
      <time class="time">{{ currentDate }}</time>
      <el-button type="text" class="button">操作按钮</el-button>
    </div>
  </div>
</el-card>
```

## Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| | |
| body-style | 设置 body 的样式| object| | { padding: '20px' } |
