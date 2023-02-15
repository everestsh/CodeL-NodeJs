# 23.extendDeeply
  
 ## 0001 

 ```
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
// run this cmd in browser
// extend(person, programer)
// programer.name
// programer.age
// programer.language
// programer.schools[0]
 ``` 