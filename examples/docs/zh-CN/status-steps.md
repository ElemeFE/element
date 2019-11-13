## StatusSteps组件

### 基础用法

:::demo
```html

<el-steps :active="active">
  <el-status-steps title="步骤 1"></el-status-steps>
  <el-status-steps title="步骤 2"></el-status-steps>
  <el-status-steps title="步骤 3"></el-status-steps>
</el-steps>

<el-button style="margin-top: 12px;" @click="next()">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 1
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
:::

### 带数字的简约风格步骤条
设置 `simple` 可应用简洁风格，该条件下 `align-center` / `description` / `direction` / `space` 都将失效。
设置了`simple`之后，设置`number`属性可以显示带数字带步骤条

:::demo
```html

<el-steps :active="active" finish-status="success" simple style="margin-top: 20px">
  <el-status-steps title="步骤 1" number></el-status-steps>
  <el-status-steps title="步骤 2" number></el-status-steps>
  <el-status-steps title="步骤 3" number></el-status-steps>
</el-steps>
<el-button style="margin-top: 12px;" @click="next()">下一步</el-button>

<script>
  export default {
    data() {
      return {
        active: 1
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
:::

### Steps Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| simple | 是否应用简洁风格 | boolean | - | false |
| number | 是否应用简洁风格的number模式，需要跟simple一起使用 | boolean | - | false |

:::tip
说明：其他属性和方法请参考 `Steps`组件
:::
