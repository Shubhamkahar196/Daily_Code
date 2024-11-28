function setTimeoutPromisified(duration){
    return new Promise(function (resolve){
        setTimeout(resolve,duration);
    });
}

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("hii");
    await setTimeoutPromisified(3000);
    console.log("there");
    await setTimeoutPromisified(5000);
    console.log("hii there");
}

solve();