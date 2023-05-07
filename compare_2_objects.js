// Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

const obj1 = { name : "BMW" , name2 : "Audi" , name3 : "Hyundai"};
const car1 = {type:"SUV", model:"X4", color:"black"};
const car2 = {type:"Convertible", model:"A8", color:"RoseRed"};

const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false