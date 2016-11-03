## progress

Progress component is used to show the progress of current operation, and inform the user the current status and expected.

### Linear progress bar(external)

:::demo Add `percentage` attribute to inform the percentage of progress, it's **required** for this component, and it must be in the range of `0-100`.

```html
<el-progress :percentage="0"></el-progress>
<el-progress :percentage="70"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>
```

:::

### Linear progress bar(internal)

It doesn't take up addtional controls, you can use it to show the progress of uploading files.

:::demo `stroke-width` attribute decides the `width` of progress bar, and use `text-inside` attribute to put description inside the progress bar.

```html
<el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
```

:::demo

### Circular progress bar

:::demo You can specify `type` attribute to `circle` to use circular progress bar, and use `width` attribute to change the size of circle(progress bar).

```html
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
``` 

:::

### Attributes

Attribute | Description | Type | Options | Default
--- | ---- | ---- | ---- | ----
**percentage** | percentage, **required** | number | 0-100 | 0
type | the type of progress bar | string | line/circle | line
stroke-width | the width of progrss bar | number | --- | 6
text-inside | put description text inside the progress bar or not | boolean | ---| false
status | the current status of operation | string | success/exception | ---
width | the canvas width of circle progress bar | number | --- | 126
show-text | show description text of progress bar or not | boolean | --- | true

