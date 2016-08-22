##  基础用法
简单的步骤条。

### 定宽步骤条

<el-steps :space="100" :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button @click.native="next">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>

```html
<el-steps :space="100" :active="active" finish-status="success">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

<el-button @click.native="next">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 0
      };
    },

    methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
    }
  }
</script>
```

### 自适应步骤条

<el-steps :active="1">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

```html
<el-steps :active="1">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
```

## 含状态步骤
每一步骤显示出该步骤的状态。

<el-steps :space="100" :active="1" finish-status="success">
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

```html
<el-steps :space="100" :active="1" finish-status="success">
  <el-step title="已完成"></el-step>
  <el-step title="进行中"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
```

## 有描述的步骤条
每个步骤有其对应的步骤状态描述。

<el-steps :space="200" :active="1">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>

```html
<el-steps :space="200" :active="1">
  <el-step title="步骤 1" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 2" description="这是一段很长很长很长的描述性文字"></el-step>
  <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
</el-steps>
```

## 带图标的步骤条
步骤条内可以启用各种自定义的图标。

<el-steps :space="100" :active="1">
  <el-step title="步骤 1" icon="edit"></el-step>
  <el-step title="步骤 2" icon="upload"></el-step>
  <el-step title="步骤 3" icon="picture"></el-step>
</el-steps>

```html
<el-steps :space="100" :active="1">
  <el-step title="步骤 1" icon="edit"></el-step>
  <el-step title="步骤 2" icon="upload"></el-step>
  <el-step title="步骤 3" icon="picture"></el-step>
</el-steps>
```

## 竖式步骤条
竖直方向的步骤条。

<el-steps :space="100" direction="vertical" :active="1">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

```html
<el-steps :space="100" direction="vertical" :active="1">
  <el-step title="步骤 1"></el-step>
  <el-step title="步骤 2"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
```

## 步骤错误提示
每一步骤显示出该步骤的状态。

<el-steps :space="100" :active="1" finish-status="success" process-status="error">
  <el-step title="已完成"></el-step>
  <el-step title="审核失败"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>

```html
<el-steps :space="100" :active="1" finish-status="success" process-status="error">
  <el-step title="已完成"></el-step>
  <el-step title="审核失败"></el-step>
  <el-step title="步骤 3"></el-step>
</el-steps>
```

## API

### Steps.props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| space | 每个 step 的间距，不填写将自适应间距 | Number | | |
| direction | 显示方向 | String | `vertical` `horizontal` | `horizontal` |
| active | 设置当前激活步骤  | Number | | 0 |
| process-status | 设置当前步骤的状态 | String | `wait` `process` `finish` `error` `success` | `process` |
| finish-status | 设置结束步骤的状态 | String | `wait` `process` `finish` `error` `success` | `finish` |

### Step.props
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| title | 标题 | String | | |
| description | 描述性文字 | String | | |
| icon | 图标 | Element Icon 提供的图标，如果要使用自定义图标可以通过 slot 方式写入 | String | |


### Step.slot
| name | 说明  |
|----|----|
| icon | 图标 |
| title | 标题 |
| description | 描述性文字 |

