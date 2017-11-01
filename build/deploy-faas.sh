#! /bin/sh
mkdir temp_web
npm run deploy:build
cd temp_web
git clone -b gh-pages https://github.com/ElemeFE/element.git && cd element

# build sub folder
SUB_FOLDER='1.4'
mkdir $SUB_FOLDER

rm -rf $SUB_FOLDER/**
cp -rf ../../examples/element-ui/** $SUB_FOLDER/
cd ../..

# deploy domestic site
faas deploy alpha