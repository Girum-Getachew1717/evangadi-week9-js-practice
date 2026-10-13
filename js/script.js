//function and argument examples
// function laptopPriceCalculator (laptopName, price, discount){
//     let tax = (price * 6)/100;
//     let total = price - discount + tax;
//     console.log(laptopName + "laptop price is $" + total);
// }

// laptopPriceCalculator("HP", 1000, 50);
// laptopPriceCalculator("Dell", 1200, 100);

// function that return a value examples

// function adder(x, y){
//     return x+y;
// }

// console.log(adder(5, 7));

// function average(num1, num2){
//     let result = adder(num1, num2)/2;

//     return result;
// }

// console.log(average(100,20));
// console.log(average(80,1000));

// variable scoping (var let and const)
//1 function scope
// function cars(){
//   var x = "toyota"; //has function scope
//   let y = "honda"; //has function scope
//   const z = "tesla"; //has function scope

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }

// cars();

// //2 global scope

// var a = "Abebe";//global scope
// let b = "bob";//global scope
// let c= "cat";//global scope

// console.log(a);
// console.log(b);
// console.log(c);

// function myName() {
//     w = "Almaz"; //global scope
//     console.log(w);
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// myName();
//  console.log(w);

//  //3 block scope

//  if (true){
//     const message = "hello";//block scope
//     let newmessage = "hi";//block scope
//     var othermessage ="selam";// not block

//     console.log(message);
//     console.log(newmessage);
//     console.log(othermessage);

//  }

// console.log(message);
// console.log(newmessage);
// console.log(othermessage);




//arrow function
// const addTwoNums = (num1, num2) => {
//   return num1 + num2;
// };

// console.log(addTwoNums(10, 20));



// conditional statements
//syntax
// if(condition){
//     write the code you want to be excuted
// }
//examples If statement
// function checkPassword(pass1, pass2) {
//   if (pass1 === pass2) {
//     console.log("password confirmed");
//   }

//   if (pass1 !== pass2) {
//     console.log("wrong password");
//   }
// }

// checkPassword("abcd", "abcd");
// checkPassword("word", "wold");



//examples for if... else statement
// function checkPassword(pass1, pass2) {
//   if (pass1 === pass2) {
//     console.log("password confirmed");
//   } else {
//     console.log("wrong password");
//   }
// }

// checkPassword("abcd", "abcd");
// checkPassword("word", "wold");


//example 2
// function gradingCalc(g){
//     if (g > 80 && g < 90 ){
//         console.log("B");
//     } else if (g > 90){
//         console.log("A");
//     } else if (g > 70 ){
//         console.log("c");
//     }else if ( g > 60){
//         console.log("d");
//     }else{
//         console.log("F")
//     }
// }

// gradingCalc(99);
// gradingCalc(70);



//Ternary Operation
//syntax
//(condition) ? (if true, do this) : (otherwise, do this)
// function checkPassword(pass1, pass2){
//   pass1 === pass2 ? console.log("password confirmed") : console.log("wrong password");

// }
// checkPassword("abcd", "abcd");
// checkPassword("word", "wold");



//Switch Statement
// function whatIsToday(day){
// let dayName;

// switch(day){
//     case 1:
//         dayName="Monday";
//         break;
//     case 2:
//         dayName="T";
//         break;
//     case 3:
//         dayName="w";
//         break;
//     case 4:
//         dayName ="Thursday";
//         break;  
//     default:
//         dayName = "invalid day";            
// }
// console.log("Today is " + dayName);
// }

// whatIsToday(3);
// whatIsToday(1);




//Algorithm thinking
//Q1) adds two numbers and only adds numbers and returns errors if provided a non numerical value 
//2 - solve on paper 
// 5 + 7= 12
// pseudocode
// define a function that tekes two argument 
// //     function add(a,b)
// check if the given arguments are number
// if not return error message
// //   if (typeof a !="numbers" || typeof b != "numbers" ){
// //retun "I can only add numbers  "
//} 

// add the two numbers 
// // // a + b
// save the result on a varaible 
// // // var c = a + b
// return the result
// // // return c


//full solution
// function add(a, b){
//     if (isNaN(a) || isNaN(b)){
//         return "please provide number value only";
//     }

//     return parseFloat(a) + parseFloat(b);
// }

// console.log(add(25, 71));
// console.log(add(89,"Hello"));
// console.log(add(54, "94"));
// console.log(add("5.5", 7));


//Q2)  Write a function that takes the base and height of a triangle and return its area. 
// pseudo code 
// define a function that takes two arguments
//check if the provided base and height value are valid numbers 
// multiply the base with height and divide the result by 2 and return the result 

//full code
// function triArea(base, height){
//     if(isNaN(base)|| isNaN(height)){
//         return "please enter a number value";
//     }else if (base <= 0 || height <= 0){
//         return " please provide onlt positive numbers";
//     }else{
//         return (base*height)/2;
//     }
// }

// console.log (triArea(6,5));
// console.log(triArea(6, "hi"));
// console.log(triArea("6", "6"));
// console.log(triArea(-6,7));


//Q3 create a function that takes the number of wins, draws and losses and calculates the number of points a football team has obtained so far
//pseudo code 
//define a function that takes 3 arguments
// // funtion footBall points(a, b, c)
// check if all the arguments are numbers 
//  // if(isNAN(a)|| isNAN(b) || isNAN(c)) {
//return "please provide numerical value" 
//}
//multiply the first argument by 3
// // var winpoints = a*3
// multiply the second argument by 1
// // var drawpoints = b*1
// multiply the third argument by 0
// // var lossespoint = c*0

// add them together
// // var total = winpoints + drawpoints + lossespointes 
// return the sum 
// // return total


// full code 

// function footballPoints(wins, draws, losses){
//     if (isNaN(wins)||isNaN(draws)||isNaN(losses)){
//         return "please provide numerical value."
//     }else if (wins < 0 || draws < 0 || losses < 0 ){
//         return "please provide positive numbers only"
//     }else {
//         let winPoints = wins*3;
//         let drawPoints = draws*1;
//         let lossPoints = losses*0;

//         let total = winPoints + drawPoints + lossPoints;

//         return total;
//     }

// }

// console.log(footballPoints(4, 2, 3));
// console.log(footballPoints("seven", 6 ));
// console.log (footballPoints(7, -2, 5));
// console.log(footballPoints(5, 6, 7));

//Q4 write a function that takes an integer minutes and converts it to seconds.
//pseudo code 
//declare a function called minutesToSecondConverter 
//The function takes one argument 
//Checks if the provided minutes is a valid number 
//if the user enters a string return "please enter a positive number"
// if yes, multiply that number with 60 and return the 

//full code 
// function minutesToSecondConverter(minutes) {
//     if (isNaN(minutes)){
//         return "you entered a string. please enter a number.";
//     }else if (minutes<0){
//         return "you entered a negative number. please enter a positive number.";
//     }else {
//         return minutes*60;
//     }
// }

// console.log(minutesToSecondConverter(10));
// console.log(minutesToSecondConverter(-2));
// console.log(minutesToSecondConverter("hi"));




// examples

