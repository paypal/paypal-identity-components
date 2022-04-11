#!/bin/sh

set -e;

rm dist/*;
git checkout dist/;

if ! git diff-files --quiet; then
    echo "Can not publish with unstaged uncommited changes";
    exit 1;
fi;

if ! git diff-index --quiet --cached HEAD; then
    echo "Can not publish with staged uncommited changes";
    exit 1;
fi;

rm -rf node_modules/@krakenjs/zoid node_modules/@krakenjs/post-robot node_modules/@krakenjs/zalgo-promise node_modules/@krakenjs/beaver-logger node_modules/@krakenjs/cross-domain-safe-weakmap node_modules/@krakenjs/cross-domain-utils node_modules/@krakenjs/grumbler-scripts
npm install @krakenjs/zoid @krakenjs/post-robot @krakenjs/zalgo-promise @krakenjs/beaver-logger @krakenjs/cross-domain-safe-weakmap @krakenjs/cross-domain-utils @krakenjs/grumbler-scripts

npm run flow;
npm run lint;
rm dist/*;
npm run webpack;

git add ./dist --all;
git add ./test/screenshot/images --all;

git commit -m "Dist" || echo "Nothing to distribute";

npm version ${1-patch};

git push;
git push --tags;
npm publish;
