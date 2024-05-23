const url = "https://api.m.jd.com/client.action?functionId=signBeanAct";
const method = "GET";
const headers = {
    'Cookie': '__jd_ref_cls=Babel_H5FirstClick; mba_muid=17162804174721524506415.5.1716434929270; mba_sid=5.5; 3AB9D23F7A4B3C9B=LKJ7AK2TVWBRYVN3RTHOLWBQXFEG5EJBJSLL5BA6BYSJ2IYCYMB4F2U53OEZ4FXJ6AUXUSNZEGIPM7SHIER6DCTCMA; 3AB9D23F7A4B3CSS=jdd03LKJ7AK2TVWBRYVN3RTHOLWBQXFEG5EJBJSLL5BA6BYSJ2IYCYMB4F2U53OEZ4FXJ6AUXUSNZEGIPM7SHIER6DCTCMAAAAAMPUN7IA3IAAAAADON6H4ZBSFMWLAX; _gia_d=1; __jda=122270672.17162804174721524506415.1716280417.1716319955.1716434926.3; __jdb=122270672.1.17162804174721524506415|3.1716434926; __jdc=122270672; __jdv=122270672%7Ckong%7Ct_2018512525_ios_nopay%7Ctuiguang%7C17162803831922140570006%7C1716280383000; pre_seq=2; pre_session=023aafb3d34df4eece46fa49ac573b5794f5749a|7; shshshfpb=BApXcAJd2oOpD9JS_QZSjQFwHL43yaubhRta0c7Vq9xJ1PdZfQrPetxvKuDLZGLdLWutkmqfn; pt_key=app_openAAJmTrfKADABwOrAawa-LLFtVHKEQkWYo8H-xmtTGphLvpDl5dRyBswTMSqUQZICKnxoh3DnZNM; pt_pin=jd_UhEaATyCKQXI; qid_fs=1716320958916; qid_ls=1716320958916; qid_ts=1716320958920; qid_uid=b94455b0-e1a7-438c-b7a6-cfc8bd9489a3; qid_vis=1; shshshfpa=6de8a1e8-2e67-01b2-3adc-65bff842466b-1716280421; RT="z=1&dm=jd.com&si=jf53acwt4w&ss=lwgsl42w&sl=1&tt=0&obo=1&ld=l8q3&r=fee62d03f84b51893b08adbc6d42e88a&hd=l8q7"; mobilev=touch; pwdt_id=jd_UhEaATyCKQXI; sid=; shshshfpx=6de8a1e8-2e67-01b2-3adc-65bff842466b-1716280421; b_avif=0; b_dh=812; b_dpr=3; b_dw=375; b_webp=1', // 将此处替换为您的京东Cookie
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148  Install_web_JD_Version/1681660671 JDAPP;'
};

const request = {
    url: url,
    method: method,
    headers: headers
};

$task.fetch(request).then(response => {
    console.log(response.body);
    $notify("京东签到", "签到结果", response.body); // 显示通知
}, reason => {
    console.log(reason.error);
    $notify("京东签到", "签到失败", reason.error); // 显示通知
});
```

3. **获取京东Cookie**
    - 打开京东APP或者网站通过开发者工具抓取你的Cookie。

4. **在Quantumult X中配置**
    - 打开Quantumult X应用，进入`[任务(Task)]`设置。
    - 点击右上角的`+`号，添加新的任务。
    - 在新任务中选择`脚本 (Script)`，选择你刚刚保存的`jd_signin.js`文件。
    - 配置脚本执行的时间，例如每日一次：
      ```json
      {
        "type": "timer",
        "interval": 86400, // 每24小时运行一次
        "script": "jd_signin.js"
      }
