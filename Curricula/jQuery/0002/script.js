// 1. 入口函数的方式
$(document).ready(function () {

    $("#demo1").click(function () {
        $("div").show(1000).html("我是内容");
    });
});