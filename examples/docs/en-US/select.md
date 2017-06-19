<script>
  export default {
    data() {
      return {
        list: null,
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        options2: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        options3: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City Name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        options4: [],
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: [],
        value6: '',
        value7: '',
        value8: '',
        value9: [],
        value10: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      };
    },

    mounted() {
      this.list = this.states.map(item => { return { value: item, label: item }; });
    },

    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  };
</script>

<style>
  .demo-select .el-select {
    width: 240px;
  }
</style>

## Select

When there are plenty of options, use a drop-down menu to display and select desired ones.

### Basic usage

:::demo `v-model` is the value of `el-option` that is currently selected.

```html
<template>
  <el-select v-model="value" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value: ''
      }
    }
  }
</script>
```
:::

### Disabled option

:::demo Set the value of `disabled` in `el-option` to `true` to disable this option.

```html
<template>
  <el-select v-model="value2" placeholder="Select">
    <el-option
      v-for="item in options2"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options2: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2',
          disabled: true
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value2: ''
      }
    }
  }
</script>
```
:::

### Disabled select

Disable the whole component.

:::demo Set `disabled` of `el-select` to make it disabled.
```html
<template>
  <el-select v-model="value3" disabled placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value3: ''
      }
    }
  }
</script>
```
:::

### Clearable single select

You can clear Select using a clear icon.

:::demo Set `clearable` attribute for `el-select` and a clear icon will appear. Note that `clearable` is only for single select.
```html
<template>
  <el-select v-model="value4" clearable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value4: ''
      }
    }
  }
</script>
```
:::

### Basic multiple select

Multiple select uses tags to display selected options.

:::demo Set `multiple` attribute for `el-select` to enable multiple mode. In this case, the value of `v-model` will be an array of selected options.
```html
<template>
  <el-select v-model="value5" multiple placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value5: []
      }
    }
  }
</script>
```
:::

### Custom template

You can customize HTML templates for options.

:::demo Insert customized HTML templates into the slot of `el-option`.

```html
<template>
  <el-select v-model="value6" placeholder="Select">
    <el-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value">
      <span style="float: left">{{ item.label }}</span>
      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        cities: [{
          value: 'Beijing',
          label: 'Beijing'
        }, {
          value: 'Shanghai',
          label: 'Shanghai'
        }, {
          value: 'Nanjing',
          label: 'Nanjing'
        }, {
          value: 'Chengdu',
          label: 'Chengdu'
        }, {
          value: 'Shenzhen',
          label: 'Shenzhen'
        }, {
          value: 'Guangzhou',
          label: 'Guangzhou'
        }],
        value6: ''
      }
    }
  }
</script>
```
:::

### Grouping

Display options in groups.

:::demo Use `el-option-group` to group the options, and its `label` attribute stands for the name of the group.

```html
<template>
  <el-select v-model="value7" placeholder="Select">
    <el-option-group
      v-for="group in options3"
      :key="group.label"
      :label="group.label">
      <el-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-option-group>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options3: [{
          label: 'Popular cities',
          options: [{
            value: 'Shanghai',
            label: 'Shanghai'
          }, {
            value: 'Beijing',
            label: 'Beijing'
          }]
        }, {
          label: 'City name',
          options: [{
            value: 'Chengdu',
            label: 'Chengdu'
          }, {
            value: 'Shenzhen',
            label: 'Shenzhen'
          }, {
            value: 'Guangzhou',
            label: 'Guangzhou'
          }, {
            value: 'Dalian',
            label: 'Dalian'
          }]
        }],
        value7: ''
      }
    }
  }
</script>
```
:::

### Option filtering

You can filter options for your desired ones.

:::demo Adding `filterable` to `el-select` enables filtering. By default, Select will find all the options whose `label` attribute contains the input value. If you prefer other filtering strategies, you can pass the `filter-method`. `filter-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value.
```html
<template>
  <el-select v-model="value8" filterable placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Option1',
          label: 'Option1'
        }, {
          value: 'Option2',
          label: 'Option2'
        }, {
          value: 'Option3',
          label: 'Option3'
        }, {
          value: 'Option4',
          label: 'Option4'
        }, {
          value: 'Option5',
          label: 'Option5'
        }],
        value8: ''
      }
    }
  }
</script>
```
:::

### Remote Search

Enter keywords and search data from server.

:::demo Set the value of `filterable` and `remote` with `true` to enable remote search, and you should pass the `remote-method`. `remote-method` is a `Function` that gets called when the input value changes, and its parameter is the current input value. Note that if `el-option` is rendered with the `v-for` directive, you should add the `key` attribute for `el-option`. Its value needs to be unique, such as `item.value` in the following example.

```html
<template>
  <el-select
    v-model="value9"
    multiple
    filterable
    remote
    placeholder="Please enter a keyword"
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options4"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options4: [],
        value9: [],
        list: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona",
        "Arkansas", "California", "Colorado",
        "Connecticut", "Delaware", "Florida",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"]
      }
    },
    mounted() {
      this.list = this.states.map(item => {
        return { value: item, label: item };
      });
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options4 = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options4 = [];
        }
      }
    }
  }
</script>
```
:::

### Create new items
Create and select new items that are not included in select options
:::demo By using the `allow-create` attribute, users can create new items by typing in the input box. Note that for `allow-create` to work, `filterable` must be `true`.
```html
<template>
  <el-select
    v-model="value10"
    multiple
    filterable
    allow-create
    placeholder="Choose tags for your article">
    <el-option
      v-for="item in options5"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        value10: []
      }
    }
  }
</script>
```
:::

### Select Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| multiple | whether multiple-select is activated | boolean | — | false |
| disabled | whether Select is disabled | boolean | — | false |
| size | size of Input | string | large/small/mini | — |
| clearable | whether single select can be cleared | boolean | — | false |
| multiple-limit | maximum number of options user can select when `multiple` is `true`. No limit when set to 0 | number | — | 0 |
| name | the name attribute of select input | string | — | — |
| placeholder | placeholder | string | — | Select |
| filterable | whether Select is filterable | boolean | — | false |
| allow-create | whether creating new items is allowed. To use this, `filterable` must be true | boolean | — | false |
| filter-method | custom filter method | function | — | — |
| remote | whether options are loaded from server | boolean | — | false |
| remote-method | custom remote search method | function | — | — |
| loading | whether Select is loading data from server | boolean | — | false |
| loading-text | displayed text while loading data from server | string | — | Loading |
| no-match-text | displayed text when no data matches the filtering query | string | — | No matching data |
| no-data-text | displayed text when there is no options | string | — | No data |
| popper-class | custom class name for Select's dropdown | string | — | — |
| default-first-option | select first matching option on enter key. Use with `filterable` or `remote` | boolean | - | false |

### Select Events
| Event Name | Description | Parameters |
|---------|---------|---------|
| change | triggers when the selected value changes | current selected value |
| visible-change | triggers when the dropdown appears/disappears | true when it appears, and false otherwise |
| remove-tag | triggers when a tag is removed in multiple mode | removed tag value |
| clear | triggers when the clear icon is clicked in a clearable Select | — |

### Option Group Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | name of the group | string | — | — |
| disabled | whether to disable all options in this group | boolean | — | false |

### Option Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | value of option | string/number/object | — | — |
| label | label of option, same as `value` if omitted | string/number | — | — |
| disabled | whether option is disabled | boolean | — | false |

