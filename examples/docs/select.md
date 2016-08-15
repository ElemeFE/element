<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        options2: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2',
          disabled: true
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        options3: [{
          label: '分组1',
          options: [{
            value: '选项1',
            label: '标签1'
          }, {
            value: '选项2',
            label: '标签2'
          }]
        }, {
          label: '分组2',
          options: [{
            value: '选项3',
            label: '标签3'
          }, {
            value: '选项4',
            label: '标签4'
          }, {
            value: '选项5',
            label: '标签5'
          }]
        }],
        options4: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }, {
          value: '选项6',
          label: '标签6'
        }, {
          value: '选项7',
          label: '标签7'
        }, {
          value: '选项8',
          label: '标签8'
        }, {
          value: '选项9',
          label: '标签9'
        }, {
          value: '选项10',
          label: '标签10'
        }, {
          value: '选项11',
          label: '标签11'
        }],
        options5: [],
        value: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: [],
        value8: '',
        value9: '',
        value10: '',
        value11: '',
        value12: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      };
    },

    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options5 = this.states.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) > -1).map(item => { return { value: item, label: item }; });
          }, 200);
        }
      }
    }
  };
</script>

## 基本用法

<el-select v-model="value">
  <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
</el-select>

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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value: ''
      }
    }
  }
</script>
```

## 禁用状态

<el-select v-model="value2" disabled>
  <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
</el-select>

```html
<template>
  <el-select v-model="value2" disabled>
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value2: ''
      }
    }
  }
</script>
```

## 有禁用选项

<el-select v-model="value3">
  <el-option v-for="item in options2" :label="item.label" :value="item.value" :disabled="item.disabled"></el-option>
</el-select>

```html
<template>
  <el-select v-model="value3">
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2',
          disabled: true
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value3: ''
      }
    }
  }
</script>
```

## 可清空单选

<el-select v-model="value4" clearable>
  <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
</el-select>

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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value4: ''
      }
    }
  }
</script>
```

## 指定初始被选项

<el-select v-model="value5">
  <el-option v-for="item in options" :label="item.label" :value="item.value" :selected="item.value === '选项2'"></el-option>
</el-select>

要指定 `select` 的初始被选项有两种方法。可以通过指定 `el-option` 的 `selected` 属性:

```html
<template>
  <el-select v-model="value5">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value"
      :selected="item.value === '选项2'">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value5: ''
      }
    }
  }
</script>
```

或者通过为绑定到 `value` 的变量赋予初始值:

```html
<template>
  <el-select v-model="value5">
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value5: '选项2'
      }
    }
  }
</script>
```

## 自定义模板

<el-select v-model="value6">
  <el-option
    v-for="item in options"
    :label="item.label"
    :value="item.value">
    <span>label: {{ item.label }}, value: {{ item.value }}</span>
  </el-option>
</el-select>

```html
<template>
  <el-select v-model="value6">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
      <span>label: {{ item.label }}, value: {{ item.value }}</span>
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value6: ''
      }
    }
  }
</script>
```

## 多选

<el-select v-model="value7" multiple>
  <el-option
    v-for="item in options"
    :label="item.label"
    :value="item.value">
  </el-option>
</el-select>

```html
<template>
  <el-select v-model="value7" multiple>
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value7: []
      }
    }
  }
</script>
```

## 自定义宽度

<el-select v-model="value8" :width="300" :dropdown-width="350">
  <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
</el-select>

```html
<template>
  <el-select v-model="value8" :width="300" :dropdown-width="350">
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value8: ''
      }
    }
  }
</script>
```

## 分组

<el-select v-model="value9">
  <el-option-group v-for="group in options3" :label="group.label">
    <el-option v-for="item in group.options" :label="item.label" :value="item.value"></el-option>
  </el-option-group>
</el-select>

```html
<template>
  <el-select v-model="value9">
    <el-option-group v-for="group in options3" :label="group.label">
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
          label: '分组1',
          options: [{
            value: '选项1',
            label: '标签1'
          }, {
            value: '选项2',
            label: '标签2'
          }]
        }, {
          label: '分组2',
          options: [{
            value: '选项3',
            label: '标签3'
          }, {
            value: '选项4',
            label: '标签4'
          }, {
            value: '选项5',
            label: '标签5'
          }]
        }],
        value9: ''
      }
    }
  }
</script>
```

## 选项较多时的交互

<el-select v-model="value10">
  <el-option v-for="item in options4" :label="item.label" :value="item.value"></el-option>
</el-select>

```html
<template>
  <el-select v-model="value10">
    <el-option
      v-for="item in options4"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options4: [{
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }, {
          value: '选项6',
          label: '标签6'
        }, {
          value: '选项7',
          label: '标签7'
        }, {
          value: '选项8',
          label: '标签8'
        }, {
          value: '选项9',
          label: '标签9'
        }, {
          value: '选项10',
          label: '标签10'
        }, {
          value: '选项11',
          label: '标签11'
        }],
        value10: ''
      }
    }
  }
</script>
```

## 可搜索

<el-select v-model="value11" filterable>
  <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
</el-select>

```html
<template>
  <el-select v-model="value11" filterable>
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
          value: '选项1',
          label: '标签1'
        }, {
          value: '选项2',
          label: '标签2'
        }, {
          value: '选项3',
          label: '标签3'
        }, {
          value: '选项4',
          label: '标签4'
        }, {
          value: '选项5',
          label: '标签5'
        }],
        value11: ''
      }
    }
  }
</script>
```

## 服务端搜索

<el-select v-model="value12" multiple filterable remote :remote-method="remoteMethod" :loading="loading">
  <el-option v-for="item in options5" :label="item.label" :value="item.value"></el-option>
</el-select>

```html
<template>
  <el-select
    v-model="value12"
    multiple
    filterable
    remote
    :remote-method="remoteMethod"
    :loading="loading">
    <el-option
      v-for="item in options5"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    data() {
      return {
        options5: [],
        value12: [],
        loading: false,
        states: ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"]
      }
    },
    methods: {
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options5 = this.states.filter(item => item.toLowerCase().indexOf(query) > -1).map(item => { return { value: item, label: item }; });
          }, 200);
        }
      }
    }
  }
</script>
```

## API
### el-select
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | select 目前选中的值 | string/number/array | | |
| multiple | 是否多选 | boolean | | false |
| disabled | 是否禁用 | boolean | | false |
| clearable | 单选时是否可以清空选项 | boolean | | false |
| width | select 的宽度 | number | | 180（单选）/220（多选） |
| dropdown-width | 下拉菜单的宽度，不设置则与输入框同宽 | number | | |
| name | select input 的 name 属性 | string | | |
| placeholder | 占位符 | string | | '请选择' |
| filterable | 是否可搜索 | boolean | | false |
| filter-method | 自定义过滤方法 | function | |  |
| remote | 是否为远程搜索 | boolean | | false |
| remote-method | 远程搜索方法，当搜索关键字变化时会调用该方法，参数为目前的搜索关键字 | function | | |
| loading | 是否正在从远程获取数据 | boolean | | false |

### el-select 事件
| 事件名称 | 说明 | 回调参数 |
|---------|---------|---------|
| change | value 发生变化| `value` |

### el-option-group
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| label | 分组的标签 | string | | |
| disabled | 是否将该分组下所有选项置为禁用 | boolean | | false |

### el-option
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value | 选项的值 | string/number | | |
| label | 选项的标签，若不设置则默认与 `value` 相同 | string/number | | |
| disabled | 是否禁用该选项 | boolean | | false |
| selected | 选项是否被初始选中 | boolean | | false |
