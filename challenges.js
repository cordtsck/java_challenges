//spam:challenge1/7
// function spam(){
//         let h = document.createElement("p");
//         let t = document.createTextNode("Huzzah");
//         h.appendChild(t);
//         document.body.appendChild(h);

//         let x = document.createElement("Button")
//         let j = document.createTextNode("remove")
//         x.appendChild(j);
//         document.body.appendChild(x);
        
//         x.onclick=function(){
//           x.hidden = true
//           h.hidden = true
//         }
      
              
// }
//  document.addEventListener("DOMContentLoaded", ready);

// card:challenge2
// function ready(){
//     console.log("Good");
//     up.onclick = function(){
//         this.classList.add("hide");
//         down.classList.remove("hide");
//     }
//     down.onclick = function(){
//       this.classList.add("hide");
//       up.classList.remove("hide");
//     }
//   }
//  document.addEventListener("DOMContentLoaded", ready);

//roygbiv:challenge3
// list = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]

// let i= -1
// let x= 1

// function ready (){
//     setInterval (() => {
//         i = i + x
//         if (i == 6) { 
//             x = -1
//         }
//         if (i == 0) {
//             x = 1
//         }
//         console.log(list[i])
//         document.body.style.background = list[i];
//     }, 500)
// }

// document.addEventListener("DOMContentLoaded", ready)


// //word-study:challenge4
// let dog = document.getElementById("dog");
//   dog.addEventListener("mouseover", function(over) { 
//       dog.innerHTML = "A mans Best friend";
//       //dog.append(dog)
//     over.target.style.color = "orange";
//     // reset after a short delay
//     setTimeout(function() {
//         dog.innerHTML = "Dog";
//         dog.append('')
//       over.target.style.color = "";
//     }, 500);
//   }, false);
// let cat = document.getElementById("cat");
//   cat.addEventListener("mouseover", function(over) { 
//       cat.innerHTML = "A gross animal";
//     over.target.style.color = "pink";
//     // reset after a short delay
//     setTimeout(function() {
//         cat.innerHTML = "Cat";
//         cat.append('')
//       over.target.style.color = "";
//     }, 500);
//   }, false);
//   let fish = document.getElementById("fish");
//   fish.addEventListener("mouseover", function(over) { 
//       fish.innerHTML = "A easy pet to take care of";
//     over.target.style.color = "green";
//     // reset after a short delay
//     setTimeout(function() {
//         fish.innerHTML = "Fish";
//         fish.append('')
//       over.target.style.color = "";
//     }, 500);
//   }, false);
//  document.addEventListener("DOMContentLoaded", ready);

// password:challenge5
// var myInput = document.getElementById("psw");
// var letter = document.getElementById("letter");
// var capital = document.getElementById("capital");
// var number = document.getElementById("number");
// var length = document.getElementById("length");
// var symbol = document.getElementById("symbol");
// myInput.onfocus = function() {
//   document.getElementById("message").style.display = "block";
// }
// myInput.onblur = function() {
//   document.getElementById("message").style.display = "none";
// }
// myInput.onkeyup = function() {
//   //  lowercase letters
//   var lowerCaseLetters = /[a-z]/;
//   if(myInput.value.match(lowerCaseLetters)) {  
//     letter.classList.remove("invalid");
//     letter.classList.add("valid");
//   } else {
//     letter.classList.remove("valid");
//     letter.classList.add("invalid");
//   }
//   // capital letters
//   var upperCaseLetters = /[A-Z]/;
//   if(myInput.value.match(upperCaseLetters)) {  
//     capital.classList.remove("invalid");
//     capital.classList.add("valid");
//   } else {
//     capital.classList.remove("valid");
//     capital.classList.add("invalid");
//   }
//   // numbers
//   var numbers = /[0-9]/;
//   if(myInput.value.match(numbers)) {  
//     number.classList.remove("invalid");
//     number.classList.add("valid");
//   } else {
//     number.classList.remove("valid");
//     number.classList.add("invalid");
//   }
//   //  length
//   if(myInput.value.length >= 5) {
//     length.classList.remove("invalid");
//     length.classList.add("valid");
//   } else {
//     length.classList.remove("valid");
//     length.classList.add("invalid");
//   }
//   var symbols = !/[0-9]/ && !/[A-Z]/ && !/[a-z]/;
//   if(myInput.value.match(symbols)) {  
//       symbol.classList.remove("invalid");
//       symbol.classList.add("valid");
//   } else {
//     symbol.classList.remove("valid");
//     symbol.classList.add("invalid");
//   }
// }
// document.addEventListener("DOMContentLoaded", ready);

// setTimeout(() => {
//     cs.append("Later");
// }, 2000);

// let x = 0;
// setInterval(() => {
//     empty.innerHTML = x + "Secounds";
//     x++;
//     if (x > 5) {
//         cs.innerHTML = "Done Counting";
//     }else{
//         cs.innerHTML = "Not Done Counting";
//     }

// }, 1000);

//tea-timer:challenge6

