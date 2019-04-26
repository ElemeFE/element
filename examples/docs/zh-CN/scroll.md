## Scroll 无限滚动

无限滚动组件，翻页的另一种展现方式，常用于加载更多数据。

### 基本用法

当滚动到底部时，触发加载更多。

:::demo 将滚动的内容用`el-scroll`包裹起来，并指定`height`或`maxHeight`属性具体值即可。
```html
<div>
    <el-scroll
     :height="300"
     :loading="loading"
     loading-text="加载中"
     @scroll-to-bottom="onScrollToBottom">
         <ul>
            <li v-for="(news, index) in newsList" :key="index">
              <h2>{{news.title}}</h2>
              <p>{{news.content}}</p>
            </li>
          </ul>
    </el-scroll>
</div>
<script>
export default {
  data () {
    return {
      loading: false,
      newsList: [
        { title: '新闻标题1', content: '内容1' },
        { title: '新闻标题2', content: '内容2' },
        { title: '新闻标题3', content: '内容3' },
        { title: '新闻标题4', content: '内容4' },
        { title: '新闻标题5', content: '内容5' }
      ]
    }
  },
  methods: {
    onScrollToBottom () {
      this.loading = true
      setTimeout(() => {
        this.newsList.push({
          title: `新闻标题${this.newsList.length + 1}`,
          content: `内容${this.newsList.length + 1}`
        })
        this.loading = false
      }, 1000)
    }
  }
}
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| height | 组件高度，单位 px | number | — | —  |
| maxHeight | 组件最大高度，单位 px | number | — | —  |
| threshold| 底部触发阈值，单位 px | number | — | 0 |
| loadingText | 显示在加载图标下方的加载文案 | string | — | — |
| loading | 是否显示加载图标 | boolean | — | true |

### Events
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| scroll-to-bottom | 内容滚动到底部时触发 | 当前`scroll`实例 |
