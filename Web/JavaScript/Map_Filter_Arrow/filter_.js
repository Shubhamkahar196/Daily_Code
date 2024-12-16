//what if i tell u, given an input array give me back alll the even values from it

//1st approach

const arr = [ 1,2,3,4,5];

// const newArray=[];
// for(let i = 0 ;i<arr.length;i++){
//     if(arr[i]%2==0){
//         newArray.push(arr[i]);
//     }
// }

// console.log(newArray);

// 2nd approach

function filterLogic(n){
    if(n%2==0){
        return true;
    }else{
        return false;
    }
}

const ans = arr.filter(filterLogic);
console.log(ans);
