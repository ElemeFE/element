## Loading 加载

加载数据时显示动效。

### 指令方式加载

在表格等容器上使用指令显示loading动效。

:::demo Element 提供了两种调用 Loading 的方法：指令和服务。对于自定义指令`v-loading`，只需要绑定`Boolean`即可。默认状况下，Loading 遮罩会插入到绑定元素的子节点，通过添加`fullscreen`修饰符，可以使遮罩插入至 DOM 中的 body 上全屏遮罩。
```html
<template>
  <el-table
    v-loading="loading"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        loading: true
      };
    },
    created(){
      setInterval(() => {
        this.loading = !this.loading;
      },2000);
    }
  };
</script>
```
:::

### 服务方式加载

点击按钮或者请求后端数据时展示loading动效

:::demo Element 提供了两种调用 Loading 的方法：指令和服务。对于服务方法`$loading`，只需要调用即可。默认状况下，Loading 遮罩会插入`body`中，通过指定`target`参数，可以使遮罩插入至对应的 DOM 中并遮罩之，target可以为html元素、元素选择器、vue实例。
```html
<template>
  <el-table
    ref="table"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div class="btn-container">
    <el-button
      type="primary"
      @click="refresh">
      服务方式
    </el-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    methods: {
      refresh(){
        const loading = this.$loading({
          target: this.$refs['table']
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  };
</script>
```
:::

### 整页加载

页面数据加载时显示。

:::demo 当使用指令方式时，全屏遮罩需要添加`fullscreen`修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用`lock`修饰符；当使用服务方式时，设置`fullscreen`参数为 true 即可全屏遮罩（遮罩会插入至 body 上）, 添加`lock`参数为 true 即可锁定屏幕的滚动。

```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          fullscreen: true
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
```
:::

### 自定义一

可自定义加载文案、图标和背景色。

:::demo 在绑定了`v-loading`指令的元素上添加`element-loading-text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`element-loading-spinner`和`element-loading-background`属性分别用来设定图标类名和背景色值。在服务中`$loading`方法中使用参数`text`属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，`spinner`和`background`属性分别用来设定图标类名和背景色值。
```html
<template>
  <el-button
    type="primary"
    @click="openFullScreen1"
    element-loading-text="loading1拼命加载中..."
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </el-button>
  <el-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </el-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          fullscreen: true,
          text: 'loading2拼命加载中...',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.8)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>
```

:::

### 自定义二

自定义loading内dom元素并制作自定义loading

:::demo 使用服务方法`$loading`，传入参数`render`方法，构建自定义dom元素；该函数参数和`vue`的`render`方法一致。
```html
<template>
  <el-table
    ref="table"
    :data="tableData"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
  <div class="btn-container">
    <el-button
      type="primary"
      @click="refresh">
      服务方式
    </el-button>
  </div>
</template>

<style>
@mixin loadingChild($index) {
  $innerIndex: $index - 1;
  $seconds: 1.2 - $innerIndex * 0.1;
  &:nth-child(#{$index}){
      transform: rotate($innerIndex* 30deg);
      &:before{
          animation-delay: -#{$seconds}s;
      }
  }
}

.custom-loading{
  .custom-loading__spinner{
    width: 80px;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .custom-loading__spinner--circle{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &:before{
          content: '';
          display: block;
          width: 15%;
          height: 15%;
          border-radius: 50%;
          background-color: #409EFF;
          margin: 0 auto;
          animation: bounceDelay 1.2s ease-in-out both infinite;
      }

      @include loadingChild(2);
      @include loadingChild(3);
      @include loadingChild(4);
      @include loadingChild(5);
      @include loadingChild(6);
      @include loadingChild(7);
      @include loadingChild(8);
      @include loadingChild(9);
      @include loadingChild(10);
      @include loadingChild(11);
      @include loadingChild(12);
    }
  }
}

@keyframes bounceDelay{
  0%{
      transform: scale(1);
  }
  50%{
      transform: scale(0);
  }
}
</style>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      };
    },
    methods: {
      refresh(){
        const loading = this.$loading({
          target: this.$refs['table'],
          customClass: 'custom-loading',
          render(h) {
            const nodes = [];
            let num = 12;

            while(num--){
              nodes.push(h('div', {
                class: 'custom-loading__spinner--circle'
              }));
            }

            return h('div', {
              class: 'custom-loading__spinner'
            },nodes);
          }
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  };
</script>
```
:::

### 服务
Loading 还可以以服务的方式调用。引入 Loading 服务：
```javascript
import { Loading } from 'element-ui';
```
在需要调用时：
```javascript
Loading.service(options);
```
其中 `options` 参数为 Loading 的配置项，具体见下表。`LoadingService` 会返回一个 Loading 实例，可通过调用该实例的 `close` 方法来关闭它：
```javascript
let loadingInstance = Loading.service(options);
this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});
```
需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：
```javascript
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
此时调用它们中任意一个的 `close` 方法都能关闭这个全屏 Loading。

如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法 `$loading`，它的调用方式为：`this.$loading(options)`，同样会返回一个 Loading 实例。

### Options
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象、字符串或vue已挂载实例；若传入字符串，则会将其作为参数传入 `document.querySelector`以获取到对应 DOM 节点 | object/string/vm | — | document.body |
| fullscreen | 同 `v-loading` 指令中的 `fullscreen` 修饰符 | boolean | — | true |
| lock | 同 `v-loading` 指令中的 `lock` 修饰符 | boolean | — | false |
| render | 调用`vue`的`render`方法制作dom节点,该方法返回false取消自定义。自定义loading优先级高于text、spinner等参数 | Function(h, context) | — | — |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| spinner | 自定义加载图标类名 | string | — | — |
| background | 遮罩背景色 | string | — | — |
| customClass | Loading 的自定义类名 | string | — | — |