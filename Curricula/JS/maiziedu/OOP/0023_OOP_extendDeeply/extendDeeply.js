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
var person ={
	name:"cj",
	age:22,
	address:{
		home: "home address",
		office: "office address"
	},
	schools:["xiaoxue", "daxue"]
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
function extendDeeply(p, c){
	var c = c || {};
	for(var prop in p){
		if(typeof p[prop] === "object"){
			c[prop] = (p[prop].constructor === "Array") ? [] : {}
			extendDeeply(p[prop], c[prop])
		}else{
			c[prop] = p[prop];
		}
	}
}
// extendDeeply(person, programer)
// programer.name
// programer.age
// programer.language
// programer.schools[0]

function Parent(){
	this.name = "abc";
	this.address = {home: "home"};
}
function Child(){
	Parent.call(this);
	this.language = "java";
}
// var c = new Child()
// c.name
// c.address.home

console.log("------------Test   End---------------")
