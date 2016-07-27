.PHONY: dist
default: help

# build all theme
build-theme: build-theme-default

build-theme-default:
	packages/theme-default/node_modules/.bin/gulp build --gulpfile packages/theme-default/gulpfile.js
	cp -rf packages/theme-default/lib lib/theme-default

install:
	npm i --registry=http://registry.npm.taobao.org --ignore-scripts --loglevel=error
	./node_modules/.bin/lerna bootstrap

dev: install
	node bin/iconInit.js
	npm run dev

new:
	node bin/new.js $(filter-out $@,$(MAKECMDGOALS))

dist:
	npm run dist
	make build-theme

dist-all:
	node bin/build-all.js
	make build-theme

deploy: install
	@npm run deploy
	@rm -rf fe.element/element-ui
	@cp -r examples/element-ui fe.element

gh-docs:
	@npm run gh-docs

pub:
	./node_modules/.bin/kp $(filter-out $@,$(MAKECMDGOALS))

pub-all: dist-all
	./node_modules/.bin/lerna publish

help:
	@echo "   \033[35mmake\033[0m \033[1m命令使用说明\033[0m"
	@echo "   \033[35mmake install\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  安装依赖"
	@echo "   \033[35mmake new <component-name> [中文名]\033[0m\t---  创建新组件 package. 例如 'make new button 按钮'"
	@echo "   \033[35mmake dev\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  开发模式"
	@echo "   \033[35mmake dist\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  编译项目，生成目标文件"
	@echo "   \033[35mmake dist-all\033[0m\t\033[0m\t\033[0m\t---  分别编译每个组件项目"
	@echo "   \033[35mmake deploy\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  部署 demo"
	@echo "   \033[35mmake pub\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布到 npm 上"
	@echo "   \033[35mmake pub-all\033[0m\t\033[0m\t\033[0m\t\033[0m\t---  发布各组件到 npm 上"
