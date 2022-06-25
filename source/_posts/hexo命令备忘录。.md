---
title: hexo命令备忘录。
categories: 技术分享
urlname: 146
abbrlink: 570ae4c8
date: 2022-06-17 06:30:58
tags:
---
# hexo
hexo安装
```other
npm install hexo-cli -g
```

hexo安装部署
```other
npm install
```

安装hexo d的部署命令
```other
npm install hexo-deployer-git --save
```

hexo一键三连。
```other
hexo clean && hexo g && hexo d
```

# git配置
```other
git config --global user.name "wuxie136"
 git config --global user.email "848129247@qq.com"
```
```othe
ssh-keygen -t rsa -C "848129247@qq.com"
```
上传命令
```other
git add .
git commit –m "add branch"
git push
```
第二种方法
```other
git add .
git commit -m '注释'
git branch -m main
git push -f origin main
```
连续回车，输入下面的看密钥
```other
cat ~/.ssh/id_rsa.pub
```
测试是否连接
```other
ssh -T git@github.com
```
# 上传到仓库
删除所有仓库链接
```other
git remote rm origin
```
链接仓库
```other
git remote add origin https://@github.com/wuxie136/blog136.git
```
忽悠一些不重要的文件。
创建.gitignore
```other
.DS_Store
Thumbs.db
db.json
*.log
node_modules/
public/
.deploy*/
```
# 部署到page
安装插件
```other
npm install hexo-deployer-git --save
```
配置
```other
deploy:
  type: git
  repo: https://github.com/YourgithubName/YourgithubName.github.io.git
  branch: main
```

一键上传
```other
git add .
git commit -m '注释'
git branch -m main
git push -f origin main
```
# 恢复hexo
```other
git clone 仓库链接
```
```other
npm install
npm install hexo-deployer-git --save
```