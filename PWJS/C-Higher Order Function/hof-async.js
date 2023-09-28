//Async Piece of Code

console.log("start")

setTimeout(function f(){
    console.log("timer done 1")
},100 )

setTimeout(function f(){
    console.log("timer done 2")
},0 )

for(let i=0; i< 10000; i++){
    console.log(i)
}

console.log("end")

//Event Loop
// It regular Check Global piece of code excute hue kya, Call stack empty hain kya?


//Problem occured two in call which will handle by promises
// 1-Inversion of control
// 2-Callback hell