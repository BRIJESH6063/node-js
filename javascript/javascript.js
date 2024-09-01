// // javascript is interpreted language(no intermediate file)
// // it is also object oriented
// // case sensitive language
// // internal and external implementation  

// // 1. Variables in JAVASCRIPT
// var a ;
// console.log(a) ; // undefined
// var a = "brijesh_kumar";
// console.log(a) ; // brijesh_kumar
// var test = 12;
// function foo(){
//     var test = 100;
//     console.log(test);
// }
// foo();
// console.log(test);
// // console.log(typeof(Intl))
// if(3>1) console.log("aiusdhsf") ;
// else console.log("cuysdcsdc") ;

// // comparison operator
// // == vs === (also checks data type)
// a = 42342 
// b = "42342"
// if(a == b) console.log("Fine with == operator")
// else console.log("Not Fine with == operator")
// if(a === b) console.log("Fine with === operator")
// else console.log("Not Fine with === operator")
// if(a !== b) console.log("Fine with !== operator")
// else console.log("Not Fine with !== operator")
// if(a != b) console.log("Fine with != operator")
// else console.log("Not Fine with != operator")

// Fine with == operator
// Not Fine with === operator
// Fine with !== operator
// Not Fine with != operator

// console.log(typeof(1+"234")) // string

// // JavaScript Data Types
// // JavaScript provides different datatypes to hold different values on variables. 
// // JavaScript is a dynamic programming language, which means do not need to specify the type 
// // of variable. There are two types of data types in JavaScript. 
// //    1. Primitive data type
// //    2. Non-primitive (reference) data type

// let student = {
//     fname: "Johnny",
//     lname: "Diaz",
//     age: 35,
//     mark: "blueEYE"
// };
// console.log(student.fname)

// // JAVASCRIPT LET
// // JavaScript let keyword is used to declare variables that are block-scoped. 
// // Variables defined with the let keyword cannot be redeclared in the same scope and must be 
// // declared before use.

// {
//     let x = 342875 ;
//     console.log(x) ;
// }

// // JavaScript CONST
// // The JavaScript const keyword declares variables that cannot be reassigned, preventing their modification.
// // Cannot be reassigned.
// // It has Block Scope
// // It can be assigned to the variable on the declaration line.
// // It’s a Primitive value.
// // The property of a const object can be changed but it cannot be changed to a reference to the new object
// // The values inside the const array can be changed, it can add new items to const arrays but it cannot reference a new array.
// // Re-declaring of a const variable inside different block scopes is allowed.
// // Cannot be Hoisted.
// // Creates only read-only references to value.

// let x = 243 ;
// {
//     console.log(x) ;
//     const x = 456 ;
//     x+= 34 ;
//     console.log(x) ;
// }

// const arr1 = ["pankaj", "sumit", "chandan", "ajay"];
// console.log(arr1.toString())
// arr1[2] = "Narayan"; 
// console.log(arr1.toString()) ;

// // Const in Objects
// // It describes that the object properties can be modified only reference to the object
// // cannot be changed. 

// // JavaScript VAR 
// // The JavaScript var statement declares variables with function scope or globally. Before ES6, 
// // var was the sole keyword for variable declaration, without block scope, unlike let and const.

// console.log(test) ;
// var test = 23478 ;

// var test = 12;
// function foo(){
//     var test = 100;
//     console.log(test);
// }
// foo();
// console.log(test);

// 'use strict';
// var test = 12;
// delete(test);
// console.log(test);
// // // error
// // Explanation: Whenever a variable is declared using var in global scope it cannot be configured. 
// // Hence it cannot be deleted using the delete keyword. and an error is thrown

// // JavaScript BigInt Operators
// // JavaScript BigInt operators support arithmetic operations on BigInt data type, including addition,
// // subtraction, multiplication, division, and exponentiation. Most operators that can be used between 
// // numbers can be used between BigInt values as well

// function fibonacci(n) {
//     let ans = [0n, 1n] ;
//     console.log(ans)
//     for(let i=2; i<=n; i++) {
//         ans[i] = BigInt(ans[i-1]) + BigInt(ans[i-2]) ;
//     }
//     return ans ;
// }
// console.log(fibonacci(10000));

// console.log(typeof(null))
// console.log(typeof(undefined))
// console.log(Math.LN10); 
// console.log(Infinity);
// console.log(typeof Math.LN10 === 'number'); 
// console.log(typeof Infinity === 'number'); 



// console.log(typeof function () { } === 'function'); 
// console.log(typeof class C { } === 'function'); 
// console.log(typeof Math.sin === 'function');


// let emp = {  
//     firstName: "Raj",  
//     lastName: "Kumar",  
//     salary: 40000  
// }  
// console.log(emp) ;
// console.log(delete emp.salary) ; 
// console.log(emp) ;

