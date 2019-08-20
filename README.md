<!--
 * @Description: 项目说明文档
 * @Author: barret
 * @Date: 2019-08-15 19:13:20
 * @LastEditTime: 2019-08-20 20:45:14
 * @LastEditors: barret
 -->
# 基于element@2.4.11以及deepexi-theme开发组件库
主要是收集项目中用到的业务组件，然后提取到该仓库。方便展示，以及跨平台使用。
类似于飞冰、Taro、UNIAPP的物料库。

## 准备工作
定制化element-ui组件说明

### 准备熟悉的知识点
- SASS
- VUE
- mocha
- typescript
- 

## 开发步骤

### 准备环境

1. 将项目clone到本地
```sh
git clone https://github.com/spaasteam/element.git
```

2. 安装项目对应的依赖
```sh
yarn install
```

3. 将elementUI项目跑起来
```sh
yarn dev
# open http://localhost:8085
```

### 生成组件目录
```sh
node build/bin/new.js XXX '测试组件'
# XXX 需要替换为自己添加的组件名 命名规则为xx-xx
# '测试组件' 需要替换为自己添加的组件中文名
```

自动创建了如下文件，也就是需要完善的代码

![qq](https://user-gold-cdn.xitu.io/2018/8/18/1654c15a5b5db143?w=578&h=250&f=png&s=37868)

此时已经可以在浏览器中看到对应的组件了

注意：

如果要修改新增的组件分组，需要找到examples/nav.config.json文件进行更改

### 编写代码
#### 1. 编写组件代码
需要在packages文件夹下找到自己新增的组件文件目录，并在该文件目录下找到src/main.vue编写对应的组件代码。对应的样式不能放置在该组件文件中，需要在packages/theme-chalk/src文件夹下添加对应sass样式

注意：
- 引用组件的时候，不能直接引elementUI的组件（因为我们就在elementUI项目下进行开发），需要引用本地的组件。eg:  import ElInput from 'element-ui/packages/input';
- 谨慎引入第三方的依赖，在引入第三方依赖的时候，需要在package.json文件中添加声明
- 写样式的时候需要注意主题可设置,新加组件的时候，需要在packages/theme-chalk/src/common/var.scss文件中添加声明

### 2. typescript声明文件

需要做的是，将你编写的组件中，动态传入的参数以及开放的api编写一个类型声明，大致的写法如下图

![2018-08-18_154029](https://user-gold-cdn.xitu.io/2018/8/18/1654c15a91d6ce36?w=962&h=1129&f=png&s=86639)

#### 3. 编写测试用例

测试用例便于日后工程维护时，能及时发现错误，减少维护成本。element-ui使用的是mocha测试框架以及chai断言库。

因为工程已经搭建好，所以对于开发人员的学习成本很低，只需要学习chai断言库的使用就好，关于chai断言库的使用，[看这里](http://www.chaijs.com/api/), 这里不教你如何编写测试用例，具体需要测试哪些功能，相信你看了element-ui其他组件的测试用例，自己也能够领悟到的。

#### 4. 添加说明

自动创建的md文件中（其中包括英文文档、西班牙、法语、中文文档），其他语言的文档不做要求，只要求写好中文文档

其中中文文档内容分为三大部分

1.  可执行的脚本文件，文档中包含script脚本包裹的部分
2.  demo文件，图片中部用```html包裹的部分，其中template包裹的代码最终会被渲染至页面上，而script部分仅仅只是文本示例，并不会执行，执行的是图片上部的script脚本
3.  参数选项说明

注意：详情请参考其他的md文档编写

## LICENSE
[MIT](LICENSE)
