## Input

Use mouse or keyboard to input something

### How to use

::: demo

```html
<el-input
  placeholder="input something"
  v-model="input">
</el-input>
```
:::

### Disabled

Set the `disabled` attribute to decide whether it should be disabled.

::: demo

```html
<el-input
  placeholder="input something"
  v-model="input1"
  :disabled="true"> <!-- v-bind:disabled='true' >
</el-input>
```
:::

### Input with icon

::: demo You can add a markable icon in the tail of input component by setting the `icon` attribute.

```html
<el-input
  placeholder="choose date"
  icon="time"
  v-model="input2">
</el-input>
```

### Textarea

Resizable for entering multiple lines of text information.

::: demo Add attribute `type="textarea"` to change `input` to `textarea`, just like `<textarea>` in HTML.

```html
<el-input
  type="textarea"
  v-model="textarea">
</el-input>
```
### Mixed input

Pretend or append an element，generally the element is a label or a button.

::: demo You can add `slot` attribute in `<template>` element and choose which  to place at input box.

```html
<el-input placeholder="input something" v-model="input3">
  <template slot="prepend">Http://</template>
</el-input>
<el-input placeholder="input something" v-model="input4">
  <template slot="append">.com</template>
</el-input>
<el-input placeholder="input something" v-model="input5" style="width: 300px;">
  <el-select v-model="select" slot="prepend">
    <el-option label="restaurant" value="1"></el-option>
    <el-option label="order number" value="2"></el-option>
    <el-option label="tel" value="3"></el-option>
  </el-select>
  <el-button slot="append" icon="search"></el-button>
</el-input>
```
:::

### Size

Add `size` attribute to change the size of your Input component. In addtion to the `default` size, there are other three options: `large`, `small` and `mini`.

```html
<div class="inline-input">
  <el-input
    size="large"
    placeholder="input something"
    v-model="input6">
  </el-input>
  <el-input
    placeholder="input something"
    v-model="input7">
  </el-input>
  <el-input
    size="small"
    placeholder="input something"
    v-model="input8">
  </el-input>
  <el-input
    size="mini"
    placeholder="input something"
    v-model="input9">
  </el-input>
</div>
```
:::

### Autocomplete(provide some tips while inputing)

You can get some recommended tips based on the text you have inputted.

Autocomplete component provides you some advice based on the text you have inputted. The `fetch-suggestions` attribute is a method that can return recommended items. For example, `querySearch(queryString, cb)`, in this method, if the recommended items are ready(or loaded), the data will be injected in this component via `cb(data)`.

::: demo

```html
<el-row class="inline-input border-grid">
  <el-col :span="12" class="tac">
    <div class="text">activate and list all recommended items</div>
    <el-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      placeholder="input something"
      @select="handleSelect"
    ></el-autocomplete>
  </el-col>
  <el-col :span="12" class="tac">
    <div class="text">input and match recommended items</div>
    <el-autocomplete
      v-model="state2"
      :fetch-suggestions="querySearch"
      placeholder="input something"
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
        var links = this.links
        var results = queryString ? links.filter(this.createFilter(queryString)) : links;
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
          { "repo": "vue", "link": "https://github.com/vuejs/vue" },
          { "repo": "element", "link": "https://github.com/ElemeFE/element" },
          { "repo": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "repo": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "repo": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "repo": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "repo": "babel", "link": "https://github.com/babel/babel" }
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

Customize your recommended items.

:::demo

```html
<el-autocomplete
  class="my-autocomplete"
  v-model="state3"
  :fetch-suggestions="querySearch"
  custom-item="my-item"
  placeholder="input something"
  @select="handleSelect"
></el-autocomplete>

<script>
  var Vue = require('vue');
  Vue.component('my-item', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', ctx.data, [
        h('div', { attrs: { class: 'repo' } }, [item.repo]),
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
        var links = this.restaurants;
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
          { "repo": "vue", "link": "https://github.com/vuejs/vue" },
          { "repo": "element", "link": "https://github.com/ElemeFE/element" },
          { "repo": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "repo": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "repo": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "repo": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "repo": "babel", "link": "https://github.com/babel/babel" }
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

```html
<el-autocomplete
  v-model="state4"
  :fetch-suggestions="querySearchAsync"
  placeholder="input something"
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
          { "repo": "vue", "link": "https://github.com/vuejs/vue" },
          { "repo": "element", "link": "https://github.com/ElemeFE/element" },
          { "repo": "cooking", "link": "https://github.com/ElemeFE/cooking" },
          { "repo": "mint-ui", "link": "https://github.com/ElemeFE/mint-ui" },
          { "repo": "vuex", "link": "https://github.com/vuejs/vuex" },
          { "repo": "vue-router", "link": "https://github.com/vuejs/vue-router" },
          { "repo": "babel", "link": "https://github.com/babel/babel" }
         ];
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
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>
```

### Input API

Attribute | Description | Type | Options | Default
----| ----| ----| ---- | -----
type| it‘s same as type attribute in html, if type="textarea", the element will change into `textarea`.| string| ---|---
value| binding value | string/number|---|---
maxlength| the maxium input text length| number| ---|---
minlenght| the minium input text length| number | ---| ---
placeholder| the placeholder of input| string | --- | ---
disabled | disable your input box | boolean | --- | false
size | set the size of input box | string | large/small/mini | ---
icon | add a icon at the tail of input box | string | --- | ---
number | set the binding value of model as number type | boolean | --- | false

### Autocomplete API

Attribute | Description | Type | Options | Default
----| ----| ----| ---- | -----
placeholder| the placeholder of input| string | --- | ---
disabled | disable your input box | boolean | --- | false

### Autocomplete Events

Event |  Description | Callback
----| ----| ----|
select | it will be triggered when you select the recommended item | the recommended item that you select






