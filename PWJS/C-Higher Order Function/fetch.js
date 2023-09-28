
//fetch work as promise and 
fetch("http://type.fit/api/quotes")
.then(function f (response){
    return response.json();  //store receving data in JSON format
})
.then(function f(value){    //Sharing data as function
    console.log(value) 
})