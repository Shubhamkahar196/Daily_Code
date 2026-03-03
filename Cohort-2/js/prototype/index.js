if(!Array.prototype.myForEach){
    Array.prototype.myForEach = function(userFn){
        const originalArr = this  //this refer current object ki traf point krta hai

        for(let i = 0;i<originalArr.length;i++){
          userFn(originalArr[i],i)
        }
    }
}


if(!Array.prototype.myMap){
    Array.prototype.myMap = function(userFn){
        const result = []
        
        for(let i =0; i<this.length;i++){
            const value = userFn(this[i],i)
            result.push(value);
        }

        return result;
    }
}

if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(userFn){
        const result = [];
      
        for(let i =0;i<this.length;i++){
            if(userFn(this[i])){
                result.push(this[i]);
            }
        }

        return result;
    }
}


const arr = [1,2,3,4,5,6];
// polyfill
// error: .forEach function doest not exist on arr variable

// Real signture ko samjo-> no return ,function input, value,index
//calls my fn for every value

const ret = arr.myForEach(function(value,index){
    console.log(`Value at index ${index} is ${value}`)
})

console.log(`Ret is`,ret)


// signture .map
// return? - New Array,each element iterate,userfn

const n = arr.map((e)=> e*2);
const n2 = arr.myMap((e)=> e*3);
console.log(n);
console.log(n2);


// filter
//signature: Return - new Array | input: userFn,
//agar usr ka function true return krta hai to current value ko
// new array mai include kr leta hai

const n3 = arr.myFilter((e)=> e%2==0);
console.log(n3);

