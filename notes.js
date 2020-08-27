//alert('Hello');     //Don't use alert to debug or output, use the console because alert blocks the script from running
console.log("Hello World"); //Access with f12, many debugging options in console object, look at MDN
console.error("This is an error");
console.warn("This is a warning");



/*3 ways to set up variable: var, let, const. Var sucks (globally scoped)
*let and const was made in es6, block-level scope
*let - Allows reassigning of values
*const - Short for constant, does not allow ressassignment of values
       - Const does not allow for initialization
*/

let age1 = 30;
age1 = 31;
const age2 = 15; //Use const unless you know you will change it
//age2 = 16;      //Will produce an error
console.log(age1);
//Can use const for arrays, can change data inside array but not array itself


//Primitive datatypes: String, Numbers, Boolean, null, undefinied, Symbol
const name = "Chris";
const age = 21;
const rating = 9.8;
const isAwesome = true;
const x = null; //Empty variable
const y = undefined;
let z;  //can only initialize lets
console.log(typeof name);
console.log(typeof age);
console.log(typeof rating);
console.log(typeof isAwesome);
console.log(typeof x);  //Object, but is an error. Return type is bogus
console.log(typeof y);  

//Concatenation
console.log("My name is " + name + " and I am " + age);
//Template String
console.log(`My name is ${name} and I am ${age1}`);

//String Methods:
const s = "Hello World";
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,8).toUpperCase());
console.log(s.split(''));
const tags = 'tech, computer, it, se, coder';
console.log(tags.split(', '));

/*
*Arrays - data structure
*
*/
//Uncommon way: array constructor
const numbers = new Array('1,2,3,4,5');
console.log(numbers);
//Can put different data types in arrays and array lengths are flexibile
//JS is not static typing but typescript is
const fruits = ['apple', 'banana', 'orange', 'pineapple', 'watermelon', 15];
console.log(fruits);
console.log(fruits[1]);
fruits[1]  =  'grapes';
console.log(fruits);
//How to append to an array
fruits.push("mangos");
//How to add to beginning
fruits.unshift("strawberries");
//fruits.pop() is popping the last one.
console.log(fruits);
//How to check if an item is an array
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("orange"));


//Object literals
const person = {
    firstName: "John",
    lastName: "Doe",
    age: "30",
    hobbies: ["music", "movies", "sports"],
    address: {
        street: "50 main st",
        city: "Boston",
        state: "MA"
    }
}

console.log(person);
console.log(person.firstName); //Dot syntax to access properties
const {firstName, lastName, address: {city} } = person; //pulls differn things out
console.log(firstName, city);
person.email = "john@gmail.com";
console.log(person);


//Array of Objetcs
const todos = [
    {
        id: 1,
        text: "Take out tash",
        isComplete: true,
    },
    {
        id: 2,
        text: "Meeting with boss",
        isComplete: true,
    },
    {
        id: 3,
        text: "Dentist appt",
        isComplete: false,
    }
];
console.log(todos);
console.log(todos[1].text);

/*json is a data format used for full stack development and APIs. (sent and received in json format)
* array of objects is very similar in structure
*/

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);  //converts array of objects to json, this is how you will send data to a server

//Loops
//For
for(let i=0; i<10; i++){        //Same syntax as java
    console.log(`For Loop Number: ${i}`);
}

//While
let i = 0;
while(i<10){
    console.log(`While Loop Number: ${i}`)
    i++
}

//Standard way of looping through arrays
for(let i=0; i<todos.length; i++){
    console.log(todos[i].text);
}

//for of loop, essentially a for each loop
for(let todo of todos){
    console.log(todo.text);
}

//forEach, map, filter
todos.forEach(function(todo){
    console.log(todo.text);     //Looks much better with arrow function
});

//Map
const todoText = todos.map(function(todo){
    return todo.text;     //Returns an array of text
});
console.log(todoText);

//Filters, adds whatever fufills the condition
const todoCompleted = todos.filter(function(todo){
    return todo.isComplete === true;
}).map(function(todo){      //Chain functions to return only the text
    return todo.text;   //VERY VERY POWERFUL
})
console.log(todoCompleted);


todos.forEach((todo)=>console.log("Task: " + todo.text));