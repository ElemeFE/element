<style>
  .demo-box {
    .el-autocomplete {
      width: 180px;
    }
    .el-autocomplete__suggestions.my-autocomplete-suggestions {
      width: 300px;

      & .remark {
        float: right;
        font-size: 13px;
      }
    }
  }
</style>
<script>
  var $q = require('q');

  export default {
    data() {
      return {
        states: [],
        state1: '',
        state2: '',
        state3: '',
        state4: '',
        myPartial: {
          name: 'my-autocomplete-suggestions',
          template: '<span class="label">选项{{$index}}</span><span class="remark">{{item.display}}</span>'
        }
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
      querySearch(query, simulateQuery) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states,
            deferred;
        
        if (simulateQuery) {
          if (!query) { return []; }

          deferred = $q.defer();

          setTimeout(() => {
            deferred.resolve(results);
          }, Math.random() * 3000, false);

          return deferred.promise;
        } else {
          return results;
        }
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

## 基础使用

<div class="demo-box">
  <el-autocomplete
    :value.sync = "state1"
    :suggestions = "querySearch(state1)"
    placeholder = "请输入内容"
  ></el-autocomplete>
</div>

```html
<template>
  <el-autocomplete
    :value.sync = "state1"
    :suggestions = "querySearch(state1)"
    placeholder = "请输入内容"
  ></el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
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
      querySearch(query, simulateQuery) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states,
            deferred;
        
        if (simulateQuery) {
          if (!query) { return []; }

          deferred = $q.defer();

          setTimeout(() => {
            deferred.resolve(results);
          }, Math.random() * 3000, false);

          return deferred.promise;
        } else {
          return results;
        }
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

## 通过键盘控制下拉的显示

<div class="demo-box">
  <el-autocomplete
    :value.sync = "state2"
    :suggestions = "querySearch(state2)"
    :show-on-up-down = "true"
    placeholder = "请输入内容"
  ></el-autocomplete>
</div>

```html
<template>
  <el-autocomplete
    :value.sync = "state2"
    :suggestions = "querySearch(state2)"
    :show-on-up-down = "true"
    placeholder = "请输入内容"
  ></el-autocomplete>
</template>
<script>
  export default {
    data() {
      return {
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
      querySearch(query, simulateQuery) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states,
            deferred;
        
        if (simulateQuery) {
          if (!query) { return []; }

          deferred = $q.defer();

          setTimeout(() => {
            deferred.resolve(results);
          }, Math.random() * 3000, false);

          return deferred.promise;
        } else {
          return results;
        }
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

## 自定义模板

<div class="demo-box">
  <el-autocomplete
    :value.sync = "state3"
    :suggestions = "querySearch(state3)"
    :partial = "myPartial"
    placeholder = "请输入内容"
  ></el-autocomplete>
</div>

```html
<el-autocomplete
  :value.sync = "state3"
  :suggestions = "querySearch(state3)"
  :partial = "myPartial"
  placeholder = "请输入内容"
></el-autocomplete>

<script>
  export default {
    data() {
      return {
        state3: '',
        myPartial: {
          name: 'my-autocomplete-suggestions',
          template: '<span class="label">选项{{$index}}</span><span class="remark">{{item.display}}</span>'
        }
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
      querySearch(query, simulateQuery) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states,
            deferred;
        
        if (simulateQuery) {
          if (!query) { return []; }

          deferred = $q.defer();

          setTimeout(() => {
            deferred.resolve(results);
          }, Math.random() * 3000, false);

          return deferred.promise;
        } else {
          return results;
        }
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

## 服务端数据

<div class="demo-box">
  <el-autocomplete
    :value.sync = "state4"
    :suggestions = "querySearch(state4, true)"
    :search-from-server = "true"
    placeholder = "请输入内容"
  ></el-autocomplete>
</div>

```html
<el-autocomplete
  :value.sync = "state4"
  :suggestions = "querySearch(state4, true)"
  :search-from-server = "true"
  placeholder = "请输入内容"
></el-autocomplete>
<script>
  var $q = require('q');

  export default {
    data() {
      return {
        state4: ''
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
      querySearch(query, simulateQuery) {
        var states = this.states;
        var results = query ? states.filter(this.createStateFilter(query)) : states,
            deferred;
        
        if (simulateQuery) {
          if (!query) { return []; }

          deferred = $q.defer();

          setTimeout(() => {
            deferred.resolve(results);
          }, Math.random() * 3000, false);

          return deferred.promise;
        } else {
          return results;
        }
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
| suggestions   | 建议列表 | array,object  |  |  |
| value         | 输入绑定值   | string  |                     |         |
| showOnUpDown  | 是否通过键盘上下键控制建议列表 | boolean  |    |         |
| partial       | 建议列表的自定义模板           | object  |                       |         |
