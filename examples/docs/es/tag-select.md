## TagSelect

Horizontal display of category information

### Basic usage

:::demo 
```html
<div>
    <label>brand：</label>
    <el-tag-select v-model="shoe">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select>
    <p>selected：{{shoe}}</p>
</div>

<script>
export default {
  data () {
    return {
      shoe: 'Nike',
      shoes: [
        {
          label: 'Nike',
          value: 'Nike'
        },
        {
          label: 'Puma',
          value: 'Puma'
        },
        {
          label: 'Adidas',
          value: 'Adidas'
        },
        {
          label: 'Converse',
          value: 'Converse'
        }
      ]
    }
  }
}
</script>

```
:::

### Disabled select

:::demo Set`disabled`attribute to make it disabled
```html
<div>
    <label>brand：</label>
    <el-tag-select v-model="shoe">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label"
            :disabled="shoe.disabled">
        </el-tag-select-item>
    </el-tag-select>
    <p>selected：{{shoe}}</p>
</div>

<script>
export default {
  data () {
    return {
      shoe: 'Adidas',
      shoes: [
          {
            label: 'Nike',
            value: 'Nike',
            disabled: true
          },
          {
            label: 'Puma',
            value: 'Puma',
            disabled: true
          },
          {
            label: 'Adidas',
            value: 'Adidas'
          },
          {
            label: 'Converse',
            value: 'Converse'
          }
        ]
    }
  }
}
</script>

```
:::

### Basic multiple select

:::demo Set`multiple` attribute for`el-tag-select` to enable multiple mode,the value of `v-model` will be an array of selected options.
```html
<div>
    <label>brand：</label>
    <el-tag-select v-model="shoe" multiple>
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select>
    <p>selected：{{shoe}}</p>
</div>

<script>
export default {
  data () {
    return {
      shoe: ['Nike', 'Puma'],
      shoes: [
        {
          label: 'Nike',
          value: 'Nike'
        },
        {
          label: 'Puma',
          value: 'Puma'
        },
        {
          label: 'Adidas',
          value: 'Adidas'
        },
        {
          label: 'Converse',
          value: 'Converse'
        }
      ]
    }
  }
}
</script>

```
:::

### Sizes

:::demo Use attribute `size` to set additional sizes with `medium`,`small`or`mini`.
```html
<div>
    <el-tag-select v-model="shoe">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="shoe" size="medium">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="shoe" size="small">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select><br/>
    <el-tag-select v-model="shoe" size="mini">
        <el-tag-select-item
            v-for="shoe in shoes"
            :key="shoe.value"
            :value="shoe.value"
            :label="shoe.label">
        </el-tag-select-item>
    </el-tag-select>
</div>

<script>
export default {
  data () {
    return {
        shoe: 'Nike',
        shoes: [
          {
            label: 'Nike',
            value: 'Nike'
          },
          {
            label: 'Puma',
            value: 'Puma'
          },
          {
            label: 'Adidas',
            value: 'Adidas'
          },
          {
            label: 'Converse',
            value: 'Converse'
          }
        ]
    }
  }
}
</script>

```
:::

### TagSelect Attributes

| Attribute      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | binding value | boolean / string / number | — | — |
| multiple | whether multiple-select is activated | boolean | — | false |
| size | size of TagSelect | string | medium / small / mini | — |

### TagSelect Events

| Event Name | Description | Parameters |
|---------|---------|---------|
| change | triggers when the selected value changes | current selected value  |

### TagSelect Slots

|   name  | Description     |
|---------|---------|
|    —    | TagSelectItem component list |

### TagSelectItem Attributes

| Attribute      | Description          | Type      | Accepted Values                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | value of option | boolean / string / number | — | — |
| label | label of option, same as `value` if omitted | string / number | — | — |
| disabled | whether option is disabled | boolean | — | false |

### TagSelectItem Slots

|   name  | Description     |
|---------|---------|
|    —    | The value of the custom option |
