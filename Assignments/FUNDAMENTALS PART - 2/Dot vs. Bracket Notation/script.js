// 1) Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki.'

// 2) Increase the country's population by two million using dot notation, and then decrease it by two million using brackets notation.

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} - speaking people, ${myCountry.neighbours.length} neighbouring countires and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);