
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://act.10010.com/SigninApp/code/getCode`;
const method = `POST`;
const headers = {
'Accept' : `application/json, text/plain, */*`,
'Origin' : `https://img.client.10010.com`,
'Accept-Encoding' : `gzip, deflate, br`,
'Cookie' : `SigninApp=f263d91f49d77a6b9dda1849298a3087; acw_tc=276aede717164082296921858e0c31128c3979c95d5e53084614e0d4f90df7; tianjin_ip=0; tianjincity=11|110; PvSessionId=20240523040332D8ADBA92-7710-49DE-BAB5-2F611F698181; a_token=eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTcwMTMwMTMsInRva2VuIjp7ImxvZ2luVXNlciI6IjE4NTU4ODg2NjE3IiwicmFuZG9tU3RyIjoieWhhNzQwZjkxNzE2NDA4MjEzIn0sImlhdCI6MTcxNjQwODIxM30.ctq61A04_Xne33d4q8KvbQL_z75xQrm5Yt2D5CilXHgtl5ya-bAIr07e-HRH_WZxIgYLup9ve0TumMi1fotbQQ; c_id=75e043850a7ec8acc4b89cf70897c8b4f8f779ec1a34efb9f70a4db504babead; c_mobile=18558886617; c_version=iphone_c@11.0400; channel=GGPD; city=038|380|90949377|-99; cw_mutual=7064d003eb3c8934e769e430ecf3d64a381073ef503e8563fb0ed94dc09354db79df74b8c701e716bf04d93e840f1cf5c0999dc43950a69e2652e1160db288b7; devicedId=D8ADBA92-7710-49DE-BAB5-2F611F698181; ecs_token=eyJkYXRhIjoiYmIwMmVmY2E2NmNkNmNjN2E0MGFjMTliMjY1Y2E5ZjQ1YTRiNzA0YTNmMTVlMzVlMjZmNmI1NGI5ZGMyZDgxOTg2MmUzYjY2YjgxY2IxN2Q0YmVlMWVhMzM3ODk4NDM4ZjJkNmJhMjkxNzE1MWJjZDQxODkwYTM3MjhlYTY0NDUxY2RjODFmZjk4N2VjMmRjZDdiZWE4MDY5ZThjMjY0ZGMyNjEzMGM1MzYwMmY3YWQ3YTYyM2ViY2UwYTY2YmU3ZTVhYWJhNzQ4NDIwZmU4MDkwYTc5OGM2ZDYxYzZiMTJmYzRiOWJkNmVmYmM0MjQ1MGZlMjkwNDU1MWFhYWJiZjEyNDk3MGViNTVlNDBjMDUwYWJkMTBjMTQ4MzRiNWYyNWFhMDgwNjMxYzQyMDdmMTZhZDE4YjcwYWY1YmVmOTkiLCJ2ZXJzaW9uIjoiMDAifQ==; enc_acc=YejDJuMFbBdXUvvPhKtpzprrEYQhcI3McqexFwgUJWWCsB1yxMfqDUNNzvCSPF/jtikhj08Lb81CgNF0bgWtvi6t26fP5ri/vLsFpHrug+B08QphYh8Ssi+15ljSditYpsRx8e+A1f7rTqTyKVULs95wEkiB3Yi5tCj99+VLpoo=; invalid_at=a0682d8106470a46c184565348cb1c3bbdd454da36bace6d96b294ca8c9b1076; jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtb2JpbGUiOiIxODU1ODg4NjYxNyIsInBybyI6IjAzOCIsImNpdHkiOiIzODAiLCJpZCI6ImZmMThmMTA3YjBlMzNiZDE4Mjg4YWY1MmU3Mjc2OTdiIn0.sUi9EifdDhspHceZLfJp4nWXrC6fWkyYvV5Ah7nokus; login_type=06; random_login=0; t3_token=67f19801bac13892e6208856670dc984; third_token=eyJkYXRhIjoiMTMyYzJlNGFmOTFiOWU0ZTRmMmMyMDQwOWVkNWU5NDJlNzYxYzM1ZTcwZjQ5YmNmYzY5NzY3N2U0YjUxM2NhNzYxZWQwYWJiYjljNzFjYTJmMGQ2MzVjYzNiYjZiN2ZjNTZiODA3MDc3OGY1MzVhMjJjYTk0YjJjY2MzYTk3Nzc0ZTczOTNjZWMzYjExZTQxMzczZjFjODZiNDgxOWM5MyIsInZlcnNpb24iOiIwMCJ9; u_account=18558886617; u_areaCode=; wo_family=0; cdn_area=38|380; SHOP_PROV_CITY=38; mallcity=38|380; unicomMallUid=18558886617; d_deviceCode=D8ADBA92-7710-49DE-BAB5-2F611F698181; ecs_acc=YejDJuMFbBdXUvvPhKtpzprrEYQhcI3McqexFwgUJWWCsB1yxMfqDUNNzvCSPF/jtikhj08Lb81CgNF0bgWtvi6t26fP5ri/vLsFpHrug+B08QphYh8Ssi+15ljSditYpsRx8e+A1f7rTqTyKVULs95wEkiB3Yi5tCj99+VLpoo=; GUESS_NUM=NTk2NzMwNzI=; MUT=b7bcc3f7-4b5e-454d-9bce-02b23190b5b2; TOKEN_NET=UNI; TOKEN_UID=VPir3N75EULLnw3pAfgOCQ==; TOKEN_UID_ALL=%7B%22userNick%22%3A%22%25E6%259D%25A8%25E5%25BB%25B7%25E8%25B4%25B5%22%2C%22phoneNum%22%3A%2218558886617%22%2C%22certNum%22%3A%22522322********1618%22%7D; TOKEN_UID_NAME=jRhG4NJcYKQnHIKVpih99nAxWE64vzV0gpU4+R18XQqkxX5xg14RbuR2Z+VFqjY0BZ+EV1dnsBILSBmWgYyaO2kt9UWUQbWqQ8m4o0p0Aa4ENn3q9lLxFvsNCW5xGo/nvp7V/yeieSZ/YKnrV6bvgdD8Jx6IHFazoFXRcdAZjQnaL6Gkr+rMNMOeJSLp32gPdHdGfuFRu8qd9Rx3FPi5GcmP2Dr/tXOYhOIDKqzqebk=; TOKEN_UID_USER_TYPE=NsfafXWEfLJzp0K8zWSyVw==; certNum=522322********1618; custId=18558886617; numToken=x7fHub9URZl8qRlMVBKkrts9W38dXtHwtwQTdkVZ8qA2LqFSmpiNuh1Bzop53VnX%2BBd3fOSH3S6uBIjmteq1CGMAabS%2Bd%2FoDk2P150f%2F3PPIex%2BJMGIn2Uh3MhpTgojc1EhUcKk8OuHc4gp2BvboIZHK%2F2mU6YFNTAkk73vgYWqfbxcboTdnl3kuECkYON1UBUCVNRklZJFf%2BXc96Q%2FFIaMNCOYOpUKvzkaO6hL3qHc%3D; usercity=38|380; gipgeo=38|380`,
'Content-Type' : `application/x-www-form-urlencoded`,
'Host' : `act.10010.com`,
'Connection' : `keep-alive`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 unicom{version:iphone_c@11.0400}`,
'Referer' : `https://img.client.10010.com/`,
'Accept-Language' : `zh-CN,zh-Hans;q=0.9`
};
const body = `invest=3&model=ios`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
