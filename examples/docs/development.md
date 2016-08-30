## 开发指南

### 构建工具安装

element 是基于 [cooking](http://cookingjs.github.io/) 进行构建开发的。所以运行前你需要全局安装 [cooking](http://cookingjs.github.io/)。

```bash
$ npm install cooking -g
```

### 命令

```bash
$ make install                        ---  安装依赖
$ make new <component-name> [中文名]   ---  创建新组件 package. 例如 '$ make new button 按钮'
$ make dev                            ---  开发模式
$ make dist                           ---  编译项目，生成目标文件
$ make dist-all                       ---  分别编译每个组件项目
$ make deploy                         ---  部署 demo
$ make pub                            ---  发布到 npm 上
$ make pub-all                        ---  发布各组件到 npm 上
```
