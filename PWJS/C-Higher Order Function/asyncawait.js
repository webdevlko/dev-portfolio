//Increase the readiblity of code, promise object use placeholder
//Promise initial state is pending, after completing the the async task it will fullfilled 


//Promise standard structure, it expect a callback
function createPromise(){
    return new Promise(function exec(resolve, reject){
          //your code goes here
          setTimeout(function f(){
            console.log("timer done");
            //resolve(10) 
            resolve("10")   
          },3000)
    });
    
};

//Below function is capable to Async Programing , await always use in async function

async function consume(){
    try{
    console.log("inside function");
    const response = await createPromise();
    const response1 = await createPromise();
    console.log("response is", response);
    } catch (err){
        console.log("handled", err)
    }
    
}
console.log("start");

consume();

console.log("end")