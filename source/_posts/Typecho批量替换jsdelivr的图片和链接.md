---
title: Typecho批量替换jsdelivr的图片和链接
date: 2022-05-23 16:12:00
categories: 个人经验
urlname: @130
tags:
- Jsdelivr
- Typecho
---
# 起因
图片放在别人手里我不放心，万一跑路了，图片就找不回来了，云存储又太贵，我的图片就储存在jsdelivr上了。但因为最近jsdelivr由于dns污染，目前都只能解析到海外,不但速度慢,还会偶发性无法连接到服务器。因此国内超多网站都受到了影响。
# 更换图片链接
确定要替换的内容，就是旧的域名和新的域名
网站原来的图片 bc6ac14fd1f922198458ad5e15a2dd8c.jpg
旧的地址是：https://fastly.jsdelivr.net/gh/linmu136/tulin/bc6ac14fd1f922198458ad5e15a2dd8c.jpg
新的地址是:
https://jsd.15xd.cn/gh/linmu136/tulin/bc6ac14fd1f922198458ad5e15a2dd8c.jpg
# 教学
用phpMyAdmin进入typecho数据库
选中 typecho_contents 文章这个表，点击 SQL

```other
UPDATE typecho_contents SET text = REPLACE(text,'旧域名地址','新域名地址');
```
示例
**因为我的路径和名字没有变就直接改就可以**
```other
UPDATE typecho_contents SET text = REPLACE(text,'jsd.15xd.cn','jsd.15xd.cn');
```

点击 执行 后会提示是否成功，影响了多少数据
