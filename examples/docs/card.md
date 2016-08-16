<script>
  import fecha from 'packages/date-picker/src/util/fecha.js'
  export default {
    data() {
      return {
        currentDate: fecha.format(new Date(), 'yyyy-MM-dd HH:mm')
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
    display: block;
    margin-top: 13px;
  }

  .item {
    padding: 18px 0;
  }

  .button {
    padding: 0;
  }
</style>

## 基础用法
包含标题, 内容和操作

<el-row>
  <el-col :span="12">
    <el-card>
      <div slot="header" style="display: flex; align-items: center;">
        <div style="flex: 1; color: #20a0ff;">卡片名称</div>
        <el-button type="primary">操作按钮</el-button>
      </div>
      <div v-for="o in 4" class="text item">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
  </el-col>
</el-row>

```html
<el-card>
  <div slot="header" style="display: flex; align-items: center;">
    <div style="flex: 1; color: #20a0ff;">卡片名称</div>
    <el-button type="primary">操作按钮</el-button>
  </div>
  <div v-for="o in 4" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
```

## 简单卡片
卡片可以只有内容区域

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


## 带图片
可配置定义更丰富的内容展示

<el-row>
  <el-col :span="8" v-for="(o, index) in 2" :offset="index > 0 ? 2 : 0">
    <el-card :body-style="{ padding: '0px' }">
      <img src="~examples/assets/images/hamburger.png" width="100%" style="display: block;">
      <div style="padding: 14px; display: flex; align-items: flex-end;">
        <div style="flex: 1">
          <span>好吃的汉堡</span>
          <time class="time">{{ currentDate }}</time>
        </div>
        <el-button type="text" class="button">操作按钮</el-button>
      </div>
    </el-card>
  </el-col>
</el-row>

```html
<el-card :body-style="{ padding: '0px' }">
  <img src="~examples/assets/images/hamburger.png" width="100%" style="display: block;">
  <div style="padding: 14px; display: flex; align-items: flex-end;">
    <div style="flex: 1">
      <span>好吃的汉堡</span>
      <time class="time">{{ currentDate }}</time>
    </div>
    <el-button type="text" class="button">操作按钮</el-button>
  </div>
</el-card>
```

## API
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| header | 设置 header，也可以通过 `slot#header` 传入 DOM | string| | |
| body-style | 设置 body 的样式| object| | { padding: '20px' } |
