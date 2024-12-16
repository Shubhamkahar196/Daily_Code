const num = [ 1,2,3,4,5,6,7,8,9,10];

// const newNum = num.filter( (nums)=> {
//    return  nums > 5
// });
// console.log(newNum);


const newNum = num.map( (num) => {
    return num + 10});
console.log(newNum);