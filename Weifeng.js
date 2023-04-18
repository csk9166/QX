[rewrite_local]
^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo.*? url script-response-body weifeng.js


[mitm]
hostname = api.wfdata.club
%¥
*******************************/
var body=$response.body;
body = body.replace(/"isVip\":false/g,'"isVip":true');
body = body.replace(/"vipExpiryDate\":""/g,'"vipExpiryDate":"2999/09/09"');
$done(body);
