console.log("------------Test start---------------")
// --- Edabit-P002_

// function Person(name){
// 	var age = 100;
// 	function pm(){
// 		console.log(this.name);
// 	}
// 	this.name = name;
// 	this.test = function(){
// 		console.log("public methed")
// 		// pm();
// 		pm.call(this);
// 	} 
// }
// // console.log(Person.test)
// var p1 = new Person("hhh")
// console.log(p1.name)
// console.log(p1.age)
// console.log("test ", p1.test())
console.log("---------------------------")

// function Person(pname){
// 	function pm(){
// 		console.log(self.name);
// 	}
// 	var self = {
// 		name: pname,
// 		test: function(){
// 			pm();
// 		}
// 	};
// 	return self;
// }
// // var p2 = Person('cj');
// // p2.test();


console.log("---------------------------")
// var person ={
// 	name:"cj",
// 	age:22
// };
// var programer = {
// 	language: "javascript"
// };
// function extend(p,c){
// 	var c = c || {};
// 	for(var prop in p){
// 		c[prop] = p[prop]
// 	}
// }
// // extend(person, programer)
// // programer.name
// // programer.age
// // programer.language


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
			c[prop] = (c[prop].constructor === Array) ? [] : {}
			extendDeeply(p[prop], c[prop])
		}else{
			c[prop] = p[prop];
		}
	}
}
// extend(person, programer)
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

console.log("---------------------------")
