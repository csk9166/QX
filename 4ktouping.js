[rewrite_local]
#App内
http://111.229.140.167:8762/apptov5/v1/vod/getVod url script-response-body https://raw.githubusercontent.com/Alex0510/Eric/refs/heads/master/surge/Script/wm4k.js

#投屏
https?:\/\/omts\.tc\.qq\.com\/[^\s]+\.m3u8(\?[^\s]*)? url script-request-header https://raw.githubusercontent.com/csk9166/XX/refs/heads/main/wm4k.js