console.log("------------Test start---------------")
// --- 
window.onload = function(){
	document.getElementById("demo").onclick = function(){
		var divs = document.getElementsByTagName("div");
		for(var i=0; i<divs.length; i++){
			divs[i].style.display = "block";
			// divs[i].innerText = "test"
		}
	}
}

console.log("---------------------------")
var person ={
	name:"cj",
	age:22
};
var programer = {
	language: "javascript"
};
function extend(p,c){
	var c = c || {};
	for(var prop in p){
		c[prop] = p[prop]
	}
}
// extend(person, programer)
// programer.name
// programer.age
// programer.language


console.log("------------Test   End---------------")
