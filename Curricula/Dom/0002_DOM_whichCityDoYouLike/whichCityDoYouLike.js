console.log("------------Test start---------------")
// --- 
window.onload = function(){
	var bjnode = document.getElementById("bj");
	bjnode.onclick = function(){
		alert("bjNode!")
	}
	var liNode = document.getElementsByTagName("li");
	alert(liNode.length)
}

console.log("------------Test   End---------------")
