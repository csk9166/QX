/******************************
⚠️如果放远程，请把DJ.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:DJ音乐盒
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp.*? url script-response-body DJ.js


[mitm]
hostname = apphy2.djyule.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/<VIPdate></VIPdate>/g,'<VIPdate>2999/09/09</VIPdate>');
body = body.replace(/<VIPgrade>0</VIPgrade>/g,'<VIPgrade>1</VIPgrade>');
body = body.replace(/<HYVIP>0</HYVIP>/g,'<HYVIP>1</HYVIP>');
$done(body);
