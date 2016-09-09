# Element Contributing Guide

Hi! 首先感谢你使用 Element UI。这是一个为开发者、设计师和产品经理准备的一套能让你快速搭建页面的基于 Vue 2.0 的组件库，同时我们还提供了相关设计资源供设计师使用。如果你考虑为 Element 贡献代码的话，请确保阅读下面内容。

## Issue 规范
- issue 仅仅用来提交 Bug 或 Feature 以及设计相关的内容。如果只是简单的问题，请到 Slack 或 [Gitter](https://gitter.im/ElemeFE/element) 里咨询，并且我们会直接关掉。

- 提交 issue 前请搜索下是否有同样的问题已经被 fix 或者回复过了。

- 请确保指明了 Element、Vue 的版本号，以及操作系统和浏览器的版本，最好能提供在线演示的链接。

## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。

- 提交前**不要提交** `lib` 里面打包的文件。

- 执行 `npm run dist` 后可以正确打包文件。

- 为了兼容和最终打包的文件体积考虑，我们的 babel 只引入了 `preset-2015`，所以不建议使用 ES2015 的 API，例如 `Array.prototype.find`、`Object.assign`等。如果有需要，请引入第三方的 polyfill。

- 如果是修复 bug，请给出描述信息在 PR 里。

- 合并代码需要两名维护人员参与：一人进行 review 后留言 lgtm，另一人再次 review，通过后即可合并。

## 开发环境搭建
首先你需要 Node.js 4+ 和 NPM 3+
```shell
npm run dev

# open http://localhost:8085
```

如果国内用户觉得安装慢可以使用 [npminstall](https://github.com/cnpm/npminstall)
```shell
npm i npminstall -g
npminstall
npm run dev

# open http://localhost:8085
```

To build:

```shell
npm run dist
```

## 代码规范
遵循 lint 即可
