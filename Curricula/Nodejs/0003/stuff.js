var  counter = function(arr){
    return 'There are ' + arr.length + ' elements in this  array;'
};

var addr = function(a, b){
    return `The sum of the 2 numbers is ${a+b}`;
}
var pi = 3.14;

module.exports.counter = counter;
module.exports.addr = addr;
module.exports.pi = pi;