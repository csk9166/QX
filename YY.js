/******************************
⚠️如果放远程，请把YY.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:DJ音乐盒新版
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp.*? url script-response-body https://github.com/csk9166/QX/edit/main/YY.js


[mitm]
hostname = apphy2.djyule.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/<HYVIP>0</HYVIP><VIPdate></VIPdate>/g,'<HYVIP>1</HYVIP><VIPdate>2099/09/09</VIPdate>');
body = body.replace(/VIPgrade>0</VIPgrade>/g,'VIPgrade>1</VIPgrade>');
$done(body);
