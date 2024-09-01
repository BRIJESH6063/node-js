

/*

function changeColor(newColor) {
  const elem = document.getElementById("para");
  elem.style.color = newColor;
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("Document Content Loaded Successfully!!..") ;
  
  
  const mc = document.getElementById("para")
  mc.innerHTML = "Chal Teri Maki Chut!!.." ;

}) ;




--- Debouncing in Javascript
is a technique where you delay the execution of a function until after a certain amount of time has passed.
is commonly used to enhance browser performance 
it is mostly used in frequently used functions such as scroll event, resize event, search event etc.




let counter = 1 ;

function getData() {
  console.log("Function called!.." + (counter++)) ;
}

function myDebounce(callback, delay) {
  let timer ;
  return function() {
    if(timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=> {
      callback() ;
    }, delay) ;
  }
}

const myFun = myDebounce(getData, 1000) ;



--- Throtling in Javascript
is similar technique to debouncing but instead of delaying the execution it limits the rate at which a function is called
is used in mouse move events
it may be called repeatedly but the attactch function will be executed only once in an event time


let counter = 1 ;

function provideData() {
  const button = document.getElementById("btn") ;
  button.disabled = false ;
  console.log("Function called!.." + (counter++)) ;
}


const myThrotle = () => {
  return () => {
    if(timer) {

    }
  }
}



-- SET INTERVAL 
setInterval(callback, interval)
setInterval(()=> {
  console.log("setInterval function called") ;
}, 1000) ;


*/


const myVar = setInterval(()=> {
  console.log("setInterval function called") ;
}, 1000) ;

const stopInterval = () => {
  clearInterval(myVar) ;
}


const startInterval = () => {
  
}















































