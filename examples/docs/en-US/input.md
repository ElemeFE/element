<script>
  var Vue = require('vue');
  Vue.component('my-item-en', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'value' } }, [item.value]),
        h('span', { attrs: { class: 'link' } }, [item.link])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        links: [],
        input: '',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        input7: '',
        input8: '',
        input9: '',
        textarea: '',
        select: '',
        state1: '',
        state2: '',
        state3: '',
        state4: ''
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
        ];
      },
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        cb(results);
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createStateFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      },
      handleIconClick(ev) {
        console.log(ev);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>

<style>
  .demo-input.demo-en-US {
    .el-select .el-input {
      width: 120px;
    }
    .text {
      font-size: 14px;
      color: #8492a6;
    }
    .el-input {
      width: 180px;

      & + .el-input,
      & + .el-textarea {
        margin-top: 15px;
      }
    }
    .el-textarea {
      width: 414px;
    }
    .el-input-group {
      min-width: 260px;
    }
    .el-input-group + .el-input-group {
      margin-top: 15px;
    }
    .el-autocomplete {
      display: inline-block;
    }
    .inline-input {
      &.el-input {
        display: inline-block;
        vertical-align: top;
        margin: 10px 5px;
      }
      &.el-autocomplete {
        display: inline-block;
        margin: 10px 0 0;
      }
    }
    .tac {
      text-align: center;

      .el-autocomplete {
        text-align: left;
      }
    }
    .el-row.border-grid {
      .el-col:not(:last-child) {
        border-right: 1px solid rgba(224,230,237,0.50);
      }
    }
    .my-autocomplete {
      li {
        line-height: normal;
        padding: 7px *;

        .value {
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .link {
          font-size: 12px;
          color: #b4b4b4;
        }
      }
    }
  }
</style>

## Input

Input data using mouse or keyboard.

### Basic usage

::: demo

```html
<el-input
  placeholder="Please input"
  v-model="input">
</el-input>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```
:::

### Disabled

::: demo Disable the Input with the `disabled` attribute.

```html
<el-input
  placeholder="Please input"
  v-model="input1"
  :disabled="true">
</el-input>

<script>
export default {
  data() {
    return {
      input1: ''
    }
  }
}
</script>
```
:::

### Input with icon

Add an icon to indicate input type.

::: demo You can add an icon at the end of Input by setting the `icon` attribute.

```html
<el-input
  placeholder="Pick a date"
  icon="time"
  v-model="input2"
  @click="handleIconClick">
</el-input>

<script>
export default {
  data() {
    return {
      input2: ''
    }
  },
  methods: {
    handleIconClick(ev) {
      console.log(ev);
    }
  }
}
</script>
```
:::

### Textarea

Resizable for entering multiple lines of text information.

::: demo Add attribute `type="textarea"` to change `input` into native `textarea`.

```html
<el-input
  type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}"
  placeholder="Please input"
  v-model="textarea">
</el-input>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```
:::

### Mixed input

Prepend or append an element, generally a label or a button.

::: demo Use `slot` to distribute elements that prepend or append to Input.

```html
<el-input placeholder="Please input" v-model="input3">
  <template slot="prepend">Http://</template>
</el-input>
<el-input placeholder="Please input" v-model="input4">
  <template slot="append">.com</template>
</el-input>
<el-input placeholder="Please input" v-model="input5" style="width: 300px;">
  <el-select v-model="select" slot="prepend" placeholder="Select">
    <el-option label="Restaurant" value="1"></el-option>
    <el-option label="Order No." value="2"></el-option>
    <el-option label="Tel" value="3"></el-option>
  </el-select>
  <el-button slot="append" icon="search"></el-button>
</el-input>

<style>
.el-select .el-input {
  width: 120px;
}
</style>

<script>
export default {
  data() {
    return {
      input3: '',
      input4: '',
      input5: '',
      select: ''
    }
  }
}
</script>
```
:::

### Sizes

::: demo Add `size` attribute to change the size of Input. In addition to the default size, there are three other options: `large`, `small` and `mini`.
```html
<div>
  <el-input
    class="inline-input"
    size="large"
    placeholder="Please input"
    v-model="input6">
  </el-input>
  <el-input
    class="inline-input"
    placeholder="Please input"
    v-model="input7">
  </el-input>
  <el-input
    class="inline-input"
    size="small"
    placeholder="Please input"
    v-model="input8">
  </el-input>
  <el-input
    class="inline-input"
    size="mini"
    placeholder="Please input"
    v-model="input9">
  </el-input>
</div>

<script>
export default {
  data() {
    return {
      input6: '',
      input7: '',
      input8: '',
      input9: ''
    }
  }
}
</script>
```
:::

### Auto complete

You can get some recommended tips based on the current input.

::: demo Autocomplete component provides input suggestions. The `fetch-suggestions` attribute is a method that returns suggested input. In this example, `querySearch(queryString, cb)` returns suggestions to Autocomplete via `cb(data)` when suggestions are ready.
```html
<el-row class="border-grid">
  <el-col :span="12" class="tac">
    <div class="text">list suggestions when activated</div>
    <el-autocomplete
      class="inline-input"
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="Please input"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12" class="tac">
    <div class="text">list suggestions on input</div>
    <el-autocomplete
      class="inline-input"
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="Please input"
      :trigger-on-focus="false"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
</el-row>
<script>
  export default {
    data() {
      return {
        links: [],
        state1: '',
        state2: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
        // call callback function to return suggestions
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Custom template

Customize how suggestions are displayed.

:::demo
```html
<el-autocomplete
  class="my-autocomplete"
  v-model="state3"
  :fetch-suggestions="querySearch"
  custom-item="my-item-en"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>

<style>
  .my-autocomplete {
    li {
      line-height: normal;
      padding: 7px;

      .value {
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .link {
        font-size: 12px;
        color: #b4b4b4;
      }
    }
  }
</style>

<script>
  Vue.component('my-item-en', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'value' } }, [item.value]),
        h('span', { attrs: { class: 'link' } }, [item.link])
      ]);
    },
    props: {
      item: { type: Object, required: true }
    }
  });
  export default {
    data() {
      return {
        links: [],
        state3: ''
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var links = this.links;
        var results = queryString ? link.filter(this.createFilter(queryString)) : links;
        // call callback function to return recommended data
        cb(results);
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  }
</script>
```
:::

### Remote search

Search data from server-side.

::: demo
```html
<el-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="Please input"
  @select="handleSelect"
></el-autocomplete>
<script>
  export default {
    data() {
      return {
        links: [],
        state4: '',
        timeout:  null
      };
    },
    methods: {
      loadAll() {
        return [
          { "value": "vue", "link": "https://github.com/vuejs/vue" },
          { "value": "element", "link": "https://github.com/ElemeFE/element" },
          { "value": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "value": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "value": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "value": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "value": "babel", "link": "https://github.com/babel/babel" }
         ];
      },
      querySearchAsync(queryString, cb) {
        var links = this.links;
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createFilter(queryString) {
        return (link) => {
          return (link.value.indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.links = this.loadAll();
    }
  };
</script>
```
:::

### Input Attributes

| Attribute      | Description          | Type      | Accepted Values       | Default  |
| ----| ----| ----| ---- | ----- |
|type| Same as the `type` attribute of native input, except that it can be `textarea` | string | — | text |
|value| binding value | string/number| — | — |
|maxlength| maximum Input text length| number| — | — |
|minlength| minimum Input text length| number | — | — |
|placeholder| placeholder of Input| string | — | — |
|disabled | whether Input is disabled | boolean | — | false |
|size | size of Input, works when `type` is not 'textarea' | string | large/small/mini | — |
|icon | icon name | string | — | — |
|rows | number of rows of textarea, only works when `type` is 'textarea' | number | — | 2 |
|autosize | whether textarea has an adaptive height, only works when `type` is 'textarea'. Can accept an object, e.g. { minRows: 2, maxRows: 6 }  | boolean/object | — | false |
|auto-complete | same as `auto-complete` in native input | string | on/off | off |
|name | same as `name` in native input | string | — | — |
|max | same as `max` in native input | * | — | — |
|min | same as `min` in native input | * | — | — |
|autofocus | same as `autofocus` in native input | boolean | — | false |
|form | same as `form` in native input | string | — | — |


### Input Events

| Event Name | Description | Parameters |
|----| ----| ----|
|click | triggers when the icon inside Input is clicked | event object |

### Autocomplete Attributes

Attribute | Description | Type | Options | Default
|----| ----| ----| ---- | -----|
|placeholder| the placeholder of Autocomplete| string | — | — |
|disabled | whether Autocomplete is disabled  | boolean | — | false|
|value | binding value | string | — | — |
|custom-item | component name of your customized suggestion list item | string | — | — |
|fetch-suggestions | a method to fetch input suggestions. When suggestions are ready, invoke `callback(data:[])` to return them to Autocomplete | Function(queryString, callback) | — | — |

### Autocomplete Events

| Event Name | Description | Parameters |
|----| ----| ----|
|select | triggers when a suggestion is clicked | suggestion being clicked |






