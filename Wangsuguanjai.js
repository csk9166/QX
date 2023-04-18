[rewrite_local]
^https?:\/\/api-v3\.speedtest\.cn\/user\/info.*? url script-response-body Wangsugj.js


[mitm]
hostname = api-v3.speedtest.cn
%¥
*******************************/
var body=$response.body;
body = body.replace(/isVip\":0/g,'isVip":1');
$done(body);
