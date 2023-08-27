// 1 :Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.

// 1. String: "I am happy to join PW Skills FWD Course
// 2. Number: -
// i) Integer: 9
// ii) Floating value: 10.2
// iii) Infinity: Number. POSITIVE_INFINITY
// Number. NEGATIVE_ INFINITY
// iv) Not a Number: NaN
// 3. BigInt: 1024n
// 4. Boolean: true, false
// 5. Undefined: undefined
// 6. Null: null
// 7. Symbol: Symbol('PW Skills')
// 8. Objects: -
// i) Array: [1, 2, "PW"]
// ii) Object: {name: "PW SKills", course: "FSWD*)


// Array
// 1 :Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an example for each of them.

// let items = [
//     "iPhone",
//     "Macbook Pro",
//     "Flower Pot",
    
//     "Water Bottle",
//     "Mac Studio mini",
//     "Watch",
//     "Tennis Ball",
//     "Mouse Pad",
//     "Keyboard",
//     "Lens"
//     ]

//     console.log(typeof items);

// Objects
// 3. Create an object of a student registry of 5 students whose key is the registration number and the value is
// the student name. Registration number starts from 1 and continues.

// let createobject =
// {
//    One: "Mithun",
//    2: "Palank",
//    3: "Anuran",
//    4: "Ravi",
//    5: "Tiwari",


// };

// console.log(createobject)

// Variable and Datatype

// 1: String
// let var1 = "I am happy to join PW Skills FSWD Course"
// console.log (typeof var1);


// 2: Integer
// let var2 =92.;
// console.log(typeof var2);

// 3 Decimal
// let var3 = 10.2;
// console.log(typeof var3);


// 4 Infinity 
// let var4 = Number.POSITIVE_INFINITY;
// console. log (typeof var4);


// iv) Not a Number:
// let var6 = NaN;
// console.log(typeof var6);


// 3. Bigint :
// let var7 = 1024n;
// console. log (typeof var7);

// 4. Boolean:
// let var8 = true;
// console.log(typeof var8);


// 5. Undefined:
// let var9 = undefined;
// console. log (typeof var9);


// // 6. Null:
// let var10 = null;
// console. log(var10);

// // 7. Symbol:
// let var11 = Symbol("PW Skills");
// console. log (typeof var11);

// // 8. Objects: -
// / i) Array:
// let var12 = [1, 2, "PW"];
// console. log(typeof var12);

// // ii) Object:
// let var13 = { name: "PW SKills", course: "FSWD" };
// console.log(typeof var13);

// 2. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and

// // / Valid variables
// let name = "PW Skills";
// console.log (name); 
// // OUTPUT: PW Skills
// let iAmHappy = true;
// console.log (iAmHappy); 
// // OUTPUT: true
// // Invalid Variables
// let Iname = "PW SKills"
// console. log(1name); 
// // OUTPUT: SyntaxError: Invalid or unexpected token
// let var = 13
// console.log(var); 
// // OUTPUT: SyntaxError: Unexpected token 'var'

// 1. Write a program that prints the multiplication table in the textbook format of any number specified.
// let number = 6;
// console.log(`${number}* 1 = ${number * 1}`);
// console.log(`${number}* 2 = ${number * 2}`);
// console.log(`${number}* 3 = ${number * 3}`);
// console.log(`${number}* 4 = ${number * 4}`);
// console.log(`${number}* 5 = ${number * 5}`);
// console.log(`${number}* 6 = ${number * 6}`);
// console.log(`${number}* 7 = ${number * 7}`);
// console.log(`${number}* 8 = ${number * 8}`);
// console.log(`${number}* 9 = ${number * 9}`);
// console.log(`${number}* 10 = ${number * 10}`);

// 2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of
// javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

// let num1 = 10;
// let num2 = 8;
// // Addition (+): Adds two values together.
// console.log(`The addition of numi and num2 is ${num1 + num2}`);
// // / Subtraction (-): Subtracts one value from another.
// console. log(`The substraction of numi and num2 is ${num1 - num2}`);
// // Multiplication (*): Multiplies two values together.
// console. log(`The multiplication of numi and num2 is ${num1 * num2}`);
// // Division (/): Divides one value by another.
// console. log(`The division of num1 and num2 is ${num1 / num2}`);
// // Modulus (%): Returns the remainder of a division operation.
// console.log (
// `The result of modulo operation of num1 and num2 is ${num1 % num2}`);

// //  Exponentiation(**): raises to the power of.
// console.log(`The exponential of numl and num2 is ${num1 ** num2}`);


// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

// let length = 10;
// let breath =20;

// let perimeterOfRectangle = 2*(length+ breath);

// console.log(`The perimter of rectangle is ${perimeterOfRectangle}`);

// 3. Write a program to demonstrate the results of comparison operators. Note that both the truth and false
// condition for each operator must be specified.

