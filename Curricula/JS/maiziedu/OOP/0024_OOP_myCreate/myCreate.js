console.log("------------Test start---------------")
// // 
// window.onload = function(){
// 	document.getElementById('demo').onclick = function(){
// 		var divs = document.getElementsByTagName("div");
// 		console.log(divs)
// 		// 1
// 		// for(var i=0; i<divs.length; i++){
// 		// 	console.log(divs[i])
// 		// 	console.log("div[", i, ']', divs[i].style.display)
// 		// 	divs[i].style.display = "block";
// 		// 	console.log("div[", i, ']', divs[i].style.display)
// 		// 	// divs[i].innerText = "test"
// 		// }
// 		// 2
// 		// Object.values(divs).map( e => {
// 		// 	console.log("div[]", e)
// 		// 	e.style.display = "block";
// 		// 	console.log("div[]", e.style.display)
// 		// 	return e
// 		// });
// 		// 3
// 		// var [...divs] = document.getElementsByTagName("div");
// 		// divs.map( e => {
// 		// 	console.log("div[]", e)
// 		// 	e.style.display = "block";
// 		// 	console.log("div[]", e.style.display)
// 		// 	return e
// 		// });
// 		// 4
// 		Array.from(divs).map( e => {
// 			console.log("div[]", e)
// 			e.style.display = "block";
// 			console.log("div[]", e.style.display)
// 			return e
// 		});
// 	}
// }
console.log("---------------------------")
var p = {name: "cj"};
function myCreate(p){
	var ins;
	function F(){}
	F.prototype = p;
	ins = new F(); 
	return ins;
}
var c = myCreate(p);
c.name;
function FF(){};
var ff = new FF();
ff.__prototype === FF.prototype; // false
ff.__proto__ === FF.prototype; // true
ff.prototype === ff.constructor.prototype; // false
ff.__proto__ === ff.constructor.prototype; // true
ff.prototype == FF.prototype // false
FF.prototype.__proto__ == FF.prototype //false
FF.prototype.__proto__ == FF.prototype.constructor.prototype
ff.__proto__==FF.constructor.__proto__

console.log("------------Test   End---------------")
