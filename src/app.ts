const button = document.querySelector('button')!; 
// ! - exclamation mark '!' this tels TS that you the developer know that this button exists
// for another scenario you shold check if (button) {  } that button not null
function clickHandler(message: string) {
    console.log('Clicked' + message);
    
}

button.addEventListener('click', clickHandler.bind(null, "You're welcome"));
    
// let age: number;
// age = 30;

// const usersName = 'Alex';

// console.log(usersName);
const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);

const person1 = {
  firstName1: 'Max',
  age: 30
};

const copiedPerson = { ...person1 };

const added = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = added(5, 10, 2, 3.7);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName1: userName1, age } = person1;

console.log(userName1, age, person1);