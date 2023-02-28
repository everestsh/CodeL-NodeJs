const person = {
    name: 'Max',
    age: 29, 

    // run: person.greet()  ==>  Hi, I am Max
    greet(){
        console.log("Hi, I am "+this.name)
    }
}
const copiedPerson = {...person};
copiedPerson.age = 45
console.log(copiedPerson);
console.log(person)

const hobbies = ['Sports', 'Cooking']
const [hobbie1, hobbie2] = hobbies;
console.log(hobbie1, hobbie2)
// // for(let hobby of hobbies){
// //     console.log(hobby)
// // }
// console.log(hobbies.map(hobby=> 'Hobby: '+hobby));
console.log(hobbies);
// m 1
// const copiedArray = hobbies.slice()
// const copiedArray = [hobbies]
const copiedArray = [...hobbies]
copiedArray.push('Programming');
console.log(hobbies)
console.log(copiedArray)

const toArray = (...args)=>{
    return args;
}
console.log(toArray(1, 2, 3, 4))