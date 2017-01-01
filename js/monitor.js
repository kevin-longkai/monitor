//判断token是否为空，为空弹出登录
function checkTokenShowLogin() {
    var token = YYM.getToken();
    if (token !== null || token !== undefined || token !== '') {
        YYM.showLogin();
    }
}
function getConnectBlueDevice() {
    YYM.connectBluetooth();
}
function changeButtonStatus(status)
{
    if (status == 1) {
        $("#yydt_t2").text("已绑定蓝牙设备");
        $(".boosIc_c").remove();
    } else {
        $("#yydt_t2").text("绑定失败");
    }
}