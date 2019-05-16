# deepexi 自定义主题element
element-ui版本为2.4.11
## 二次开发

```sh
#安装 
#如果是windows用户, 请先删除yarn.lock再安装，注意不要提交yarn.lock
yarn

#修改packages/theme-chalk/common/var.scss，定制主题
#开发预览
yarn dev

#构建网站
yarn deploy:build

#构建主题
yarn build:theme
```

## 部署

### 网站
在feature-theme-deepexi分支提交即会自动构建网站，并发布至github pages

### 主题
执行`publish-theme.sh`即可发布主题

## 安装主题

[在nuxt框架中使用自定义主题](https://femessage.github.io/element/#/zh-CN/component/custom-theme)

## LICENSE
[MIT](LICENSE)
