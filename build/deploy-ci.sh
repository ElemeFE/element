#! /bin/sh
mkdir temp_web && cd temp_web

if [ "$TRAVIS_BRANCH" = "master" ] && [ "$GH_TOKEN" ]; then
  CI_ENV=/dev/ ./node_modules/.bin/cooking build -c build/cooking.demo.js
  git clone https://$GH_TOKEN@github.com/ElementUI/dev.git && cd dev
  git config user.name "$TRAVIS_COMMIT_USER"
  git config user.email "$TRAVIS_COMMIT_EMAIL"
  rm -rf *
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master
  cd ..
fi

if [ "$TRAVIS_TAG" ] && [ "$GH_TOKEN" ]; then
  npm run dist
  git clone https://$GH_TOKEN@github.com/ElementUI/lib.git && cd lib
  git config user.name "$TRAVIS_COMMIT_USER"
  git config user.email "$TRAVIS_COMMIT_EMAIL"
  rm -rf *
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ..
fi
