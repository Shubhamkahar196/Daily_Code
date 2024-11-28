function waitFor35(resolve){
    setTimeout(resolve,3000)
}

function main(){
    console.log("main is called");
}

waitFor35(main);  

function random(resolve){
   setTimeout(resolve,3000);

}



// let p = new Promise(random);

// function callback(){
//     console.log("promise succeded");
// }

// // console.log(p);
// p.then(callback);