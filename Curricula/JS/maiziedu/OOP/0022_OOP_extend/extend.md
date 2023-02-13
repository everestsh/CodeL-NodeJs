# 22.extend
  
 ## 0001 

 ```
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
// run in browser

extend(person, programer)
programer.name
programer.age
programer.language
 ``` 