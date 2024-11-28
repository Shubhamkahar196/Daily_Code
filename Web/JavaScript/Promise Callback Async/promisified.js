function setTimeoutPromisified(duration) {
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}

//settime -> promisifed setTimeout

function callback(){
    console.log("5 second has passed");
}

setTimeoutPromisified(5000).then(callback);