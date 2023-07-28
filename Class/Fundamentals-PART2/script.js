// ACTIVATING STRICT MODE //

/*
'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log(`I can drive :D`);

// const interface = `Audio`;
// const private = 534;



// FUNCTIONS //

'use strict';
function logger() {
  console.log(`My name is Nischit`);
}

// Calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');




// FUNCTION DECLARATIONS //

'use strict';

function calcAgel(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAgel(1991);


// FUNCTION EXPRESSIONS //

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);


// ARROW FUNCTIONS //

'use strict';

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Nischit'));
console.log(yearsUntilRetirement(1980, 'Bob'));



// FUNCTIONS CALLING ANOTHER FUNCTIONS //


function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {

  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcessor(2, 3));


'use strict';

const calcAge = function(birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1;
  }
}
console.log(yearsUntilRetirement(1991, 'Nischit'));
console.log(yearsUntilRetirement(1950, 'Mike'));



// ARRAYS //

'use strict';

const friend1 = 'Likith';
const friend2 = 'Sharad';
const friend3 = 'Gagan';

// METHOD - 1
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

// METHOD - 2
const y = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'Jay';
console.log(friends);
// friends = ['Bob', 'Alice']

const firstName = 'Jonas'
const Jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(Jonas);
console.log(Jonas.length);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge (years[0]);
const age2 = calcAge (years[1]);
const age3 = calcAge (years[years.length-1]);
console.log(age1, age2, age3);

const ages = [calcAge (years[0]), calcAge (years[1]), calcAge (years[years.length-1])];
console.log(ages);




// BASIC ARRAY OPERATION (METHODS) //

const friends = ['Michael', 'Steven', 'Peter'];

// Add elements


friends.unshift('John'); // Adds element 1st
console.log(friends);

const newLength = friends.push('Jay'); // Adds element Last
console.log(friends);
console.log(newLength);


// Remove elements

friends.shift(); // Removes Frist element
console.log(friends);

friends.pop(); // Removes Last element
const popped = friends.pop(); 
console.log(popped);
console.log(friends);

console.log(friends.indexOf('Steven')); // Index element
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven')); // T OR F
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
  console.log('You have a friend called Steven');
}


// OBJECTS //

// Object literal contents {}

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};



// Dot vs. Bracket Notation //

const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const intrestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if(jonas[intrestedIn]) {
  console.log(jonas[intrestedIn]);
} else {
  console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

jonas.location = 'Portugal';
jonas['Twitter'] = '@xyz123';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/



