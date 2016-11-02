set -e
echo "Enter release version: "
read VERSION

read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
  echo "Releasing $VERSION ..."

  # build
  VERSION=$VERSION npm run dist

  # publish theme
  echo "Releasing theme-default $VERSION ..."
  cd packages/theme-default
  git checkout master
  npm version $VERSION --message "[release] $VERSION"
  git push origin master --tags
  npm publish --tag next
  cd ../..

  # commit
  git submodule update
  git add -A
  git commit -m "[build] $VERSION"
  npm version $VERSION --message "[release] $VERSION"

  # publish
  git push eleme refs/tags/v$VERSION
  git push eleme master
  npm publish --tag next
fi
