# Element UI 贡献指南

Hi! 首先感谢你使用 Element UI。

Element UI 是一套为开发者、设计师和产品经理准备的开源组件库，旨在快速搭建页面。它基于 Vue 2.0 开发，并提供了配套的设计资源，充分满足可定制化的需求。

Element UI 的成长离不开大家的支持，如果你愿意为 Element UI 贡献代码或提供建议，请阅读以下内容。

## Issue 规范
- issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。如果你在使用时产生了疑问，请到 Slack 或 [Gitter](https://gitter.im/ElemeFE/element) 里咨询。

- 在提交 issue 之前，请搜索相关内容是否已被提出。

- 请说明 Element UI 和 Vue 的版本号，并提供操作系统和浏览器信息。推荐使用 [JSFiddle](https://jsfiddle.net/) 生成在线 demo，这能够更直观地重现问题。

## Pull Request 规范
- 请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以`[组件名]: 描述信息` 的形式填写，例如 `Button: fix xxx bug`。

- **不要提交** `lib` 里面打包的文件。

- 执行 `npm run dist` 后可以正确打包文件。

- 为了兼容性以及最终打包的文件体积考虑，我们的 babel 只引入了 `preset-2015`，所以不建议使用 ES2015 的 API，例如 `Array.prototype.find`、`Object.assign`等。如果有需要，请引入第三方的 polyfill。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 `dev` 分支，而不是 `master` 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。

## 开发环境搭建
首先你需要 Node.js 4+，yarn 和 npm 3+。注意：我们使用 yarn 进行依赖版本的锁定，所以请不要使用 `npm install` 安装依赖。
```shell
git clone git@github.com:ElemeFE/element.git
npm run dev

# open http://localhost:8085
```

> **提示**：可以运行 `npm run dev:play`，修改 `examples/play/index.vue` 文件，调用你修改后的组件，仍然访问 [http://localhost:8085](http://localhost:8085)，查看修改效果，更快更方便。

打包代码：

```shell
npm run dist
```

## 组件开发规范
- 通过 `make new` 创建组件目录结构，包含测试代码、入口文件、文档
- 如果包含父子组件，需要更改目录结构，参考 `Button`
- 组件内如果依赖了其他组件，需要在当前组件内引入，参考 `Select`

## 代码规范
遵循饿了么前端的 [ESLint](https://github.com/ElemeFE/eslint-config-elemefe) 即可
