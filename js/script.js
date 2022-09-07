// const person = {
//   name: "Eivind",
//   age: 19,
// };

// console.log(person);

// const personJSON = JSON.stringify(person);

// console.log(personJSON);

// const backAgain = JSON.parse(personJSON);
// console.log(backAgain);

// const myString = `[{"name":"Eivind","age":19,"height":193}, 20, {"type": "cat", "color": "black", "age": 12}]`;
// const myObject = JSON.parse(myString);
// console.log(myObject);

//Local Storage
// Lager key: "key", value: "value" i localStorage
// localStorage.setItem("secret", "value");

// // Printer ut hva valuen til keyen "secret" er. Secret ble laget direkte i nettleser
// console.log(localStorage.getItem("secret"));

// // Fjerne key value pairet til secret
// console.log(localStorage.removeItem("secret"));

// console.log(localStorage.getItem("secret"));

// // Clear all storage in Local Storage
// localStorage.clear();

// Session storage

// sessionStorage.setItem("keys", 8);

// console.log(sessionStorage.getItem("keys"));

// Destructing

//Array

// const noroffClass = [
//   "Jørgen",
//   "Sherzad",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
//   "Siri",
//   "Audun",
//   "Oystein",
// ];

// console.log(noroffClass[0]);

// const [first, , second, ...remainderOfClass] = noroffClass;
// console.log(first, second);
// console.log(remainderOfClass);

// Object

// const myObject = {
//   color: "red",
//   width: 23,
//   style: "cool",
//   isFlying: true,
// };

// console.log(`I am ${myObject.style} and ${myObject.color}`);

// // -- Old way of declaring variables from an object
// // const color = myObject.color;
// // const style = myObject.style;

// const { color, style, ...ex } = myObject;

// console.log(`I am ${style} and ${color}`);

// console.log(ex);

// console.log(ex.isFlying);

// Function

// const flight = {
//   flightCode: "BO789",
//   company: "SASs",
//   capacity: 4,
// };

// function generateGreeting(flightCode, company) {
//   console.log(`Greeting to fight ${flightCode}, from ${company}`);
// }

// // const { flightCode, company } = flight;

// generateGreeting(flightCode, company);

// function generateGreeting(flight) {
//   const { flightCode, company } = flight;
//   console.log(`Greeting to fight ${flightCode}, from ${company}`);
// }

// generateGreeting(flight);

// function generateGreeting({ flightCode, company }) {
//   console.log(`Greeting to fight ${flightCode}, from ${company}`);
// }

// const person = {
//   name: "Eivind",
// };

// generateGreeting(person);

// Nested

// const ryggsekk = {
//   pennal: {
//     blyant: 4,
//     linjal: 1,
//     kalkulator: 12,
//   },
//   mat: ["Eple", "Pære", "Tikka Masala"],
//   bok: "Knut Hamsunds beste verk!",
// };

// // console.log(ryggsekk);

// const {
//   pennal: { blyant },
//   mat: [, , middag],
// } = ryggsekk;

// const oldBlyant = ryggsekk.pennal.blyant;
// const oldMiddag = ryggsekk.mat[2];

// console.log(blyant, middag);

// Stolen filter code

const people = [
  {
    firstName: "Ola",
    lastName: "Nordmann",
    score: 8,
  },
  {
    firstName: "Kari",
    lastName: "Knutsen",
    score: 9,
  },
  {
    firstName: "Joakim",
    lastName: "Nordmann",
    score: 4,
  },
];

// const winners = people.filter((currentItem) => {
//   if (currentItem.score >= 5) {
//     return true;
//   }
// });

const winners = people.filter(({ score, lastName }) => {
  if (score >= 5 && lastName === "Nordmann") {
    return true;
  }
});

console.log(winners);
