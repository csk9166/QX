/******************************
 
脚本名称:容量

*******************************
%¥
[rewrite_local]
^https?:\/\/api\.aliyundrive\.com\/adrive\/v1\/file\/getCleanInfo.*? url script-response-body https://raw.githubusercontent.com/csk9166/QX/main/Alirongliang.js


[mitm]
hostname = api.aliyundrive.com
%¥
*******************************/
var body=$response.body;
body = body.replace(/total_size\":.*?/g,'total_size":110142097394114');
$done(body);
