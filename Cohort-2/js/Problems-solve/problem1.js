const teas = ["Green tea","Black tea","oolong tea", "white tea", "Herbal tea"];
console.log(teas);

// add  another tea
teas.push("Chamomile Tea");

// remove oolong tea
const index = teas.indexOf("oolong tea");
console.log(index);
if(index > -1){
    teas.splice(index,1);
}



// filter the list to only include teas that are caffeinated
const caffeinatedTeas = teas.filter(tea => tea !== "Hearbal tea")


//sort the list of teas in alphabetical order
teas.sort();
console.log(teas);

// use a for loop to print each type of tea in the array

for(let i =0; i<teas.length;i++){
    console.log(teas[i]);
}



// use a for loop to count how many teas are caffeinated (excluding "Herbal Tea");
let caffeinatedTeass = 0;
for(let i =0; i<teas;i++){
    if(teas[i] !=="Herbal Tea"){
        caffeinatedTeass++;
    }

}

// use a for loop to find the tea name with the most characters
let longestTea = "";
for(let i = 0; i<teas.length;i++ ){
    if(teas[i].length > longestTea.length){
        longestTea = teas[i]
    }
}

// reverse array
const reversedArray = [];
for(let i =teas.length-1 ; i>=0; i--){
    reversedArray.push(teas[i]);
}

console.log(reversedArray);
