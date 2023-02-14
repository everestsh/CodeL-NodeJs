console.log("------------Test start---------------")
// --- 
window.onload = function(){
	// var bjnode = document.getElementById("bj");
	// bjnode.onclick = function(){
	// 	alert("bjNode!")
	// }
	// var liNode = document.getElementsByTagName("li");
	// alert(liNode.length)
	// 3
	// var genderNodes = document.getElementsByName("gender");
	// alert(genderNodes.length)
	// var bjNode2 = document.getElementsByName('BeiJing')
	// alert(bjNode2.length)
	// 4
	// var nameNode = document.getElementById("name");
	// alert(nameNode.value)
	// nameNode.value="mj.G"
	// 5
	// var bjNode = document.getElementById("bj");
	// var bjTextNode = bjNode.firstChild;
	// alert(bjTextNode.nodeValue);
	// bjTextNode.nodeValue = "shuang Gui Gu"
	// 6
	// var liNodes = document.getElementsByTagName("li");
	// for( var i=0; i<liNodes.length; i++){
	// 	liNodes[i].onclick = function(){
	// 		alert(this.firstChild.nodeValue);
	// 	}
	// }
	// 7
	var bjNode = document.getElementById("bj");
	// alert(bjNode.nodeType);
	// alert(bjNode.nodeName);
	// alert(bjNode.nodeValue);
	// var nameAttr = document.getElementById("name")
	// 				.getAttributeNode("name");
	// alert(nameAttr.nodeType);
	// alert(nameAttr.nodeName);
	// alert(nameAttr.nodeValue);
	var textNode = bjNode.firstChild;
	alert(textNode.nodeType);
	alert(textNode.nodeName);
	alert(textNode.nodeValue);
}

console.log("------------Test   End---------------")
