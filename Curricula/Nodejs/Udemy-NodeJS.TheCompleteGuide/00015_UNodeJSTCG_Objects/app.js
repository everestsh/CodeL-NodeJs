const person = {
    name: 'Max',
    age: 29, 
    // m 1
    // run: person.greet()  ==>  Hi, I am undefined
    // greet: ()=>{
    //     console.log("Hi, I am "+this.name)
    // }
    // m 2
    // run: person.greet()  ==>  Hi, I am Max
    // greet: function(){
    //     console.log("Hi, I am "+this.name)
    // }
    // m3
    // run: person.greet()  ==>  Hi, I am Max
    // greet(){
    //     console.log("Hi, I am "+this.name)
    // }
}

console.log(person)
person.greet()
