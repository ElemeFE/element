#! /bin/sh
yarn build:theme
cd packages/theme-chalk
npm publish --registry http://levy.ren:4873
