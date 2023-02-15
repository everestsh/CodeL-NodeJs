console.log("------------Test start---------------")
// 
window.onload = function(){
	document.getElementById('demo').onclick = function(){
		var divs = document.getElementsByTagName("div");
		console.log(divs)
		// 1
		// for(var i=0; i<divs.length; i++){
		// 	console.log(divs[i])
		// 	console.log("div[", i, ']', divs[i].style.display)
		// 	divs[i].style.display = "block";
		// 	console.log("div[", i, ']', divs[i].style.display)
		// 	// divs[i].innerText = "test"
		// }
		// 2
		// Object.values(divs).map( e => {
		// 	console.log("div[]", e)
		// 	e.style.display = "block";
		// 	console.log("div[]", e.style.display)
		// 	return e
		// });
		// 3
		// var [...divs] = document.getElementsByTagName("div");
		// divs.map( e => {
		// 	console.log("div[]", e)
		// 	e.style.display = "block";
		// 	console.log("div[]", e.style.display)
		// 	return e
		// });
		// 4
		Array.from(divs).map( e => {
			console.log("div[]", e)
			e.style.display = "block";
			console.log("div[]", e.style.display)
			return e
		});
	}
}
console.log("---------------------------")
function P(){}

function C(){}

// 1
C.prototype = P.prototype;
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true
C.prototype.xx = "xxxx"
c.xx // "xxxx"
var p = new P();
p.xx // "xxxx"

// 2
C.prototype = new P();
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true
C.prototype.xx = "xxxx"
c.xx // "xxxx"
var p = new P();
p.xx // undefined

// 3
//function F(){};
//F.prototype = P.prototype;
//var f = new F();
//C.prototype = f;
C.prototype = Object.create(P.prototype);
// test 
var c1 = new C();
c1 instanceof C // true
c1 instanceof P // true

console.log("------------Test   End---------------")
