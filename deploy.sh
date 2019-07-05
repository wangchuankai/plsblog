#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
npm install -g vuepress@next
# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f https://${token}@${address} master:master
git push -f git@github.com:wangchuankai/wangchuankai.github.io.git master // 这里的项目地址一定是你的博客地址

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -