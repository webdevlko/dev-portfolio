let arr = [2,3,4,];

arr.forEach(function(element, index, arr ){
    console.log(index, element, arr);
})

arr.forEach((elemeent, index, arr )=>{
    console.log("arrow", index, elemeent, arr);
})

const heros = ["nagaraj", "doga", "dhruva", "maniraj"]

heros.forEach((el)=>{
    console.log(el.toLocaleUpperCase())
})

arr.map(function(element, index, arr){
    console.log(element, index, arr)
})

//Map
heros.map((h)=> console.log(h.toUpperCase()));

//Filter 
console.log(heros);

const herosWithRaj = heros.filter((h)=>{
   return h.endsWith("raj")
})

console.log(herosWithRaj)

//shopping cart

const cartBill = [20,30,50];
const sumOfCartBill = cartBill.reduce((prev, curr)=> prev + curr, 0);
console.log(sumOfCartBill)

//Game Scroe
const gameScore = [200, , 100, 300, 310, 250, 150]

//Check if all values are number
const gameScoreCheck = gameScore.every((v)=>typeof v === "number")
console.log("check",gameScoreCheck);


//Find score above 200

const above200 = gameScore.find((score)=>score>200)

console.log(above200)


//find index
const ages = [4, 12, 16, 20];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAge);
}
//some
const agess = [3, 10, 18, 20];
document.getElementById("demo").innerHTML = agess.some(checkAdult);

function checkAdult(age) {
  return age > 18;}

//sort

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.sort();

//Reverse
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.sort();
fruitss.reverse();