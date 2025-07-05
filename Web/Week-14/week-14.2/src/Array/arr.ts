//  problem 1
function getMax(nums: number[]){

    let maxValue = -10000000;

    for(let i = 0; i<nums.length; i++){
        if(nums[i] > maxValue){
            maxValue = nums[i]
        }
    }
    return maxValue
}


getMax([1,2,4])

// problem 2


interface User7 {
    firstName: string;
    lastName: string;
    age: number;
}

function filterUser(users8: User7[]){
    return users8.filter(x=> x.age >=18)
}

console.log(filterUser([{
    firstName: "shubham",
    lastName: "kahar",
    age: 21
},{
    firstName: "aaru",
    lastName: "kafr",
    age: 23
}]))

