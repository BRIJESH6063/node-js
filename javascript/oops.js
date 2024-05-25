// Introduction to Object Oriented Programming in JavaScript

// The object can be created in two ways in JavaScript:
// 1. Object Literal
// 2. Object Constructor
// let person = {
//     firstName : "Mukul",
//     lastName : "Latiyan",
//     getFunction: function() {
//         return (`The name of person is ${this.firstName} ${this.lastName}`) ;
//     },
//     phoneNumber: {
//         mobile: 2675489235,
//         landLine: 234555
//     }
// }
// console.log(person.getFunction())

// // Defining object Using an Object Constructor.
// function person(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName ;
// }
// let person1 = new person('Mukul', 'Latiyan');
// let person2 = new person('Rahul', 'Avasthi');
// console.log(person1.firstName);
// console.log(`${person2.firstName} ${person2.lastName}`) ;

// Classes: Classes are blueprints of an Object. A class can have many Objects because the class is 
// a template while Objects are instances of the class or the concrete implementation.
// class Vehicle {
//     constructor(name, maker, engine) {
//         this.name = name;
//         this.maker = maker;
//         this.engine = engine;
//     }
//     getDetails() {
//         return (`The name of the bike is ${this.name}`) ;
//     }
// }
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
// console.log(bike1.name);    // Hayabusa
// console.log(bike2.maker);   // Kawasaki
// console.log(bike1.getDetails());
// function Vehicle(name, maker, engine) {
//     this.name = name ;
//     this.maker = maker ;
//     this.engine = engine ;
// }
// Vehicle.prototype.getDetails = function() {
//     console.log(`The name of this bike is `+ this.name) ;
// }
// let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
// let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');
// console.log(bike1.name);
// console.log(bike2.maker);
// console.log(bike1.getDetails());

// ACCESS MODIFIERS  -------------------
// Sometimes encapsulation refers to the hiding of data or data Abstraction which means representing 
// essential features hiding the background detail. Most of the OOP languages provide access modifiers 
// to restrict the scope of a variable, but there are no such access modifiers in JavaScript, 
// there are certain ways by which we can restrict the scope of variables within the Class/Object.

// function person(fname, lname) {
//     let firstName = fname ;
//     let lastName = lname ;
//     let getDetails_noaccess = function () {
//         return (`First Name is ${firstName} Last Name is ${lastName}`)
//     }
//     this.getDetails_access = function () {
//         return (`First Name is ${firstName} Last Name is ${lastName}`)
//     }
// }
// let person1 = new person('Mukul', 'Latiyan');
// console.log(person1.firstname);
// console.log(person1.getDetails_noaccess);
// console.log(person1.getDetails_access());
// ----------------------------------------
// These are the following 4 ways :
// 1. Creating object with a constructor
// 2. Using object literals
// 3. Creating object with Object.create() method
// 4. Using es6 classes
// --------------------
// Creating object with a constructor
// One of the easiest ways to instantiate an object is in JavaScript. 
// Constructor is nothing but a function and with the help of a new keyword, 
// the constructor function allows to creation of multiple objects of the same flavor
// function vehicle(name, maker, engine) {
//     this.name = name ;
//     this.maker = maker ;
//     this.engine = engine ;
// }
// let car = new vehicle("GT", "BMW", "1998cc") ;
// console.log(car)
// Using object literals
// Literals are smaller and simpler ways to define objects. We simply define the property and values 
// inside curly braces
// let car = {
//     name : 'GT',
//     maker : 'BMW',
//     engine : '1998cc'
// };
// console.log(car.name); //dot notation
// console.log(car['maker']); //bracket notation

// const jsonString = '{"name": "John", "age": 30}' ;
// const jsonObject = JSON.parse(jsonString) ;
// console.log(jsonObject)
// console.log(jsonString)
// FUNCTION -------------- METHOD 1 ------
// function toCelsius(f) {
//     return (f-32) *5/9 ;
// }
// Arrow Function :
// It is one of the most used and efficient methods to create a function in JavaScript because of 
// its comparatively easy implementation.
// let toCelsius = (f) => {
//     return (f-32) *5/9 ;
// }
// console.log(toCelsius(45))
// nested function ...........
// function msg(fname) {
//     function hey() {
//         console.log("Hey "+ fname+"!") ;
//     }
//     return hey() ;
// }
// msg("Ravi")
// Immediately invoked function expression:
// let msg = (function() {
//     return "Welcome to GFG!" ;
// })() ;
// console.log(msg) ;

