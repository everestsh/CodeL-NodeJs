console.log("------------Test start---------------")
// --- Edabit-P002_

// 1
// function sayHi(){
//     console.log('hi');
// }
// sayHi();
// var sayBye = function(){
//     console.log('bye');
// }
// sayBye();

// 2
function callFunction(fun){
    fun();
}
var sayBye = function(){
    console.log('bye');
}
callFunction(sayBye);
console.log("------------Test   End---------------")

console.log("---------------------------")