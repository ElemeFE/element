#! /bin/sh
mkdir temp_web
git config user.name "element_bot"
git config user.email "element_bot"

# build dev site
if [ "$TRAVIS_BRANCH" = "master" ] && [ "$GH_TOKEN" ]; then
  CI_ENV=/dev/ ./node_modules/.bin/cooking build -c build/cooking.demo.js
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/dev.git && cd dev
  rm -rf *
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin master
  cd ../..
fi

# build lib
if [ "$TRAVIS_TAG" ] && [ "$GH_TOKEN" ]; then
  npm run dist
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElementUI/lib.git && cd lib
  rm -rf *
  cp -rf ../../lib/** .
  git add -A .
  git commit -m "[build] $TRAVIS_TAG"
  git tag $TRAVIS_TAG
  git push origin master --tags
  cd ../..
fi

# build site
if [ "$TRAVIS_TAG" ] && [ "$GH_TOKEN" ]; then
  npm run deploy
  cd temp_web
  git clone https://$GH_TOKEN@github.com/ElemeFE/element.git && cd element
  git checkout gh-pages
  rm -rf *
  cp -rf ../../examples/element-ui/** .
  git add -A .
  git commit -m "$TRAVIS_COMMIT_MSG"
  git push origin gh-pages
  cd ../..
fi