// let arr = [1, 2, 3] 
// console.log(delete arr[0]); //true 
// console.log(arr) ;

// var globalVar = 234 ;
// let localVar = 346 ;
// console.log(delete globalVar); // true, deletion successful 
// console.log(delete localVar);  // false, deletion fails 
// console.log(globalVar) ;       // undefined 
// console.log(localVar) ;        // 20, deletion failed 
// delete localVar returns false because let variables cannot be deleted.
// globalVar becomes undefined after deletion, but localVar remains unchanged.

// function Func1() { 
//     console.log('one'); 
//     return 'one'; 
// } 
// function Func2() { 
//     console.log('two'); 
//     return 'two'; 
// } 
// function Func3() { 
//     console.log('three'); 
//     return 'three'; 
// } 
// let x = (Func1(), Func2(), Func3()); 
// console.log(x)
// console.log(typeof x);

// const array = ["geeksforgeeks", "geeksfor", "geeks", "geeks1"]
// console.log(0 in array) // 1 index
// console.log(7 in array) // 7 index
// console.log('geeksforgeeks' in array)
// console.log("length" in array)
// for(let x in array) {
//     console.log(array[x])
// }
// console.log(array.length) // length=4

// const object = {
//     val1 : "GeeksForGeeks",
//     val2 : "Javascript",
//     val3 : "operator",
//     val4 : "in"
// } ;
// console.log(object)
// console.log('val1' in object) ;
// delete object.val1 ;
// console.log('val1' in object)
// if(object.val1 in object === false) object.val1 = "GEEKSFORGEEKS" ;
// console.log(object)
// console.log(false || true && true) // true
// // --------------------------  LOOPS  --------------------------
// let x = 0 ;
// while(x < array.length) {
//     console.log(array[x] ) ;
//     x++ ;
// }
// // -------------------------------  for - of loop
// for(let x of array) {
//     console.log(x) ;
// }
// for (let i = 0; i < 11; i++) { 
//     if (i == 6) break ;      
//     console.log(i); 
// }
// // -------------------------------  for - each loop
// array.forEach(val => console.log(val))
// // -------------------------------  JavaScript MAP LOOP
// const arr = [1, 2, 3];
// const newArr = arr.map(val => val * 2);
// console.log(newArr);
// for(const x in object) {
//     console.log(x, " : ", object[x] ) ;
// }
// for(const char of "whatthefuckisgoingonhere!") {
//     console.log(char) ;
// }
// const map = new Map([
//     ['key1', 'value1'],
//     ['key2', 'value2'],
//     ['key3', 'value3']
// ]) ;
// for (const [key, value] of map) {
//     console.log(`Key: ${key}, Value: ${value}`) ;
// }
// // JavaScript Errors Throw and Try to Catch
// try {
//     dadalert("Welcome Fellow Geek!") ;
// } catch (err) {
//     console.log(err)
// } finally {
//     console.log("finally got called!")
// }
// console.log("the error handled successfully!")
// const obj = new Object() ;
// obj.foo = 544 ;
// console.log(obj) ;
// let school = {
//     name: "Vivekananda School",
//     location: "Delhi",
//     established: "1971",
//     displayInfo: function() {
//         console.log(`${school.name} was established in ${school.established} at ${school.location}`) ;
//     }
// }
// school.displayInfo(); 
// // JAVASCRIPT OBJECT PROPERTIES
// // The property names can be strings or numbers. In case the property names are numbers, 
// // they must be accessed using the “bracket notation” like this.
// let school = {
//     name: "Vivekananda School", 
//     location: "Delhi",
//     20: 1000,
//     displayInfo: function () {
//         console.log(`The value of the key 20 is ${school[20]}`)
//     }
// }
// console.log(school['name']);
// console.log(school[20]); 
// school.displayInfo(); 
// school_name = "Vivekananda School" ;
// arr = school_name.split(' ') ;
// console.log(arr)
// // Inherited Properties -------------------------------------
// // Inherited properties of an object are those properties that have been inherited from the object’s 
// // prototype, as opposed to being defined for the object itself, which is known as the object’s Own property. 
// // To verify if a property is an object’s Own property, we can use the hasOwnProperty method.
// const obj1 = new Object() ;
// obj1.property1 = 3578 ;
// console.log(obj1.hasOwnProperty('property1'))

// let person = {
//     gender: "male",
// }
// let person1 = Object.create(person) ;
// // console.log(person1['gender'])
// person1.name = "Adam";
// person1.age = 45;
// person1.nationality = "Australian";

// for(let key in person1) {
//     console.log(`${key} : ${person1[key]}`) ;
// }































































































































































































































































































































