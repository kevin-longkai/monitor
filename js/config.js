/**
 * Created by Kevin on 1/1/17.
 */
var base_url = '/monitor2/';
/**
 * 今日动态
 * @type {string}
 */
var today_monitor = base_url + "monitor-chart/monitor.html";
function todayMonitor() {
    window.location.href = today_monitor;
}
/**
 * 首页
 * @type {string}
 */
var shou_ye = base_url + "monitor/index.html";
function shouYe() {
    window.location.href = shou_ye;
}

/**
 * 易牙美
 * @type {string}
 */
var yi_ya_mei = base_url + "monitor-chart/monitor.html";
function yiYaMei() {
    window.location.href = yi_ya_mei;
}

var ask_doctor = base_url + "doctors/list.html";

function askDoctor() {
    window.location.href = ask_doctor;
}