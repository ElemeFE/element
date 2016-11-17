#! /bin/sh
mkdir temp_web
git config --global user.name "element-bot"
git config --global user.email "wallement@gmail.com"

# build dev site
if [ "$ROT_TOKEN" ]; then
  npm run build:file && CI_ENV=/dev/$TRAVIS_BRANCH/ node_modules/.bin/cooking build -c build/cooking.demo.js
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/ElementUI/dev.git && cd dev
  mkdir $TRAVIS_BRANCH
  rm -rf $TRAVIS_BRANCH/**
  cp -rf ../../examples/element-ui/** $TRAVIS_BRANCH/
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master
  cd ../..
fi

# push theme-default
if [ "$ROT_TOKEN" ]; then
  cd temp_web
  git clone -b $TRAVIS_BRANCH https://$ROT_TOKEN@github.com/ElementUI/theme-default.git && cd theme-default
  rm -rf *
  cp -rf ../../packages/theme-default/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin $TRAVIS_BRANCH
  cd ../..
fi

if [ "$TRAVIS_TAG" ] && [ "$ROT_TOKEN" ]; then
  # site sub folder
  SUB_FOLDER=$(echo $TRAVIS_TAG | grep -o -E '^\d+\.\d+')

  # build lib
  npm run dist
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/ElementUI/lib.git && cd lib
  rm -rf `find * ! -name README.md`
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..

  # build theme-default
  cd temp_web
  git clone https://$ROT_TOKEN@github.com/ElementUI/theme-default.git && cd theme-default
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
  git clone -b gh-pages https://$ROT_TOKEN@github.com/ElemeFE/element.git && cd element

  # only remove files
  mkdir $SUB_FOLDER
  rm -f *
  rm -rf $SUB_FOLDER/**
  cp -rf ../../examples/element-ui/** .
  cp -rf ../../examples/element-ui/** $SUB_FOLDER/
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..
fi
