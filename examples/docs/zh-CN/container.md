<style>
  .el-header, .el-footer {
    background-color: #1f2d3d;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #8492a6;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #d3dce6;
    color: #5e6d82;
    text-align: center;
    line-height: 160px;
  }
  
  .demo-container > .source > .el-container {
    margin-bottom: 40px;
  }

  .demo-container > .source > .el-container:nth-child(5) .el-aside,
  .demo-container > .source > .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .demo-container > .source > .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
## Container 布局容器
用于常见布局的容器组件，方便快速搭建页面结构。

:::tip
以下组件采用了 flex 布局，使用前请确定目标浏览器是否兼容
:::

### 常见页面布局

::: demo
```html
<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
  <el-footer>Footer</el-footer>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-main>Main</el-main>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-header>Header</el-header>
  <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-container>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>

<el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>

<style>
  .el-header, .el-footer {
    background-color: #1f2d3d;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #8492a6;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #d3dce6;
    color: #5e6d82;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
```
:::

### 实例

<iframe width="100%" height="500" src="//jsfiddle.net/p7p4tdya/1/embedded/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>
