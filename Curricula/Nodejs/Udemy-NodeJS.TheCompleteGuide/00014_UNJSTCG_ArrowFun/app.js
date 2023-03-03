const name = "Max";
let age = 29;
const hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobby){
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user hobbies: ' +
        userHasHobby
    );
}
// const add = (a, b)=> a+b;
// const addOne = a=> a+1;
const addRandom = ()=> 2+1;
// console.log(add(1,3))
// console.log(addOne(3))
console.log(addRandom())

console.log(summarizeUser(name, age, hasHobbies))