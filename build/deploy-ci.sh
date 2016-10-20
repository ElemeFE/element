#! /bin/sh

if [ "$TRAVIS_BRANCH" = "master" ] && [ "$GH_TOKEN" ]; then
  CI_ENV=/dev/ ./node_modules/.bin/cooking build -c build/cooking.demo.js
  mkdir temp_web
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/dev.git && cd dev
  git config user.name "$(git log --no-merges -n 1 --format=%an)"
  git config user.email "$(git log --no-merges -n 1 --format=%ae)"
  rm -rf *
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master
fi
