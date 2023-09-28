//Higher order function is which expect a argument and a function as arguments, this internal function is called parameter

//Synchronous Callback function -- Line by line execution

function h (x, fn){
    // h--> is a higher order function
    // fn --> is a callback
    console.log(x*x)
    fn();
}

// h(10, function(){
//     console.log("done with callback")
// })

h(10, exec)


function exec(){
    console.log("squared value is", n)
}
