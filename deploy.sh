#! /bin/sh
#yarn deploy:build
cd examples/element-ui
git init
git add .
git commit -m 'pages'
git remote add origin https://github.com/FEMessage/element.git
git push origin master:gp-pages
