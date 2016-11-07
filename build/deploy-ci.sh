#! /bin/sh
mkdir temp_web

# build dev site
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$GH_TOKEN" ]; then
  CI_ENV=/dev/ ./node_modules/.bin/cooking build -c build/cooking.demo.js
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/dev.git && cd dev
  git config user.name "element_bot"
  git config user.email "element_bot"
  rm -rf `find * ! -name README.md`
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master
  cd ../..
fi

# push theme-default
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$GH_TOKEN" ]; then
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/theme-default.git && cd theme-default
  git config user.name "element_bot"
  git config user.email "element_bot"
  rm -rf *
  cp -rf ../../packages/theme-default/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master --tags
  cd ../..
fi

if [ "$TRAVIS_TAG" ] && [ "$GH_TOKEN" ]; then
  # build lib
  npm run dist
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/lib.git && cd lib
  git config user.name "element_bot"
  git config user.email "element_bot"
  rm -rf `find * ! -name README.md`
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build theme-default
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/theme-default.git && cd theme-default
  git config user.name "element_bot"
  git config user.email "element_bot"
  rm -rf *
  cp -rf ../../packages/theme-default/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build site
  npm run deploy:build
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElemeFE/element.git && cd element
  git config user.name "element_bot"
  git config user.email "element_bot"
  git checkout gh-pages
  rm -rf `find * ! -name README.md`
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..
fi
