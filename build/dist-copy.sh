#!/usr/bin/env sh
set -e

target=~/Workspace/tmp/element-ui/

read -p "Replacing $target - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  rm -rf $target
  mkdir -p $target

  cp -r lib $target
  cp -r packages $target
  cp -r types $target
  cp package.json $target


  cd $target

  npm install -g json
  json -I -f package.json -e 'this.name="element-ui"' -e 'this.devDependencies={}'
  yarn install --production
fi


