// singleton
//Object.create()

// object literals

// const mysym = Symbol("key1")

// const JsUser = {
//     name: "sami",
//     age: 24,
//     location: "jaipur",
//     email: "abc@gmail.com",
//     [mysym]: "sumi"
// }

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

// JsUser.email = "hit@gmail.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
// JsUser.email = "ht@gmail.com";
// console.log(JsUser.email);

// const keyName = "srNo";
// const srNo = 1;

// const person = {
//   name: "John Doe",
//   [keyName]: srNo, // keyName = "srNo" and srNo = 1  . Equivalent to => srNo: 1
//   age: 30,
//   DOB: 60,
// };
// console.log(person);
// console.log(person.DOB);

// console.log(person.srNo); // 1      // dot notation, direct key
// console.log(person[keyName]); // 1   // bracket notation with variable - key is a variable   where key = "srNo"
// console.log(person["srNo"]); // 1  // bracket notation with direct key

// console.log(person.name); // John Doe
// console.log(person["name"]); // John Doe

// let greetUser = (person) => {
//   console.log(`Hello, ${person.name}!`);
// };

// greetUser(person); // Hello, John Doe!

// console.log(greetUser); // [Function: greetUser]
// console.log(greetUser(person)); // Hello, John Doe! \n undefined  // greetUser(person) returns undefined \
// because greetUser function does not return anything

// let greetUser2 = (person) => {
//   return `Hello, ${person.name}!`;
// };

// console.log(greetUser2(person)); // Hello, John Doe!  // greetUser2(person) returns a string and console.log prints it

// let greetUser3 = (person) => {
//   console.log(`Hello, ${person.name}!`);
//   return person.name;
// };

// console.log(greetUser3(person)); // Hello, John Doe! \n John Doe  // greetUser3(person) prints hello message and returns person.name which is printed by outer console.log

const course = {
    courseName: "Js",
    price: "9999",
    courseInstructor: "Sami"
}

const {courseInstructor: instructor} = course

console.log(instructor);