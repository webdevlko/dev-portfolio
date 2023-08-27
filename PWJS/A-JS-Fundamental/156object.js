// method 1 for creating objects

let obj = {id:101, name:"Alex", salary: 1000};
// console.log(obj)

// method 2 for creating objects
let emp = new Object();
emp.id = 1;
emp.name = "Aslam"
// console.log(emp)

// method 3 for creating objects through functions

function Emp(i, n, s){
    this.id =i;
    this.name = n;
    this.salary =s;
}

const e = new Emp(103, "Amy", 12000);
// console.log(e);

//Accessing keyvalue pair of object
console.log(emp.id);
console.log(emp['name']);

//Ading or updating values on new keyvalue pair
emp.id=13;
emp['name']= 'mr. Sam';

console.log(emp);

//Deleting the value
delete emp.id
console.log(emp);