// 4. Write a program to demonstrate the results of comparison operators. Note that both the truth and false
// condition for each operator must be specified
// Equal
/*
let num1 = 12;
let num2 = 12;
console.log (num1 == num2); // true

let num3 = 12;
let num4 = 10;
console.log (num3 == num4); // false

// Not Equal
let num11 = 12;
let num12 = 12;
console.log (num11 != num12); // false

let num13 = 12;
let num14 = 10;
console.log(num13 != num14); // true

// Strictly Equal
let num21= 12;
let num22 = 12;
console. log (num21===num22); //true


let num23 = 12;
let num24 ="12";

console.log (num23 === num24); //false

//  Strictly Not Equal
let num31 = 12;
let num32 = 12;
console.log (num31 !== num32); //true

let num33 = 12;
let num34 = "12";
console.log (num33 !== num34); //true

//Greater Than
let num41 = 13;
let num42 = 12;
console.log (num41 > num42); // true

let num43 = 10;
let num44 = 12;
console.log (num43 > num44); // false

// Greater Than or Equal To
let num51 = 13;
let num52 = 12;
console.log (num51 >= num52); // true

let num53 = 10;
let num54 = 12;
console.log (num53>=num54); //false

// Lesser Than
let num61 = 12;
let num62 =13;

console.log (num61 < num62); //true


let num63 = 12;
let num64 = 10;
console.log (num63 < num64); // false

// Lesser Than or Equals To
let num71 = 13;
let num72 = 13;
console.log(num71 <= num72); // true

let num73 = 12;
let num74 = 10;
console.log (num73 <= num74); // false

*/

// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop.

// let trafficlight = "green"
// ;
// if (trafficlight == "red") {
// console.log ("Vehicles must stop.");
// } else if (trafficlight == "orange") {
// console.log("Vehicles must wait. The signal is changing to red or green.");
// } else if (trafficlight == "green") {
// console.log("Vehicles may proceed with caution.");
// } else {
// console.log("Invalid traffic Light");
// }

// let trafficlight ="red";

// if (trafficlight == "green"){
//     console.log("Go");
// }
// else if (trafficlight == "orange"){
//     console.log("Ready");
// }

// else if (trafficlight == "red"){
//     console.log("stop");
// }

// else {
//     console.log("invalid entry");
// }

// 2. Write a program to print the largest of 2 numbers.

// let num1 =22;
// let num2 =24;

// if(num1>num2){
//     console.log(`Greatet number is ${num1}`);
// }

// else{
//     console.log(`Greatet number is ${num2}`);
// }

// 3. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
// by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
// the numbers divisible by 3 or 5.

// let num = 12;
// if (num % 5 == 0 && num % 3 == 0) {
// console.log("FizzBuzz");
// } else if (num % 3 == 0) {
// console.log("Fizz");
// } else if (num % 5 == 0) {
// console.log("Buzz");
// } else {
// console.log("Invalid input");
// }

// Switch case
// 1. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.

// const day = "Monday";
// let daysUntilWeekend;
// switch (day) {
// case "Monday":
// console.log(`There are 5 day(s) until the weekend.`);
// break;
// case "Tuesday":
// console. log(`There are 4 day(s) until the weekend.`);
// break;
// case "Wednesday":
// console. log(`There are 3 day(s) until the weekend.`);
// break;
// case "Thursday":
// console. log(`There are 2 day(s) until the weekend.`);
// break;
// case "Friday":
// console. log(`There are 1 day(s) until the weekend.`);
// break;
// case "Saturday":
// case "Sunday":
// console. log(`There are 0 day(s) until the weekend.`);
// break;
// default:
// daysUntilWeekend = "Invalid day"
// break;
// }

// 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the
// year.

// First method if else method

// let monthName = "4";

// if (monthName==3){
//     console.log(`Januray`)
// }
// else if(monthName==2){
//     console.log(`February`)
// }
// else if(monthName==3){
//     console.log(`March`)
// }
// else if(monthName==4){
//     console.log(`April`)
// }
// else if(monthName==5){
//     console.log(`May`)
// }
// else if(monthName==6){
//     console.log(`June`)
// }
// else if(monthName==7){
//     console.log(`July`)
// }
// else if(monthName==8){
//     console.log(`August`)
// }
// else if(monthName==9){
//     console.log(`September`)
// }
// else if(monthName==10){
//     console.log(`October`)
// }
// else if(monthName==11){
//     console.log(`November`)
// }
// else if(monthName==12){
//     console.log(`December`)
// }
// else {
//     console.log(`Invalid Input`)
// };

// Second method by case

// const monthName = 1;

// let monthMoreThan12;

// switch(monthName){
//     case 1:
//         console.log(`Janary`);
//         break;
    
//     case 2:
//         console.log(`Feb`);
//     break;
        
//     case 3:
//         console.log(`Feb`);
//     break;
        
//     case 4:
//         console.log(`Feb`);
//     break;
        
//     case 5:
//         console.log(`Feb`);
//     break;
        
//     case 6:
//         console.log(`Feb`);
//     break;
        
//     case 7:
//         console.log(`Feb`);
//     break;
        
//     case 8:
//         console.log(`Feb`);
//     break;
        
//     case 9:
//         console.log(`Feb`);
//     break;
        
//     case 10:
//         console.log(`Feb`);
//     break;
        
    

// }

// Ternary Conditions
// 1. Write a program that takes in a number and outputs whether it is positive, negative, or zero.

// let number = 3;
// number == 0 ? console. log("The number is zero") 
// : number > 0 ? console.log ("The number is greater than zero") 
// : console. log("The number is lesser than zero");

// 2. Create a program that takes in two numbers and prints the larger one.

// let num1 = 10;
// let num2 = 10;
// num1 == num2
// ? console.log(`Both are equal`) 

// : num1 > num2
// ? console.log(`The larger number among those is ${num1}.`)
// : console.log(`The larger number among those is ${num2}.`)


// Loops
// 1. Write a program that generates the multiplication table in the textbook format for a given number.
// let numbers = 5;
// for (let i = 1; i <= 10; i++) 
// {
// console.log(`${numbers} * ${i} = ${numbers * i}`);
// }



// let number = 10;
// for (let i = 1; i <= number; i++) {
// if (i % 2 == 0) {
// console.log (i);
// }
// }