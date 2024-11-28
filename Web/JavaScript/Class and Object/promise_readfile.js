const fs = require("fs");

function readTheFile(sendTheFile){

    //do your thing, whenever u have the final value, call sendTheFile Value here("finalValue")
    fs.readFile("a.txt","utf-8",function(err,data){
        sendTheFile(data);
    });
}



function readFile(fileName){
    //read the file and return its value
    return new Promise(readTheFile);
}

const p = readFile("a.txt");

function callback(contents){
    console.log(contents);
}

p.then(callback)