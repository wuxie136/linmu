---
title: 替换谷歌cdn实现外国访问
categories: 技术分享
urlname: 50
abbrlink: d91f67f2
date: 2020-05-10 04:29:33
tags:
---
大家平时上网查资料的时候会发现，stackoverflow等国外网站打开都特别慢，而有些网站的 reCaptcha 验证码则根本显示不出来。这是因为这些网站使用的一些资源托管在 Google CDN 上，而后者在中国大陆是无法访问的。对此，国内一些大学、厂商已经提供了相应的国内资源镜像，只需要我们将这些资源 URL 重定向至国内镜像地址即可，下面，就以火狐浏览器 Firefox 为例，教大家如何通过使用 Gooreplacer 插件来实现这样的功能：

（1）安装 Firefox , 并前往 gooreplacer安装插件；

（2）单击浏览器右上角如下图标，打开 gooreplacer 设置页面：
（3）在设置页面中，勾选【重定向】，单击【新增】按钮： 
 

（5）依此类推，对如下网址也依次进行设置：
ajax.googleapis.com          ===> ajax.lug.ustc.edu.cn
www.google.com/recaptcha     ===> recaptcha.net/recaptcha
themes.googleusercontent.com ===> google-themes.lug.ustc.edu.cn

（7）也可以【导入】我设置好的配置文件（以下代码另存为 gooreplacer.gson 后导入）：
{
  "createBy": "http://liujiacai.net/gooreplacer/",
  "version": "3.11.0",
  "createAt": "2020/2/26 下午7:10:53",
  "redirect-rules": [
    {
      "src": "www.google.com/recaptcha",
      "kind": "wildcard",
      "dst": "recaptcha.net/recaptcha",
      "enable": true
    },
    {
      "src": "ajax.googleapis.com",
      "kind": "wildcard",
      "dst": "ajax.lug.ustc.edu.cn",
      "enable": true
    },
    {
      "src": "themes.googleusercontent.com",
      "kind": "wildcard",
      "dst": "google-themes.lug.ustc.edu.cn",
      "enable": true
    }
  ],
  "cancel-rules": [],
  "request-headers": [],
  "response-headers": []
}
![请输入图片描述][1]
![请输入图片描述][2]


  [1]: http://p1.so.qhimgs1.com/t02e2db83201a6189e1.jpg
  [2]: http://p0.so.qhimgs1.com/t02e2db83201a6189e1.jpg