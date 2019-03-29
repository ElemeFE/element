## TagSelect 标签选择器

横向展示类目信息

### 基础用法

:::demo 
```html
<div>
    <label>品牌：</label>
    <el-tag-select v-model="phone">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select>
    <p>已选择：{{phone}}</p>
</div>

<script>
export default {
  data () {
    return {
      phone: 'mi',
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### 禁用状态

:::demo 通过`disabled`属性指定是否禁用
```html
<div>
    <label>品牌：</label>
    <el-tag-select v-model="phone">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label"
            :disabled="phone.disabled">
        </el-tag-select-item>
    </el-tag-select>
    <p>已选择：{{phone}}</p>
</div>

<script>
export default {
  data () {
    return {
      phone: 'apple',
      phones: [
        {
          label: '小米',
          value: 'mi',
          disabled: true
        },
        {
          label: '华为',
          value: 'HUAWEI',
          disabled: true
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### 基础多选

:::demo 为`el-tag-select`设置`multiple`属性即可启用多选，此时`v-model`的值为当前选中值所组成的数组。
```html
<div>
    <label>品牌：</label>
    <el-tag-select v-model="phone" multiple>
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select>
    <p>已选择：{{phone}}</p>
</div>

<script>
export default {
  data () {
    return {
      phone: ['mi', 'HUAWEI'],
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### 不同尺寸

:::demo 额外尺寸：`medium`、`small`、`mini`，通过`size`属性来配置它们
```html
<div>
    <el-tag-select v-model="phone">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="phone" size="medium">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="phone" size="small">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="phone" size="mini">
        <el-tag-select-item
            v-for="phone in phones"
            :key="phone.value"
            :value="phone.value"
            :label="phone.label">
        </el-tag-select-item>
    </el-tag-select>
</div>

<script>
export default {
  data () {
    return {
      phone: 'mi',
      phones: [
        {
          label: '小米',
          value: 'mi'
        },
        {
          label: '华为',
          value: 'HUAWEI'
        },
        {
          label: '苹果',
          value: 'apple'
        },
        {
          label: 'OPPO',
          value: 'OPPO'
        }
      ]
    }
  }
}
</script>

```
:::

### TagSelect Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | boolean / string / number | — | — |
| multiple | 是否多选 | boolean | — | false |
| size | 选择器尺寸 | string | medium / small / mini | — |

### TagSelect Events

| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | 选中值发生变化时触发 | 目前的选中值 |

### TagSelect Slots

|   name  | 说明     |
|---------|---------|
|    —    | TagSelectItem 组件列表 |

### TagSelectItem Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | boolean / string / number | — | — |
| label | 选项的标签，若不设置则默认与`value`相同 | string / number | — | — |
| disabled | 是否禁用该选项 | boolean | — | false |

### TagSelectItem Slots

|   name  | 说明     |
|---------|---------|
|    —    | 自定义选项的值 |
