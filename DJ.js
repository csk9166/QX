/******************************

脚本名称:DJ音乐盒新版


*******************************

[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp.*? url script-response-body DJ.js


[mitm]
hostname = apphy2.djyule.com

*******************************/
var body=$response.body;
body = body.replace(/<HYVIP>0</HYVIP><VIPdate></VIPdate>/g,'<HYVIP>1</HYVIP><VIPdate>2099/09/09</VIPdate>');
body = body.replace(/VIPgrade>0</VIPgrade>/g,'VIPgrade>1</VIPgrade>');
$done(body);
