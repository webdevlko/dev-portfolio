let arr = [1,2,3,4,5]

// adding elements in last
arr.push(6,7)

// console.log(arr)

// //removing elements from last
arr.pop()
console.log(arr)

// // return same element from last
// let g= arr.unshift();
// console.log(g);


// // return same element from start
let f= arr.shift();
console.log(f);


//Removing elements from first
// arr.shift()
// console.log(arr)

// //Adding from start, comment it and work again
// arr.unshift(9)


let a1 = [1,2,3,4,5]

let a2 =[6,7,8]

let a3 = a1.concat(a2);

console.log(a3)



//merge all elements of array and shows as variable
let s =a3.join(" ")

console.log(s)


//reversing the array
a3.reverse();

console.log(a3)


//index wise search , start index and last end minus one

let arr1 = [1,2,3,4,5,6,7];
console.log(arr1.slice(2,5));


//inserting elements in between array

arr1.splice(2,0, 11,13)
console.log(arr1)