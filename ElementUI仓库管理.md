# ElementUI仓库管理
> 我们有很多场景需要修改ElementUI，所以我们Fork了ElementUI的仓库，在此仓库进行修改，然后重新构建该仓库，使用构建后的包引入项目代替ElementUI。

## 仓库管理
> ElementUI官网有更新的时候，我们需要及时跟进更新，所以我们需要对两个remote进行管理
1. 我们的仓库：[flickerlist/element](https://github.com/flickerlist/element)
1. Element官方仓库：[ElemeFE/element](https://github.com/ElemeFE/element)

### 项目管理
1. 拉取代码时，直接从我们的仓库拉取（即remote origin是我们的仓库）
    - 如果文件下载太慢，可以fork到自己仓库，然后导入[码云](https://gitee.com/)(速度很快)，然后从码云clone仓库，clone完成后再修改remote origin为我们的仓库
2. 拉取代码后，再添加Element官方仓库，保持两个remote
    - `git remote add element git@github.com:ElemeFE/element.git`// remote element是官方仓库
    - `cat .git/config` //   检查是否成功 

### 分支管理
1. 为了和官方仓库区分，我们所有的分支，采用`flicker`开头，如master分支使用`flicker/master`
2. 普通的操作，如代码更新，push到远程，采用remote origin；如果需要同步官方代码，则使用remote element。同步官方代码操作如下
    - `git checkout master` // 切换到origin的master分支
    - `git pull element master` // 从element master拉取新代码
    - `git push origin master` // 将新代码push到我们的仓库
    - 提PR： `master` -> `flicker/master` // 提PR合并到我们的主分支

## 构建项目
> 项目需要发布到npm仓库使用，使用@flickerlist scope
### 发布
> 发布之前需要添加在npm官网添加权限
1. npm login --scope=@flickerlist
1. npm publish --access=public

## 本地测试
> 本地测试时，为避免频发发布npm包，可以用文件映射来解决
1. `yarn dist`构建完成项目后，可以在flicker中新建element-ui目录，将lib目录拷贝到element-ui目录下（注，必须要拷贝出来，否则element-ui仓库下的文件会影响flicker编译）
2. 将renderer的webpack配置添加alias，指向element-ui目录
3. 测试完成后，删除临时目录，发布npm包，并更新包
