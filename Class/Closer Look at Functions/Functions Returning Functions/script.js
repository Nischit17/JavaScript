'use strict';

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet('Heyy');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greetArr = greeting => name => console.log(`${greeting}, ${name}`);

greetArr('Hi')('Jonas');
