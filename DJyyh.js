/******************************

脚本名称:DJ


*******************************

[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp.*? url script-response-body DJyyh.js


[mitm]
hostname = apphy2.djyule.com

*******************************/
var body=$response.body;
body = body.replace(/<HYVIP>0</HYVIP>/g,'<HYVIP>1</HYVIP>');
body = body.replace(/<VIPdate></VIPdate>/g,'<VIPdate>2999/09/09</VIPdate>');
body = body.replace(/<VIPgrade>0</VIPgrade>/g,'<VIPgrade>1</VIPgrade>');
$done(body);