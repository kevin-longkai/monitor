/**
 * 判断token是否为空，为空弹出登录
 *
 * @constructor
 */
function showLogin() {
    if (!checkLogin()) {
        YYM.showLogin();
    }
}
/**
 * 检查是否有登录态
 *
 * @returns {boolean}
 */
function checkLogin() {
    var flag = true;
    var token = YYM.getToken();
    if (token !== null || token !== undefined || token !== '') {
        flag = false;
    }
    return flag;
}

/**
 *连接蓝牙设备
 */
function getConnectBlueDevice() {
    YYM.connectBluetooth();
}
/**
 * 判断设备是否连接
 *
 * @param status
 */
function changeButtonStatus(status)
{
    if (status == 1) {
        $("#yydt_t2").text("已绑定蓝牙设备");
        $(".boosIc_c").remove();
    } else {
        $("#yydt_t2").text("绑定失败");
    }
}
/**
 * 获取数据渲染图标
 * @returns {*}
 */
function getInstantData(){
    var jsonData = YYM.getInstantData();
    var obj = new Function("return" + jsonData)();
    return obj.temperature;
}