//Increase the readiblity of code, promise object use placeholder
//Promise initial state is pending, after completing the the async task it will fullfilled 


//Promise standard structure, it expect a callback
function createPromise(){
    return new Promise(function exec(resolve, reject){
          //your code goes here
          setTimeout(function f(){
            console.log("timer done");
            //resolve(10) 
            reject("rejected")   
          },3000)
    });
    
};

console.log("start");
let x = createPromise();
console.log("got a new promise");
x.then(function f(value){        //this is registration, what need to do after completing the promise
    console.log("promise done", value);

    //We could write multiple then in order to avoid call back hell
    //if reject
}).catch(function g(value){
    console.log("handled", value);
}).finally(function fn(){
    console.log("finally");
})

console.log("end");

for (let i=0; i < 100000;i++){
    //some code
}


