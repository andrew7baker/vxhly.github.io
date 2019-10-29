#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

date=`date +"%Y-%m-%d %H:%M:%S"`
commitmsg='Site updated: '$date
git add -A
git commit -m "$commitmsg"

# 如果发布到 https://<USERNAME>.github.io
git push -f git@github.com:vxhly/vxhly.github.io.git gh-pages:gh-pages
