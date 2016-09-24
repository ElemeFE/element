## 开发指南

开发之前需要配置好 Node.js 和 npm 环境，其中 npm 需要 3.0 或以上版本。

### 目录结构
```text
|- examples/  -------------- 文档及示例页
    |- docs/  -------------- 文档
|- component/
    |- src/  --------------- 组件源码
|- packages/  -------------- 组件
|- scripts/  --------------- 打包配置
|- src/  ------------------- 公用代码
|- components.json  -------- 组件列表
```

### 安装依赖
安装项目所需要的依赖以及子项目内的依赖。
```bash
npm run bootstrap
```

如果网络不是很理想，可以用国内镜像下载。新建一个 `.npmrc` 文件在当前项目下，同时配置镜像地址，例如：
```text
registry=https://registry.npm.taobao.org
```

然后再运行 `npm run bootstrap` 安装依赖。

### 启动开发环境

启动完成后浏览器访问 [http://localhost:8085](http://localhost:8085)

```bash
npm run dev
```

### npm scripts
```bash
npm run dev # 启动开发环境
npm run dist # 打包组件
npm run dist:all # 单独打包每个子项目
npm run lint # 检测 js 代码风格
node bin/new.js [组件名] # 创建新组件
```

### 贡献代码

参考 <a href="https://github.com/ElemeFE/element/blob/master/.github/CONTRIBUTING.md" target="_blank">贡献指南</a>。
