/******************************
 
脚本名称:Panda

*******************************
%¥
[rewrite_local]
^https?:\/\/gpanda\.co\.kr\/api\/getMobileDeviceList|https?:\/\/gpanda\.co\.kr\/api\/getMobileMyInfo|https?:\/\/gpanda\.co\.kr\/api\/getMobileMyPaymentInfo|https?:\/\/gpanda\.co\.kr\/api\/setMobileVPNConnect|https?:\/\/gpanda\.co\.kr.*?.*? url script-response-body https://raw.githubusercontent.com/csk9166/QX/main/panda.js


[mitm]
hostname = gpanda.co.kr,gpanda.co.kr,gpanda.co.kr,gpanda.co.kr,gpanda.co.kr
%¥
*******************************/
var body=$response.body;
body = body.replace(/expire_datetime\":".*?"/g,'expire_datetime":"2066-07-01 09:39:43"');
body = body.replace(/item_day\":\d/g,'item_day":360');
body = body.replace(/item_cnt\":\d/g,'item_cnt":1');
body = body.replace(/item_name\":".*?"/g,'item_name":"1대 - 1200개월"');
body = body.replace(/item_price_cn\":\d/g,'item_price_cn":576');
body = body.replace(/item_price_kr\":\d/g,'item_price_kr":109000');
body = body.replace(/item_type\":".*?"/g,'item_type":"sale"');
body = body.replace(/item_name_us\":".*?"/g,'item_name_us":"1Device - 12Month"');
body = body.replace(/item_name_cn\":".*?"/g,'item_name_cn":"1台-12个月"');
body = body.replace(/item_idx\":\d/g,'item_idx":18');
body = body.replace(/item_price_us\":\d/g,'item_price_us":79');
body = body.replace(/result\":".*?"/g,'result":"Y"');
body = body.replace(/message\":".*?"/g,'message":"VPN连接完成。"');
body = body.replace(/connect_idx\":\d+/g,'connect_idx":7271729');
$done(body);
