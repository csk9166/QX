/******************************
 
脚本名称:Te

*******************************
%¥
[rewrite_local]
^https?:\/\/api-2\.quickg\.cc\/api\/v5\/user\/.*? url script-response-body Te.js


[mitm]
hostname = api-2.quickg.cc
%¥
*******************************/
var body=$response.body;
body = body.replace(/vip\":0/g,'vip":1');
body = body.replace(/expiredDate\":".*?"/g,'expiredDate":"2024-06-03"');
body = body.replace(/flowTotal\":".*?"/g,'flowTotal":"900.0MB"');
body = body.replace(/flowRemaining\":".*?"/g,'flowRemaining":"900.0MB"');
$done(body);
