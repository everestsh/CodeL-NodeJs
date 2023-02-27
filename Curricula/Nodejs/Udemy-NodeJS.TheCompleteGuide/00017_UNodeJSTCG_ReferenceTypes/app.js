const person = {
    name: 'Max',
    age: 29, 

    // run: person.greet()  ==>  Hi, I am Max
    greet(){
        console.log("Hi, I am "+this.name)
    }
}

const hobbies = ['Sports', 'Cooking']
// for(let hobby of hobbies){
//     console.log(hobby)
// }
console.log(hobbies.map(hobby=> 'Hobby: '+hobby));
console.log(hobbies);
hobbies.push('Programming');
console.log(hobbies)