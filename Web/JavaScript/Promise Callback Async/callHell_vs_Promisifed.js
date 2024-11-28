function setTimeoutPromisified(finalDuration){
    return new Promise(function(resolve){
        setTimeout(resolve,finalDuration);
    });
}

// different b/w callbackhell vs promise
// callbackhell have complex chaining as compare to promise 
//Promise chaining

setTimeoutPromisified(1000).then(function (){
    console.log("hii");
    return setTimeoutPromisified(3000)
}).then(function (){
    console.log("there");
    return setTimeoutPromisified(5000)
}).then(function (){
    console.log("hii there");
});

console.log("outside the call back hell");