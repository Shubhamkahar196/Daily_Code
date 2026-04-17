console.log("start");

setTimeout(()=>{
    console.log("Settimeout callback")
})

Promise.resolve().then(()=>{
    console.log("Promise CallBack")
})

console.log("end...")