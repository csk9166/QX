[rewrite_local]
^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo.*? url script-response-body Weifeng.js


[mitm]
hostname = api.wfdata.club
%¥
*******************************/
var body=$response.body;
body = body.replace(/"isVip\":false/g,'"isVip":true');
body = body.replace(/"vipExpiryDate\":""/g,'"vipExpiryDate":"9999/09/09"');
$done(body);
