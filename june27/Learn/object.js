/*
Object Creation --
5 ways of Object Creation..


Object.keys    -- array of keys
Objec.values   -- array of values
Object.entries -- array of key, value pair

Object.freeze
Object.seal    -- only update possible

let obj = {
  name: "Tinku"
}
Object.freeze(obj) ;
console.log(Object.isFrozen(obj)) ; // True
Object.seal(obj) ;
console.log(Object.isSealed(obj)) ; // True

delete obj ;
console.log(obj) ; 
-- still obj is alive

## CREATING OBJECT USING VARIABLE

let name = "Tinku"
let phone = 8412372636 ;
let add = "Noida" 

let person = {
  name: name,
  phone: phone,
  address: add
}
------   OR    ----------
let person = {
  name, phone, add
}
console.log(person) ;



OBJ ASSIGNMENT --- SHALLOW COPY
let obj1 = {
  name: "Tinku",
  add: "Noida"
}

let obj2 = obj1 ;
-- shallow copy of obj1 is obj2
-- obj2 gets the reference of obj1
obj2.phone = 654656237 ;
console.log(obj2) ;
console.log(obj1) ;


## DEEP COPY -- variable 
let x = 3412 ;
let y = x ;
console.log(x + "  :  " + y ) ;
x = 1000 ;
console.log(x + "  :  " + y ) ;

### Multiple ways to achieve DEEP COPY ---
## 1. just create seprate objects with same key:value pair..
let obj1 = {
  name: "Tinku",
  add: "Noida"
}

let obj2 = {
  name: "Tinku",
  add: "Noida"
}

## 2. copy each key, value entries manually using loop
let obj = {
  name: "Tinku",
  add: "Noida"
}
let obj2 = {}
for(key in obj) {
  obj2[key] = obj[key] ;
}
console.log(obj2) ;



### 3. using PARSE and STRINGIFY json methods..
let obj = {
  name: "Tinku",
  add: "Noida"
}

let jsonObj = JSON.stringify(obj) ;
console.log(jsonObj) ;
let copy = JSON.parse(jsonObj) ;
copy.phone = 987654159 ;
console.log("ORIGINAL: ", obj)
console.log("COPY OBJECT: ", copy)


let a = 10 ;
function test() {
  console.log(this.a) ;
  // unavailable in current scope.
  // 'this' behave as object
}

test() ;



let obj = {
  a: 10, 
  test: () => {
    console.log(this.a) ;
    // undefined 
  }
}


var a = 10 ;
let obj = {
  test: ()=> {
    console.log(this.a) ;
    // this keyword in arrow function always point toward window object
    console.log(this) ;
  }
}

obj.test() ;

-------------
let obj = {
  a: 10,
  test: function () {
    console.log(this.a) ;
    // 10 -- bcoz not an arrow function..
  }
}

obj.test() ;


#### IMPORTANT --
1. THIS KEYWORD IN ARROW FUNCTION WILL ALWAYS POINT TOWARD WINDOW OBJECT.. 
2. ----------   IN GLOBAL SCOPE -- --- --- 
3. This keyword will point toward the current object within non-arrow function.



this keyword is useless with arrow function..

console.log(this) // window..

var a = "variable declared with var keyword" ;
let fun = () => {
  console.log(a)
  console.log(this.a)
  console.log(window.a) ;
}

fun() ;

### This keyword in object's non arrow function
let obj = {
  a: 10,
  test: function() {
    console.log(this) 
    // -- current object reference
    console.log(this.a) ;
  }
}

obj.test() ;






let obj = {
  name: "Tinku",
  age: 22,
  add: "Noida"
}


function info() {
  console.log(this)
}

info.call(obj) ;






let obj = {
  name: "Tinku",
  age: 22, 
  add: "Noida"
}

function info(a, b) {
  console.log(this)
  console.log(a+b) ;

}

### CALL, APPLY, BIND
info.call(obj, 1, 5) ;
info.apply(obj, [12, 25]) ;

let obj = {
  name: "Tinku", 
  age: 22,
  add: "Noida"
}

function info(a, b) {
  console.log(this.name)
  console.log(a+b)
}

console.log( info.bind(obj) ) ;
 -- returns the function[info] reference
let bindFun = info.bind(obj) ;
bindFun(12, 34) ;
 -- returned function call 








------- Multiple object as argument in fun.call() -------

let obj = {
  name: "Tinku", 
  age: 22,
  add: "Noida"
}

let person = {
  name: "Rahul",
  age: 22,
  add: "Noida"
}

function info() {
  console.log(this) ;
  console.log(person) ;
}

info.call(obj, person) ;
-- first obj goes to --> this, 
-- other can be accessed by object name














### ARRAYS ---
contiguous block of memory that may contain any js entity

### create array using Array() constructor
let nums = new Array([12, 3, 2, 321, 321, 234, 654, 324])

1. ## remove the last element
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums)
nums.pop() ;

console.log(nums) ;

2. ## Unshift -- add item at first index
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
nums.unshift(1000) ;
console.log(nums) ;
console.log(nums.unshift(1000)) 
-- returns final length


3. ## Shift -- remove item from the first index
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums) ;
nums.shift() ;
console.log(nums) ;
-- remove item from the first index


4. ## arr.indexOf --
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums.indexOf(321)) ;
-- index of first time occuring of item.


5. ## arr.includes(elm) -- returns bool to signify presence
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums.includes(654)) ;
-- op: true




5. ## arr.slice(start:num, end:num) 
-- makes slice without affecting original array
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
let small_nums = nums.slice(1, 4) ;
console.log(small_nums) ; 
-- op:  3 4 321 -- 4|end not included
console.log(nums) ;

let nums = [12, 3, 2, 321, 321, 234, 654, 324]
let slice_nums = nums.slice(6, 20) ;
console.log(slice_nums) ;
-- op: [654, 324], doesnt return undefined for extra index




6. ## Splice -- slice with affecting original array
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums)
let splice_nums = nums.splice(3, 6) ;
-- from index 3 to next 6 items 
console.log(splice_nums)
console.log(nums)
-- also affects the original array

--- output 
(8) [12, 3, 2, 321, 321, 234, 654, 324]
(5) [321, 321, 234, 654, 324]
(3) [12, 3, 2]




7. ## Invalid Indexing
nums[invalid_index] -- op: undefined


8. ## arr.reverse() -- affects the original array
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
console.log(nums)
let reversed_nums = nums.reverse() ;
console.log(reversed_nums)
console.log(nums)



9: ## Converting Object into Arrays/Matrix
let obj = {
  name: "Tinku",
  add: "Noida",
  age: 24
}
let entries = Object.entries(obj) ;
console.log(entries) ;

-- output __ MATRIX
(3) [Array(2), Array(2), Array(2)]
(2) ['name', 'Tinku']
(2) ['add', 'Noida']
(2) ['age', 24]


10: ## Converting Matrix into Object

let obj = {
  name: "Tinku",
  add: "Noida",
  age: 24
}
let entries = Object.entries(obj) ;
console.log(entries) ;

let mat_object = Object.fromEntries(entries) ;
console.log(mat_object) ;


: output --
{name: 'Tinku', add: 'Noida', age: 24}


let arr = [
  ["name", "Tinku"],
  ["add", "Noida"],
  ["age", 24]
]

let obj = Object.fromEntries(arr) ;
console.log(obj) ;
-- op: {name: 'Tinku', add: 'Noida', age: 24}

-- ["name", "Tinku", "Bhaiya"],
   doesn't give error, only considers first value
   {name: "Tinku"}




11: ## Array sorting

let nums = [12, 3, 2, 321, 321, 234, 654, 324]
let arr = nums.sort() ;
console.log(arr) ;
console.log(nums) ;

-- op: 
(8) [12, 2, 234, 3, 321, 321, 324, 654]
(8) [12, 2, 234, 3, 321, 321, 324, 654]

Note -- 
useless to sort for multidigit numbers.. 



### True Sorting ---  ASCENDING ORDER
let nums = [12, 3, 2, 321, 321, 234, 654, 324]
## sort -- higher order function, need a callback function
let arr = nums.sort((a, b) => {
  return a - b ;
})

console.log(arr) ;
console.log(nums) ;


-- output 
(8) [2, 3, 12, 234, 321, 321, 324, 654]
(8) [2, 3, 12, 234, 321, 321, 324, 654]



### Reverse Sorting ---  DESCENDING ORDER

let nums = [12, 3, 2, 321, 321, 234, 654, 324]
let arr = nums.sort((a, b) => {
  return b-a ;
})

console.log(arr) ;
console.log(nums) ;

-- output
(8) [654, 324, 321, 321, 234, 12, 3, 2]
(8) [654, 324, 321, 321, 234, 12, 3, 2]






12: ### For-Each method
-- also a higher order function, needs callback function

let nums = [12, 3, 2, 321, 579, 234, 654, 324]
nums.forEach((val, index, nums) => {
  console.log(index + " : " + val, nums) ;
})

let nums = [12, 3, 2, 321, 579, 234, 654, 324]
let ret = nums.forEach((val, index, nums) => {
  val += 100 ;
})

console.log(ret)   -- undefined
console.log(nums)  -- original array un-affected





### TASK ---


let itemSum = 0 ;
let itemMul = 1 ;

let nums = [10, 20, 30, 40, 50] ;

-- Question 1 --
nums.forEach((val) => {
  itemSum += val ;
})
console.log(itemSum) ;

-- Question 2 -- 
let nums2 = []
nums.forEach((val) => {
  nums2.push(val*2) ;
})
console.log(nums2) ;

let new_arr = [] ;
nums.forEach((val) => {
  new_arr.push(val) ;
})
console.log("nums    : ", nums)
console.log("new_arr : ", new_arr) ;

let arr = [12, 23, 33, 40, 18] ;
let even_arr = arr.filter((val) => {
  return (val & 1) === 0 ;
})

console.log(even_arr) ;


## Question -- Log Object Profile..
let p_array = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 30},
  {name: "Charlie", age: 35}
]

p_array.forEach((val) => {
  console.log("name: "+val.name + "  age:  " + val.age)
})


------------------ REVISED ------------

let nums = [12, 3, 2, 321, 579, 234, 654, 324]
const indexOf30 = nums.indexOf(321) ;
const spliced = nums.splice(indexOf30, 1)
console.log(spliced)
console.log(nums)
-- removed 321


------------------ REVISED ------------


13. ### For-Of method
-- variable is item value
let nums = [12, 31, 28, 21, 57, 23, 65, 32]
for(item of nums) {
  console.log(item) ;
}
let nums = [12, 31, 28, 21, 57, 23, 65, 32]
let sum = 0 ;
for(val of nums) sum += val ;
console.log(sum)



14. ### For-In Method --
let nums = [12, 31, 28, 21, 57, 23, 65, 32]
-- variable is index
for(index in nums) {
  console.log(nums[index]) ;
}

let i ;
for(i=0; i<nums.length; i++) {
  console.log(nums[i]) ;
}


15. ### Array Map Function..
let nums = [12, 31, 28, 21, 57, 23, 65, 32]
let nums2 = nums.map((val, i, arr) => {
  return val*2 ;
})
console.log(nums) ;
console.log(nums2)

output --
(8) [12, 31, 28, 21, 57, 23, 65, 32]
(8) [24, 62, 56, 42, 114, 46, 130, 64]






#### Reduce method -----
reduce(callbackFn)
reduce(callbackFn, initialValue)

const array = [15, 16, 17, 18, 19];

function reducer(accumulator, currentValue, index) {
  const returns = accumulator + currentValue;
  console.log(
    `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
  );
  return returns;
}


-- accumulator is sum of previous elements upto index with|without default value
array.reduce(reducer);       -- without default value
console.log("------------------------------------------")
array.reduce(reducer, 10);   -- with default value






output ---

accumulator: 15, currentValue: 16, index: 1, returns: 31
object.js:596 accumulator: 31, currentValue: 17, index: 2, returns: 48
object.js:596 accumulator: 48, currentValue: 18, index: 3, returns: 66
object.js:596 accumulator: 66, currentValue: 19, index: 4, returns: 85
object.js:605 ------------------------------------------
object.js:596 accumulator: 10, currentValue: 15, index: 0, returns: 25
object.js:596 accumulator: 25, currentValue: 16, index: 1, returns: 41
object.js:596 accumulator: 41, currentValue: 17, index: 2, returns: 58
object.js:596 accumulator: 58, currentValue: 18, index: 3, returns: 76
object.js:596 accumulator: 76, currentValue: 19, index: 4, returns: 95



let nums = [12, 31, 28, 21, 57, 23, 65, 32]
console.log(nums)
console.log(nums.reduce((acc, curr, ind, nums)=> {
  return acc + curr ;
}))



reduceRight(callbackFn)
reduceRight(callbackFn, initialValue)

arr.reduceRight((accumulator, currentValue, index, array) => {
  // …
});









### Filter method --

let nums = [12, 31, 28, 21, 57, 23, 65, 32]
let new_nums = nums.filter((val) => {
  return 10 ;
  // -- 10 is truth value, hence return whole array.
})
console.log(new_nums) ;


let arr = [NaN, 10, 10, 10.0, 10n, "hello"]
let num = arr.filter((val) => {
  return (typeof val) == 'number' ;
})
console.log(num)
console.log(typeof 10n) // bigint






let name = ['T', 'i', 'n', 'k', 'u', 300]
console.log(name.toString()) T, i, n, k, u, 300
console.log(name.join("")) ; Tinku300



---- DESTRUCTURING IN JAVASCRIPT ---
extracting out value from array or object 




OBJECT DESTRUCTURING ---
let purchase = {
  item1: "Torch",
  item2: "Tiffin",
  item3: "Rope",
  item4: "Knife",
  item5: "Water bottle"
}


let {item1, item3} = purchase ;
item1 = "new_value" ;
console.log(`${item1} ${item3}`) ;
console.log(purchase) ;   -- unaffected

let picnic = {
  item1: "Torch",
  item2: "Tiffin",
  item3: "Rope",
  item4: "Knife",
  item5: "Water bottle",
  item7: () => {
    console.log("Fishing function called")
  }
}

let {item7} = picnic ;
item7() ;

ARRAY DESTRUCTURING --
let nums = [12, 31, 28, 21, 57, 23, 65, 32]
const [num1, num2, num3] = nums ;
console.log(num1, num2, num3) ;
const [a, b, ...c] = nums ;
console.log(a, b, c) ;

output ---
12 31 28
12 31 (6) [28, 21, 57, 23, 65, 32]


Mixed DESTRUCTURING ---
let arr = ["torch", "water-bottle", "knife", "blanket", {
  menu1: "roti",
  menu2: "paratha"
}]

const [a, b, c, d, {menu1, menu2}] = arr ;
console.log(a, b, c, d) ;
console.log(menu1, menu2) ;


REST and SPREAD --

let obj = {
  name: "rohit",
  age: 23 
}
console.log(...obj) ;
ERROR: -- fails at object


### REST OPERATOR ---
packing the rest element 

let arr = [10, 20, 30, 40, 50] ;
console.log(...arr) ;
const [a, b, c, d, ...e] = arr ;
-- rest stored in c
console.log(a, b, c, d, e) ;
console.log(typeof e)


let arr = [10, 20, 30, 40, 50, {
  name: "Tinku",
  age: 23
}, () => {
  console.log("Array contained function executed!")
}] ;

const [a, b, ...c] = arr ;
console.log(c[3]) ;
console.log(c[4]) ;
c[4]() ;



SPREAD OPERATOR ...


let arr = [10, 20, 30, 40, 50] ;
let nums = [94, 48, ...arr] ;
console.log(nums+"  Length: "+nums.length)

const fun1 = (a, b, c, d, e) => {
  console.log(a, b, c, d, e) ;
}
fun1(...arr) ;

-- DEEP COPY WITH SPREAD 

const arr_clone = [...arr] ;
arr_clone.push(33, 34, 56) ;
console.log(arr) ;
console.log(arr_clone) ;


REST AND SPREAD TOGATHER ---
const nums = [10, 20, 30, 40, 50] ;
const func = (...rest) => {
  console.log(rest) ;
}
func(...nums) ;



SPREAD IN OBJECT ---
let obj = {
  name: "Tinku"
}
let new_obj = {
  ...obj,
  age: 24,
  address: "Noida"
}

console.log(new_obj) ;


REST and SPREAD operators work on string
const str = "tinku" ;
console.log(...str) ;






PROTOTYPES --


.prototype    VS     .__proto__
if unable to access prototype directly, use keyword .__proto__ to directly access 
prototype
const obj = {
  name: "Tinku",
  address: "Noida",
}
const arr = [10, 20, 30]

console.log(obj) ;
console.log(arr) ;

let str = new String("Tinku") ;
console.log(str) ;
let num = new Number(34) ;
console.log(num) ;

const str_proto = String.prototype ;
console.log(str_proto) ;

const fun = () => {
  console.log("")
}
console.log(Function().prototype) ;



TO ACHIEVE INHERITANCE IN JAVASCRIPT -------------
make child object lie in prototype of parent object 
Obj1 --> prototype --> Obj2
Obj1.__proto__ = Obj2 ;


let obj1 = {
  name: "Tinku",
  age: 23
}

let obj2 = {
  address: "noida"
}

obj1.__proto__ = obj2 ;
console.log(obj1)

output --
{ name: 'Tinku', age: 23 }
age  : 23
name : "Tinku"
[[Prototype]] : Object
address : "noida"

obj1.__proto__ = obj2 ;
CHILD            PARENT







DATE | TIME and 

const findDay = (day) => {
  switch(day) {
    case 0 : return "Sunday" ; break ;
    case 1 : return "Monday" ; break ;
    case 2 : return "Tuesday" ; break ;
    case 3 : return "Wednesday" ; break ;
    case 4 : return "Thursday" ; break ;
    case 5 : return "Friday" ; break ;
    case 6 : return "Saturday" ; break ;
    
  }
}

console.log(Date.__proto__)
const date = new Date() ;
console.log(date) ;
console.log("Day    : "+date.getDay()) ;
console.log("Date   : "+date.getDate()) ;
console.log("Month  : "+date.getMonth()) ;
console.log("Year   : "+date.getFullYear())
console.log("Time   : "+date.getTime())
console.log("Time   : "+date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds()) ;
console.log(findDay(date.getDay())) ;



const day = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"] ;
console.log(day[date.getDay()]) ;





### MATH OBJECT ---
console.log(Math.floor(Math.random()*100+1)) ;

console.log(Math.ceil(-34.564))  ; -- 34
console.log(Math.floor(-34.564)) ; -- 35

finding maximum 
const arr = [10, 20, 30, 40, 50]
console.log(Math.max(...arr)) ;


-- 4 digit OTP --
const rand = Math.floor(Math.random()*10000) ;
console.log(rand <= 999 ? rand+1000 : rand) ;











#### ASYNCHRONOUS JAVASCRIPT 

setTimeout(() => {
  console.log("Kya bakchodi h??")
}, 2000) ;

setTimeout(console.log("OMG"), 3000) ;
-- doesn't work






DOM --

Selectors in javascript --
document.getElementById("") 
document.getElementByClassName("") ;
document.getElementByTagName("") ;
document.queryselector("") ;
document.querySelectorAll() ;


document.addEventListener("DOMContentLoaded", ()=> {
  // let heading = document.getElementsByTagName("h1") ;
  // console.log(heading[0]) ;

  let myDiv = document.querySelector("div") ;
  let myDivAll = document.querySelectorAll("div")

  const heading = document.createElement("h1") ;
  heading.innerHTML = "I'm Inner HTML" ;
  console.log(heading) ;

  myDiv.append(heading) ;

  const section = document.querySelector("section") ;
  const main = document.querySelector("main") ;
  const para = document.createElement("p") ;
  para.innerHTML = "I am the created Paragraph." ;

  section.append(para) ;
  main.append(para) ;

  let myDiv = document.querySelector("div") ;
  
  myDiv.innerHTML = `
    <h1 id="heading">This is my Heading</h1>
    <p>This is my Paragraph</p>
  ` ;






}) ;






 

*/




















































































































































