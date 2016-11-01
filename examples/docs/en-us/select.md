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
        value7: [],
        value8: '',
        value9: [],
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
    display: inline-block;
    width: 240px;
  }
</style>

## Select


When there are too many options, use the drop-down menu to display and select the content.

### How to use

Basic radio that can be used in many scenarios.

:::demo The value of `v-model` is the value attribute of `el-option` that is currently selected.

```html
<template>
  <el-select v-model="value">
    <el-option
      v-for="item in options"
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

### With disabled options

:::demo Setting the value of `disabled` in `el-option` to true to disable this option.

```html
<template>
  <el-select v-model="value2">
    <el-option
      v-for="item in options2"
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

### Disabled state

The disabled state of select component.

:::demo Set `disabled` attribute for `el-select` to set it disabled.
```html
<template>
  <el-select v-model="value3" disabled>
    <el-option
      v-for="item in options"
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

### With radio that can reset the select

With reset radio, you can reset the select component to default state.

:::demo Setting `clearable` attribute for `el-select` can reset the select component. What you should notice is that `clearable` attribute is only for radio select component.
```html
<template>
  <el-select v-model="value4" clearable>
    <el-option
      v-for="item in options"
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

### Basic checkbox

Basic checkbox can be used in many scenarios, which uses Tag to show the selected option.

:::demo Set `multiple` attribute for `el-select` to enable checkbox mode, and then the value of `v-model` is the array of selected options.
```html
<template>
  <el-select v-model="value5" multiple>
    <el-option
      v-for="item in options"
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

### Custom templates

You can customize the alternative options.

:::demo Insert the customized HTML templates into the slot of `el-option`.

```html
<template>
  <el-select v-model="value6">
    <el-option
      v-for="item in cities"
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

Display the alternatives in a grouping manner.

:::demo Use `el-option-group` to group the alternatives, its `label` attribute stands for the name of the group.

```html
<template>
  <el-select v-model="value7">
    <el-option-group
      v-for="group in options3"
      :label="group.label">
      <el-option
        v-for="item in group.options"
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

### Searchable

You can use the search function to find options quickly.

:::demo Add `filterable` attribute for `el-select` to enable search function. By default, select will find all the options whose `label` attribute contains the input value. If you want to use other search logic, you can pass the `filter-method`. `filter-method` is a `Function` that will be called when the input value changed, and its parameter is the current input value.
```html
<template>
  <el-select v-model="value8" filterable>
    <el-option
      v-for="item in options"
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

Search the data from the server, and enter the keyword to find.

:::demo Set the value of `filterable` and `remote` with `true` to enable remote search, and you should pass the `remote-method`. `remote-method` is a `Function`, that will be called when the input value changed, and its parameter is the current input value. What you should notice is that if `el-option` is rendered by the `v-for` directive, and you should add `key` attribute for `el-option`. Its value needs to be unique, such as `item.value` in the following example.

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

### Select Attributes 
| Attribute      | Description          | Type      | Options                          | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| multiple | Whether in checkbox mode | boolean | — | false |
| disabled | Whether disabled or not | boolean | — | false |
| clearable | Whether the Options can be cleared when single selected | boolean | — | false |
| name | the name attribute of select input | string | — | — |
| placeholder | placeholder | string | — | Please make a choice |
| filterable | Whether  searchable | boolean | — | false |
| filter-method | customized filter method | function | — | — |
| remote | Whether remote search | boolean | — | false |
| remote-method | the method for remote search | function | — | — |
| loading | Whether loading from the remote server | boolean | — | false |

### Select Events
| Event name | Description | Call back Params |
|---------|---------|---------|
| change | Trigged when the selected value changes | current selected value |

### Option Group Attributes
| Attribute      | Description          | Type     | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | The name of the group | string | — | — |
| disabled | Whether to disable all the Options in this group | boolean | — | false |

### Option Attributes
| Attribute      | Description          | Type      | Options                           | Default  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | the value of Option | string/number/object | — | — |
| label | the label of Option, by default is the same as `value` | string/number | — | — |
| disabled | Whether to disable the Option or not | boolean | — | false |

