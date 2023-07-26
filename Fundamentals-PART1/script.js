// let js = 'amazing';
// console.log(40+8+23-10);

// console.log('Nischit');
// console.log(23);

// let firstName = "NISCHIT";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);


// DATA TYPES
// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Nischit');

// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);

// let year; 
// console.log(year);
// console.log(typeof year);

// year = 2023;
// console.log(year);

// console.log(typeof null);


// let, const and var
// let age = 30;
// age = 31;

// const birthYear = 2001;
// // birthYear = 1990;

// var job = 'programmer';
// job = 'teacher';

// lastName = 'D S';
// console.log(lastName);

// Math Operators
// const now = 2037;
// const ageNischit = now - 2001;
// const ageSarah = now - 2019;
// console.log(ageNischit, ageSarah);

// console.log(ageNischit * 2, ageNischit / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// const firstName = 'Nischit';
// const lastName = 'DS';
// console.log(firstName + ' ' + lastName);


// // Assignment Operators
// let x = 10 + 5; // 15
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1 
// x--;
// x--;
// console.log(x);

// // Comparison Operators
// console.log(ageNischit > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 2001 > now - 2019);

// const now = 2037;
// const ageNischit = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);


// let x,y;
// x = y = 25 - 10 -5; // x = y = 10, x = 10
// console.log(x,y);

// const averageAge = (ageNischit + ageSarah)  / 2
// console.log(ageNischit, ageSarah, averageAge);


// Template Literals

// const firstName = 'Nischit';
// const job = 'Teacher';
// const birthYear = 1991;
// const year = 2037;

// const Nischit = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(Nischit);

// const NischitNew = `I'm ${firstName}, a ${year - birthYear} year old ${job} !`;
// console.log(NischitNew);

// console.log(`Just a regular string...`);

// console.log('String with \n\
// multiple \n\
// lines');

// console.log(`String
// multiple
// lines`);

// If-else

// const age = 15;

// if (age >= 18) {
//   console.log('Sarah can start driving');
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young, wait another ${yearsLeft} years ;)`);
// }


// const birthYear = 2012;
// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);


// Type conversion
// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // Type Coercion
// console.log('I am' + 23 + 'years old');
// console.log('23' - '10' - 3);
// console.log('23' / '2');
// console.log('23' > '18'); 

// let n = '1' + 1;
// n = n -1;
// console.log(n);


//  5 falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all;");
// } else {
//   console.log("You should get a job");
// }

// let height = 0;
// if (height) {
//   console.log(`YAY! Height is defined`);
// } else {
//   console.log(`Height is undefined`);
// }

// Equality operators

// const age = '18';
// if (age === 18)
//   console.log(`You just became an adult :D(Strict)`);

// if (age == 18)
//   console.log(`You just became an adult :D(Loose)`);


// const favourite =Number (prompt("What's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 7) { 
//   console.log(`Cool! 7 is an amazing number`);
// } else if (favourite === 23) {
//   console.log(`23 is also an amazing number`);
// } else if (favourite === 9){
//   console.log(`9  is also an amazing number`);
// } else {
//   console.log(`Number is not 7 or 23`);
// }

// if(favourite !== 23) 
// console.log(`Why not 23?`);

// Logical Operators

// const hasDriversLicense = true; // A
// const hasGooDVision = true; // B

// console.log(hasDriversLicense && hasGooDVision);
// console.log(hasDriversLicense || hasGooDVision);
// console.log(!hasDriversLicense);


// if (hasDriversLicense && hasGooDVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive..`);
// }

// const isTired = false; // C
// console.log(hasDriversLicense && hasGooDVision &&isTired);

// if (hasDriversLicense && hasGooDVision && !isTired) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive..`);
// }

// Switch Statement

const day = `Monday`;

switch (day) {
  case `Monday`: // day === `Monday`
    console.log(`Plan course strucutre`);
    console.log(`Go to coding meetup`);
    break;
  case `Tuesday`: // day === `Tuesday`
    console.log(`Plan theory videos`);
    break;
  case `Wednesday`:
  case `Thursday`: // day === `Wednesday, Thursday`
    console.log(`Write code examples`);
    break;
  case `Friday` :
    console.log(`Record videos`);
    break;
   case `Saturday` : 
   case `Sunday` : 
   console.log(`Enjoy the weekend`);
    break;
  default:
    console.log(`Not a valid day!`);
}

// Above case using if-else
if (day === `Monday`) {
  console.log(`Plan course strucutre`);
  console.log(`Go to coding meetup`);
} else if (day === `Tuesday`){
  console.log(`Plan theory videos`);
} else if (day === `Wednesday` || day ===`Thursday`){
  console.log(`Write code examples`);
}else if (day == `Friday`){
  console.log(`Record videos`);
}else if (day === `Saturday` || day === `Sunday`){
  console.log(`Enjoy the weekend`);
}else {
  console.log(`Not a valid day!`);
}











