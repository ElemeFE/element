<style>
    #back-top-target {
        height: 400px;
        border: solid 1px #ddd;
        padding: 20px;
        margin: 20px;
        overflow: auto;
    }
    #back-top-target div {
        height: 280px;
    }

</style>

<script>
    export default {
        data() {
            return {
                customStyle: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(10, 220, 80)'
                },
                styleObject: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(87, 197, 247)'
                }
            }
        },
        methods: {
            handler() {
                console.log('噢');
            },
            getTarget() {
                const el = window.document.getElementsByClassName('page-component__scroll el-scrollbar')[0].children[0];
                return el;
            },
            getTarget1() {
                return document.getElementById("back-top-target");
            }

        }
    }
</script>


# BackTop 回到顶部

返回页面顶部的操作按钮。

### 基本
最简单的用法
:::demo
```html
<template>
    向下滚动后，见右下角灰色按钮
    <el-back-top :target='getTarget'></el-back-top>
</template>
```
:::

### 自定义样式
可以自定义回到顶部按钮的样式，限制宽高：`40px * 40px`。
:::demo
```html
<template>
    向下滚动后，见右下角蓝色按钮
    <el-back-top :height="600" :target='getTarget' :bottom='150' :right='50' @click="handler">
        <div :style="styleObject">UP</div>
    </el-back-top>
</template>
<script>
    export default {
        data: function() {
            return {
                styleObject: {
                    height: '40px',
                    width: '40px',
                    lineHeight: '40px',
                    borderRadius: '4px',
                    color: 'rgb(255, 255, 255)',
                    textAlign: 'center',
                    fontSize: '20px',
                    backgroundColor: 'rgb(87, 197, 247)'
                }
            }
        },
        methods: {
            handler() {
                console.log('噢');
            }
        }
    }
</script>
```
:::

### Attributes
| 参数        | 说明           | 类型               | 可选值 | 默认值       |
|-------------|----------------|--------------------|-------|--------------|
| height    | 滚动高度达到此参数值才出现 `BackTop` 组件 | number | — | 400        |
| right     | 组件距离右部的距离 | number | — | 100        |
| bottom    | 组件距离底部的距离 | number | — | 50         |
| icon      | 图标类名 | string | — | el-icon-caret-top   |
| target    | 设置需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 | Function | — | () => window |

### Events
| 事件名称 | 说明 | 回调参数 |
|----------|--------|----------|
| click | 点击按钮时触发   | 无 |