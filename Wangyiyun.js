/*
致敬伟人

[rewrite_local]
# > 网易云解锁VIP
^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header WYY.js
[mitm] 
hostname = *.music.163.com

*/


headers = $request.headers;

headers['Cookie'] = 'CK';

headers['User-Agent'] = 'UA';

headers['MConfig-Info'] = 'M-I';

$done({
    headers
});