// JavaScript Function Call
// JavaScript function calls involve invoking a function to execute its code. 
// You can call a function by using its name followed by parentheses (), optionally passing arguments inside the parentheses
// function product(a, b) {
//     return a * b ;
// }
// let result = product.call(this, 290, 132) ;
// console.log(result)
// let employee = {
//     details: function (designation, experience) {
//         return this.name + " "
//                + this.id + " "
//                + designation + " "
//                + experience ;
//     }
// }
// let emp1 = {
//     name: "A",
//     id: "123",
// }
// let emp2 = {
//     name: "B",
//     id: "456",
// }
// let x = employee.details.call(emp2, " Manager ", "4 years");
// console.log(x) ;

// Different ways of writing functions in JavaScript
// JavaScript Methods ...............
// A JavaScript method is a property of an object that contains a function definition. 
// Methods are functions stored as object properties.
// let employee = {
//     empname : "Rahul",
//     department: "sales",
//     details: function() {
//         return this.empname + 
//         " works with the department " + 
//         this.department  ;
//     }
// } ;
// console.log(employee.details()) ;

// function Person() {}
// person = Person() ;
// console.log(person) ;

// Function Constructor: In this code, we are creating an instance using the new keyword. 
// Here the person is the instance (object) of the Person. A function declaration is a regular 
// function unless we create an instance of the function. The main advantage of the function 
// constructor is to initialize the member values of the javascript functions.
// function Person(name, age) {
//     this.name = name ;
//     this.age = age ;
// }
// let person = new Person("Vikah", 22);
// console.log(person.name) ;
// console.log(person.age) ;

// .........................ARRAY.....................
// let names= new Array() ;
// console.log(names)
// let courses = new Array("HTML", "CSS", "Javascript", "React");
// console.log(courses);
// let arr = new Array(3);
// arr[0] = 10;
// arr[1] = 20;
// arr[2] = 30;
// console.log(arr);

// // Creating an Array and Initializing with Values
// let courses = ["HTML", "CSS", "Javascript", "React"];
// // Add Element to the end of Array
// courses.push("Node.js");
// // Add Element to the beginning
// courses.unshift("Web Development");
// console.log(courses);
// // Removes and returns the last element
// let lastElement = courses.pop() ;
// console.log(lastElement + " :: " + courses)
// // Removes and returns the first element
// let firstElement = courses.shift();
// console.log("After Removed the First elements: " + courses);
// courses.forEach(function print(element) {
//     console.log(element) ;
// }) ;

// let otherCourses = ["Node.js", "Expess.js"];
// // Concatenate both arrays
// let concateArray = courses.concat(otherCourses);
// // let concateArray = courses + otherCourses ;
// console.log("Concatenated Array: ", concateArray);
// console.log(typeof courses === "object") // true

// console.log("Using Array.isArray() method: ", Array.isArray(courses))
// console.log("Using instanceof method: ", courses instanceof Array)
// console.log(courses.length)
// courses.length = 12 ;
// console.log(courses) // [ 'HTML', 'CSS', 'Javascript', 'React', <8 empty items> ]

// ...............Array.join ...............
// console.log(courses.join(" | ")) // HTML | CSS | Javascript | React
// Array Concatenation ...courses........ 
// Declare three arrays
// let arr1 = [11, 12, 13];
// let arr2 = [14, 15, 16];
// let arr3 = [17, 18, 19];
// let newArr = arr1.concat(arr2, arr3);
// console.log(newArr);

// --------------Flat Array ------------
// // arr.flat([depth])
// const arr = [['1', '2'], ['3', '4', '5',['6'], '7']];
// // Flat the multilevel array
// const flatArr= arr.flat(Infinity);
// console.log(flatArr) ;

// // Slicing Array --------
// courses.slice(-3)
// courses.slice(2, 5)

// let str = 'JavaScript'; 
// let upperCase = str.toUpperCase(); 
// let lowerCase = str.toLowerCase(); 
// console.log(upperCase); 
// console.log(lowerCase);

// let str = 'Learn JavaScript at GfG'; 
// let searchStr = str.indexOf('JavaScript'); 
// console.log(searchStr);

// // binary numbers
// let x = 0b11; 
// let y = 0B0111;
// console.log(x);
// console.log(y);

// JavaScript Map
// JavaScript map is a collection of elements where each element is stored as a Key, value pair. 
// Map objects can hold both objects and primitive values as either key or value.
// let map1 = new Map([
//     [1 , 10], [2 , 20] ,
//     [3, 30],[4, 40]
// ]);
// console.log(map1);

// const prices = new Map([   
//     ["Laptop", 1000],
//     ["Smartphone", 800],
//     ["Tablet", 400] 
// ]) ;



























































































































































































































































































































































































































































