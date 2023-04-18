/******************************
⚠️如果放远程，请把Xunyoujsqjsq.js替换成运程链接⚠️
🫧脚本名称:迅游手游
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.xunyou\.mobi\/api\/v1\/android\/sessions.*? url script-response-body Xunyoujsqjsq.js


[mitm]
hostname = api.xunyou.mobi
%¥
*******************************/
var body=$response.body;
body = body.replace(/"accelExpiredTime\":".*?"/g,'"accelExpiredTime":"2999-12-22 06:06:06"');
body = body.replace(/"userStatus\":\d/g,'"userStatus":2');
body = body.replace(/"creditType\":\d/g,'"creditType":1');
body = body.replace(/"userType\":4/g,'"userType":2');
body = body.replace(/totalAccelDays\":0/g,'totalAccelDays":999');
$done(body);
