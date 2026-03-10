//promisify this async function
// -< not return but take callback

//  return 
function promisifiedMyOwnSetTimeOut(duration){
     const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
     });
    return p;
}

//  promise
const ans = promisifiedMyOwnSetTimeOut(1000);
ans.then(function(){
    console.log("time out is done");
})

console.log(ans);
