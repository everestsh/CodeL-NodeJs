window.onload = function () {
    document.getElementById("demo").onclick = function () {
        // 1. 让div展示出来
        // 2. 给div一个文本内容

        var divs = document.getElementsByTagName("div");
        for(var i = 0; i < divs.length; i++){
            divs[i].style.display = "block";
            // 大家还是用innerHTML，我为了演示用innerText
            divs[i].innerText = "我是内容";
        }
    }
}

/*window.onload = function () {
    alert("我是第二个onload");
}*/