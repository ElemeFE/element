## Divider 分割线

区隔内容的分割线。

对不同章节的文本段落进行分割。

对行内文字/链接进行分割，例如表格的操作列。

### 水平分割线

默认为水平分割线，可在中间加入文字。

:::demo
```html
<div>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
  <el-divider></el-divider>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
  <el-divider>With Text</el-divider>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
  <el-divider dashed></el-divider>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
</div>
```
:::

### 标题位置

修改分割线标题的位置。

:::demo
```html
<div>
  <el-divider orientation="left">Left Text</el-divider>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
  <el-divider orientation="right">Right Text</el-divider>
  <p>A new study found that while providers' records are more likely to be breached, far more patient records were compromised by breaches at health plans.</p>
</div>
```
:::
### 垂直分割线

使用 `type="vertical"` 设置为行内的垂直分割线。

:::demo
```html
<div>
  Text
  <el-divider type="vertical"></el-divider>
  <a href="#">Link</a>
  <el-divider type="vertical"></el-divider>
  <a href="#">Link</a>
</div>
```
:::

### Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type        |	水平还是垂直类型 | String  | horizontal、vertical	| horizontal  |
| orientation |	分割线标题的位置 | Number	 | left、right、center  | center      |
| dashed	    | 是否虚线        | Boolean | —	                   | false       |