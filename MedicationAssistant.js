/*
用药助手 unlock vip

QX：
^https:\/\/newdrugs\.dxy\.cn\/app\/user\/(init|pro\/stat) url script-response-body https://github.com/gitLopp/quanjd/blob/main/MedicationAssistant.js
^https:\/\/i\.dxy\.cn\/snsapi\/username\/* url script-response-body https://github.com/gitLopp/quanjd/blob/main/MedicationAssistant.js

*.dxy.cn

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);
const path1 = '/app/user/init';
const path2 = '/app/user/pro/stat';
const path3 = '/snsapi/username';

if (url.indexOf(path1) != -1) {
	obj.data["isProActive"] = true;
	obj.data["expireDate"] = 1999999999;
	obj.data["memberDiscount"] = true;
	obj.data.iapPurchaseVO["purchase"] = true;
	obj.data.iapPurchaseVO["message"] = null;
	obj.data.iapPurchaseVO["error"] = null;
}

if (url.indexOf(path2) != -1) {
	obj.data["memberDiscount"] = true;
	obj.data["isActive"] = true;
}

if (url.indexOf(path3) != -1) {
	obj.items["expertUser"] = true;
	obj.items["expert"] = true;
	obj.items["professional"] = true;
	obj.items["expertStatus"] = 1;
	obj.items["taskEndTime"] = 1999999999;
}

body = JSON.stringify(obj);
$done(body);
