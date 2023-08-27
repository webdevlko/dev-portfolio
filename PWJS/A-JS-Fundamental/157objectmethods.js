let emp ={
    id:101,
    name: 'saket',
    age:24
}

//Fetching all keys from object represent in array form, values comes as a string

let keys = Object.keys(emp);
console.log(keys);

//Fetching all values from object represent in array form, value come intact
let values = Object.values(emp);
console.log(values);

//Fetching all key value pair together

let entries = Object.entries(emp);
console.log(entries);

emp.id = 100;
console.log(emp);

//Freezing the completing object, not adding and updating the values
// Object.freeze(emp);
// emp.id = 106;
// console.log(emp);

//Allowing only updating , not adding new values
Object.seal(emp);
emp.id=102;
emp.itz="thisznkn"
console.log(emp);


//Using old object values to new object, new object is "o"

let o = Object.assign({x:16,y:19}, emp);
console.log(o);
