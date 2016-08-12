<style>
  .demo-box {
    .el-autocomplete {
      width: 180px;
    }
    .my-suggestions-item {
      & .remark {
        float: right;
        font-size: 13px;
      }
    }
  }
</style>
<script>
  var Vue = require('vue');
  Vue.component('my-item', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', {
        attrs: { class: 'my-suggestions-item' }
      }, [
        h('span', { attrs: { class: 'label' } }, ['选项' + ctx.props.index]),
        h('span', { attrs: { class: 'remark' } }, [item.display])
      ]);
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    }
  });
  export default {
    data() {
      return {
        states: [],
        state1: '',
        state2: '',
        state3: '',
        state4: '',
        timeout: null
      }
    },
    methods: {
      loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        var result = [];

        allStates.split(/, +/g).forEach((state) => {
          if (state) {
            result.push({
              value: state.toLowerCase(),
              display: state
            });
          }
        });

        return result;
      },
      querySearch(queryString, cb) {
        var states = this.states;
        var results = queryString ? states.filter(this.createStateFilter(queryString)) : states;
        
        cb(results);
      },
      querySearchAsync(queryString, cb) {
        var states = this.states;
        var results = queryString ? states.filter(this.createStateFilter(queryString)) : states;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      }
    },
    mounted() {
      this.states = this.loadAll();
    }
  };
</script>

## 基础使用

<div class="demo-box">
  <el-autocomplete
    v-model="state1"
    :fetch-suggestions="querySearch"
    placeholder="请输入内容"
  ></el-autocomplete>
</div>

```html
<template>
  <el-autocomplete
    v-model="state1"
    :fetch-suggestions="querySearch"
    placeholder="请输入内容"
  ></el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
        states: [],
        state1: ''
      }
    },
    methods: {
      loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        var result = [];

        allStates.split(/, +/g).forEach((state) => {
          if (state) {
            result.push({
              value: state.toLowerCase(),
              display: state
            });
          }
        });

        return result;
      },
      querySearch(queryString, callback) {
        var states = this.states;
        var results = queryString ? states.filter(this.createStateFilter(queryString)) : states;
        
        callback(results);
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      }
    },
    mounted() {
      this.states = this.loadAll();
    }
  };
</script>
```

## 自定义模板

<div class="demo-box">
  <el-autocomplete
    v-model="state2"
    :fetch-suggestions="querySearch"
    custom-item="my-item"
    placeholder="请输入内容"
  ></el-autocomplete>
</div>

```html
<el-autocomplete
  v-model="state2"
  :fetch-suggestions="querySearch"
  custom-item="my-item"
  placeholder="请输入内容"
></el-autocomplete>

<script>
  var Vue = require('vue');
  Vue.component('my-item', {
    functional: true,
    render: function (h, ctx) {
      var item = ctx.props.item;
      return h('li', {
        attrs: { class: 'my-suggestions-item' }
      }, [
        h('span', { attrs: { class: 'label' } }, ['选项' + ctx.props.index]),
        h('span', { attrs: { class: 'remark' } }, [item.display])
      ]);
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      index: {
        type: Number
      }
    }
  });
  export default {
    data() {
      return {
        states: [],
        state2: ''
      }
    },
    methods: {
      loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        var result = [];

        allStates.split(/, +/g).forEach((state) => {
          if (state) {
            result.push({
              value: state.toLowerCase(),
              display: state
            });
          }
        });

        return result;
      },
      querySearch(queryString, cb) {
        var states = this.states;
        var results = queryString ? states.filter(this.createStateFilter(queryString)) : states;
        
        cb(results);
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.indexOf(queryString.toLowerCase()) === 0);
        };
      }
    },
    mounted() {
      this.states = this.loadAll();
    }
  };
</script>
```

## 服务端数据

<div class="demo-box">
  <el-autocomplete
    v-model="state3"
    placeholder = "请输入内容"
    :fetch-Suggestions="querySearchAsync"
  ></el-autocomplete>
</div>

```html
<template>
  <el-autocomplete
    v-model="state3"
    placeholder = "请输入内容"
    :fetch-Suggestions="querySearchAsync"
  ></el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
        state3: '',
        states: []
      }
    },
    methods: {
      loadAll() {
        var allStates = 'Alabama, Alaska, Arizona, Arkansas, California, Colorado, Connecticut, Delaware,\
                Florida, Georgia, Hawaii, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana,\
                Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana,\
                Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina,\
                North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina,\
                South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, West Virginia,\
                Wisconsin, Wyoming';
        var result = [];

        allStates.split(/, +/g).forEach((state) => {
          if (state) {
            result.push({
              value: state.toLowerCase(),
              display: state
            });
          }
        });

        return result;
      },
      querySearchAsync(query, callback) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states;

        if (!query) { return []; }

        setTimeout(() => {
          callback(results);
        }, 3000 * Math.random());        
      },
      createStateFilter(query) {
        return (state) => {
          return (state.value.indexOf(query.toLowerCase()) === 0);
        };
      }
    },
    ready() {
      this.states = this.loadAll();
    }
  };
</script>
```

## API
| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| placeholder   | 输入框占位文本   | string          |                       |         |
| disabled      | 禁用            | boolean         | true, false           | false   |
| value         | 必填值输入绑定值   | string  |                     |         |
| showOnUpDown  | 是否通过键盘上下键控制建议列表 | boolean  |    |         |
| fetch-suggestions | 返回输入建议的方法，组件内部通过调用该方法来获得输入建议的数据，在该方法中，仅当你的输入建议数据 resolve 时再通过调用 callback(data:[]) 来返回它  | Function(queryString, callback)  |        |         |
