/*

let a = (fun) => {
    fun() ;
}
a(anyfun()) ;
// a --> higher order function
// anyfun --> callback function

let higherOrderFun = (callback) => {
    console.log("Higher Order Function called!")
    callback() ;
}
let callback = () => {
    console.log("Callback function called!") ;
}
higherOrderFun(callback) ;

Functional Programming ====> HigherOrderFunction + CallbackFunction






let operation = (task, n1, n2) => {
    task(n1, n2) ;
}
let add = (num1, num2) => {
    console.log(num1+ num2) ;
}
operation(add, 324, 54) ;
let operations = (task, n1, n2) => {
    task(n1, n2) ;
}
let minus = (num1, num2) => {
    console.log(num1- num2) ;
}
operation(minus, 324, 54) ;
let operaten = (task, n1, n2) => {
    task(n1, n2) ;
}
let multiply = (num1, num2) => {
    console.log(num1* num2) ;
}
operation(multiply, 324, 54) ;

let greetings =(person,typeOfGreeting)=> {
    person(typeOfGreeting)
}
let chacha = (typeOfGreeting) => {
    console.log(`hello with my ${typeOfGreeting}greeting`)
}
greetings(chacha,"Namaste")

*/

/*

// ANONYMOUS FUNCTION (function without name)
let demo = function () { 
    // function as an expression. [var = fun]
    // functional expression
    console.log("Anonymous stored function called!") ;
}
demo()
// Anonymous | function as expression | Arrow function
let fun = () => {

}


FUNCTIONS IN JAVASCRIPT
1. Simple function with function keyword
2. Arrow function
3. Higher Order function
4. Callback function  
5. Anonymous function
6. Named Function
7. Function as an expression
8. Immediate invoke function

// Immediate invoke function
(() => {
    console.log("Immediate invoke function called!")
})()

// call stack
console.log("x")
let fun = () => {
    console.log("y") ;
}
console.log("z") ;
fun()

// primitive variables declared with var keyword stored in heap area 
// variable like array and object stored 
// call stack only contains function

console.log("1") ;
let fun = (a) => {
    console.log(a)
}
console.log("2") ;
fun("xyz") ;
console.log("3") ;

var a = 53 ;
console.log(window) ;
this = window
console.log(this) ;

Hoisting | Tremporal dead zone 
configuring all declaration before variable execution is called Hoisting 
Time lag bw declaration and value assign is called Temporal dead zone

------------
console.log(b) ; // error "call before initialization"
let a = 10 ;
let b ;
const c = 20 ;
console.log(b) ;



--------------
console.log(b) ; // undefined
let a = 10 ;
var b ;
const c = 20 ;
console.log(b) ;
b is hoisted but not present in temporal dead zone, it is in window object
let and const do not fall in window object..

console.log(b) ; // undefined
var b = 23 ;
console.log(b) ;

console.log(b) ; // error
b = 23 ;
console.log(b) ;

## declared(let) but not assigned falls in temporal dead zone hence gives error when clg(b)
temporal dead zone -- time span bw declaration and initialization
hoisting -- phenomenon of sending all the declaration to the top


### Difference between Let, var, const 

variable scope --
let a = 10 ;
if(true) {
    console.log(a) ;
    // local scope uses global scoped variable
}

SCOPES ----
1. Global Scope
2. Local Scope

let a = "RRR" ;
if(true) {
    console.log(a) ;
    let b = "Kantara" ;
    const c = "Munjya" ;
    var d = "Kalki" ; 
    // 'var' can be accessed outside scope. GLOBAL
}

console.log(a) ;
console.log(b) ; // error
console.log(d) ;

let a = "Bahubali" ;
let func = () => {
    let b = "Pushpa" ;
    const c = "Mirzapur" ;
    var d = "Panchayat" ;
}

func() ;
console.log(d) ;

## 'var' variable doesn't work for function
## 'var' variable declared in function scope are not global

let fun = () => {
    let fun1 = () => {
        console.log("Hellllllooooo..")
    }
    fun1() ; // call successful: within the scope
}

fun() ;
fun1() ; // ERROR: cannot be called bcoz of scope

LET/CONST --> Block scoped
VAR       --> Function scope



let a = () => {
    console.log("a block executed!") ;
    let b = () => {
        console.log("b block executed!") ;
        let c = () => {
            console.log("c block executed!") ;
        }
        c() ;
    }
    b() ;

}

a() ;


### JAVASCRIPT CURRYING

let a = () => {
    console.log("a block executed!") ;
    let b = () => {
        console.log("b block executed!") ;
        let c = () => {
            console.log("c block executed!") ;
        }
        return c ;
    }
    return b ;
}

a()()() ;


parametrized: 
let a = () => {
    console.log("a block executed!") ;
    let b = () => {
        console.log("b block executed!") ;
        let c = (value) => {
            console.log("c block executed! parameter: "+value) ;
        }
        return c ;
    }
    return b ;

}

a()()(234) ;




#### CLOSURE
ability of javascript engine to store required variable in nested function.
### LEXICAL SCOPING -- 
Finding variable in another function scope or parent function scope is called Lexical scoping

let a = () => {
    let val = 10 ; 
    let val1 = 20 ;
    let val2 = 30 ;
    // lies in parent function scope of b i.e. 'a'
    let b = () => {
        console.log(val) ;
    }
    b() ;
}

a() ;

closure of a : 
'a' functional scope contains val = 10 
closure -- only those that are searched by other scopes..

let a = () => {
    let val = 10 ;
    let b = () => {
        console.log(val) ;
    }
    return b ;
}

a()() ;

------------------
let minku = () => {
    let bike = "Splendor" ;
    let mobile = "Iphone" ;
    let tinku = () => {
        console.log("The bike is : ", bike) ;
    }
    return tinku ;
}

minku()() ; // working

----------------------->
let tinkuFunReference = minku() ;
###  minku call stack removed after function call goes over returning tinku() reference..

tinkuFunReference() ; // working 
## even minku removed from call stack the closure of minku is reserved in closure space hence value can be 
## executed by external call of tinku i.e.  tinkuFunReference() 
## op -- The bike is :  Splendor

immediate invoke function 
(() => {
    console.log("Anonymous Function.")
})() ;


### CONDITIONAL STATEMENT ---

let num = prompt("Enter a number!") ;
## based on operation javascript engine decide to concatenate or add
if(num & 1) {
    console.log(`${num} is an odd number`) ;
} else {
    console.log(`${num} is an even number`) ;
}

console.log("10"+10) ;  // 1010 (concat)
console.log("10"-10) ;  // 0    
console.log("10"*10) ;  // 100  
console.log("10"/10) ;  // 1    
# not recommended.. 

## Learn typescript, considers and solves issue.


### Ternary Operator
let username = "brijesh367" ;
let password = "qwr4jjfjfj" ;
let user = prompt("Enter the username!") ;
let pass = prompt("Enter the password") ;
console.log(((user == username && pass == password) ? "Logged In Successfully!" 
    : "Wrong Credentials Inserted!")) ;

let isHungry = true ;
let isFishavailable = true ;

isHungry ? (console.log("Cat is Hungry!") || (isFishavailable) ? 
console.log("Cat will eat the Fish!"): console.log("Cat will drink the milk!"))
: console.log("Cat is not Hungry!") ; 

## here '||' operator will let clg


let takla = prompt("Enter your name!") ;
switch(takla) {
    case "Sushant": console.log("4827582357") ;
                    break ;
    case "Deepak" : console.log("4827582357") ;
                    break ;
    case "Deepak" : console.log("4827582357") ;
                    break ;
    default : console.log("Chal be takle tera nam nhi h idhar!") ;
}



*/

 

















































































































