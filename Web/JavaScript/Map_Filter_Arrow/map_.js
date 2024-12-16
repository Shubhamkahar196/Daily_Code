//given an array give me back  anew array in which every value is multiplied by 2
//[1,2,3,4,5]
//[2,4,6,8,10]

// 1st approach

const input = [1,2,3,4,5];

// const newArray = [];
// for(let i =0; i< input.length;i++){
//     newArray.push(input[i] *3);
// }

// console.log(newArray);

// 2 second approach

const ans = input.map(function (i){
    return i * 3;
});
console.log(ans);