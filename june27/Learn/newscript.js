/*

<!-- <h1 id="head">Heading</h1>
<button id="start">Click Me</button> -->

<h1 id="id1" class="heading">Welcome to JavaScript</h1>
<!-- <div style="height: 200px; width: 200px; background-color: orange;"></div> -->
<!-- returns an array of h1 HTML location -->


<section style="height: 200px; width: 200px; background-color: yellow;"></section>
<main style="height: 200px; width: 200px; background-color: yellow;"></main>

document.addEventListener("DOMContentLoaded", () => {

  // let head = document.getElementById("head") ;
  // head.innerHTML = "WTF" ;
  // console.log(head)
  const event = "click" ;
  const callback_fun = () => {
    setTimeout(() => {
      console.log("button event callback function called!")
      document.body.style.backgroundColor="Grey" ;
    }, 2000) ;
  }
  const button = document.getElementById("start") ;
  button.addEventListener("click", callback_fun) ;



})



*/



// document.addEventListener("DOMContentLoaded", () => {
//   const loc = document.querySelector("loc") ;

//   const showPosition = (position) => {
//     loc.innerHTML = "Latitude: " + position.coords.latitude + 
//     "<br>Longitude: " + position.coords.longitude;
//   }

//   const getLocation = () => {
//     try {
//       navigator.geolocation.getCurrentPosition(showPosition) ;
//     } catch(err) {
//       loc.innerHTML = err ;
//     }
//   }

// }) ;













































































