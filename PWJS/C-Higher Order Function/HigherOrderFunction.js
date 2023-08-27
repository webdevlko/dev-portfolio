//Higher Order Functions

const powerTwo = (n)=>{
    return n**2;
}

function powerCube(powerTwo, n){
    return powerTwo(n)*n;
}

console.log(powerCube(powerTwo, 3));

function sayHello(){
    return  ()=> {
        console.log("Hello Aslam")
    }
}

let guessValue = sayHello()
console.log(guessValue)

guessValue()


const higherOrder = n =>{
    const oneFun = m =>{
        const twoFun = p => {
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4));

const myNums = [2,3,4,5]


//Passing array in arrow function
const sumArray = arr => {
    let total =0
    arr.forEach(function(element){
            total+=element
    });
    return total
}

console.log(sumArray(myNums));

//Set interval

function oneMoreHello(){
    console.log("Hello Aslam 2", Math.random());
}

// setInterval(oneMoreHello, 1000)

//Set timeout

setTimeout(oneMoreHello, 2000)