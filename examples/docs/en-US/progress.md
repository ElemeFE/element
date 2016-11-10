## Progress

Progress is used to show the progress of current operation, and inform the user the current status.

### Linear progress bar (external percentage)

:::demo Use `percentage` attribute to set the percentage. It's **required** and must be between `0-100`.
```html
<el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
```
:::

### Linear progress bar (internal percentage)

In this case the percentage takes no additional space.

:::demo `stroke-width` attribute decides the `width` of progress bar, and use `text-inside` attribute to put description inside the progress bar.
```html
<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
```
:::

### Circular progress bar

:::demo You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle.
```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
``` 
:::

### Attributes
| Attribute      | Description          | Type      | Accepted Values       | Default  |
| --- | ---- | ---- | ---- | ---- |
| **percentage** | percentage, **required** | number | 0-100 | 0 |
| type | the type of progress bar | string | line/circle | line |
| stroke-width | the width of progress bar | number | — | 6 |
| text-inside | whether to place the percentage inside progress bar, only works when `type` is 'line' | boolean | — | false |
| status | the current status of progress bar | string | success/exception | — |
| width | the canvas width of circle progress bar | number | — | 126 |
| show-text | whether to show percentage | boolean | — | true |

