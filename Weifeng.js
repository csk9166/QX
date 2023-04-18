[rewrite_local]
^https?:\/\/api\.wfdata\.club\/v1\/user\/homePageInfo.*? url script-response-body https://raw.githubusercontent.com/csk9166/QX/main/https://raw.githubusercontent.com/csk9166/QX/main/Weifeng.js


[mitm]
hostname = api.wfdata.club
%¥
*******************************/
var body=$response.body;
body = body.replace(/"isVip\":false/g,'"isVip":true');
body = body.replace(/"vipExpiryDate\":""/g,'"vipExpiryDate":"2999/09/09"');
$done(body);
