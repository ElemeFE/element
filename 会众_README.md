 
### 发布  
1. 修改 package.json 的 version
2. `npm dist` 
3. `npm pub`  

### 运行开发环境  
1. `npm dev`  

### tips
1. 样式文件在  `packages>theme-default>src`
2. vue 文件在 `packages` 文件夹里面

### merge
更新饿了么最新代码到此工程  

```
git merge project-a to project-b  
cd path/to/project-b  
git remote add project-a path/to/project-a  
git fetch project-a
git merge --allow-unrelated-histories project-a/master # or whichever branch you want to merge
git remote remove project-a
```

### 主题 & 自定义 css
自定义 css：修改 `packages/theme-default/src`  
自定义主题色：修改 `packages/theme-default/src/common/var.css` 中的 `--color-primary`变量  
  
在 `packages/theme-default` 目录下运行 `gulp build`，生成的资源在 `packages/theme-default/lib`里面