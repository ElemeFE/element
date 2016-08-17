## 基础用法
展示新消息数量

<el-row>
  <el-col :span="12">
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
  </el-col>
  <el-col :span="12">
    <el-dropdown text="点我查看" type="text" :icon-separate="false" trigger="click">
      <el-dropdown-item class="clearfix">
        评论
        <el-badge class="mark" :value="12" />
      </el-dropdown-item>
      <el-dropdown-item class="clearfix">
        回复
        <el-badge class="mark" :value="3" />
      </el-dropdown-item>
    </el-dropdown>
  </el-col>
</el-row>

```html
<el-badge :value="12" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="3" class="item">
  <el-button size="small">回复</el-button>
</el-badge>

<el-dropdown text="点我查看" type="text" :icon-separate="false" trigger="click">
  <el-dropdown-item class="clearfix">
    评论
    <el-badge class="mark" :value="12" />
  </el-dropdown-item>
  <el-dropdown-item class="clearfix">
    回复
    <el-badge class="mark" :value="3" />
  </el-dropdown-item>
</el-dropdown>
```

## 最大值
可自定义最大值

<el-row>
  <el-col :span="12">
    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
  </el-col>
</el-row>

```html
<el-badge :value="200" :max="99" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge :value="100" :max="10" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
```


## 自定义内容
可以显示数字外的文本内容

<el-row>
  <el-col :span="12">
    <el-badge value="new" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge value="hot" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
  </el-col>
</el-row>

```html
<el-badge value="new" class="item">
  <el-button size="small">评论</el-button>
</el-badge>
<el-badge value="hot" class="item">
  <el-button size="small">回复</el-button>
</el-badge>
```

## 小红点
以红点的形式标注需要关注的内容

<el-row>
  <el-col :span="12">
    <el-badge dot class="item">数据查询</el-badge>
    <el-badge dot class="item">
      <el-button class="share-button" icon="share" type="primary"></el-button>
    </el-badge>
  </el-col>
</el-row>

```html
<el-badge dot class="item">数据查询</el-badge>
<el-badge dot class="item">
  <el-button class="share-button" icon="share" type="primary"></el-button>
</el-badge>
```

<style scoped>
  .share-button {
    width: 36px;
    padding: 10px;
  }

  .mark {
    margin-top: 8px;
    line-height: 1;
    float: right;
  }

  .clearfix {
    @utils-clearfix;
  }

  .item {
    margin-right: 40px;
  }
</style>

## API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| value          | 显示值      | string|number          |                       |         |
| max          |  最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型    | number  |                       |         |
| dot       | 小圆点    | boolean  |    |  false |
