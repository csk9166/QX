/******************************

脚本名称:迅游手游
*******************************
%¥
[rewrite_local]
^https?:\/\/api\.xunyou\.mobi\/api\/v1\/android\/sessions.*? url script-response-body https://raw.githubusercontent.com/csk9166/QX/main/Xunyou.js


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
