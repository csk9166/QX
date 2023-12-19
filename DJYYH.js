/**



 [rewrite_local]
^https://.*apphy2.djyule.com/userLogin_2022md5.asp get url script-response-body DJYYH.js

[mitm]
hostname = apphy2.djyule.com

*/

var body = $response.body;
var obj = JSON.parse(body);

obj. = "<VIPdate>2999/09/09</VIPdate>";
obj. = "<VIPgrade>1</VIPgrade>";
obj. = "<HYVIP>1</HYVIP>";

body = JSON.stringify(obj);
$done({body});
