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

console.log(summarizeUser(name, age, hasHobbies))