/******************************
 
脚本名称:DJ音乐盒

*******************************
%¥
[rewrite_local]
^https?:\/\/apphy2\.djyule\.com\/userLogin_2022md5\.asp.*? url script-response-body https://raw.githubusercontent.com/csk9166/QX/main/YYH.js


[mitm]
hostname = *.djyule.*
%¥
*******************************/
var body=$response.body;
body = body.replace(/<VIPdate></VIPdate>/g,'<VIPdate>2999/09/09</VIPdate>');
body = body.replace(/<VIPgrade>0</VIPgrade>/g,'<VIPgrade>1</VIPgrade>');
body = body.replace(/<HYVIP>0</HYVIP>/g,'<HYVIP>1</HYVIP>');
$done(body);
