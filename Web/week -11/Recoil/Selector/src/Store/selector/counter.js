import {atom,selector} from "recoil";

// defining atom
//hoding global atom
export const counterAtom = atom({
    defualt: 0,
    key: "counter"
})


// defining selector
// how is derived in same atom 

export const evenSelector = selector({
    key: "isEvenSelector",
    get: function({ get }){
         const currentCount = get(counterAtom);
          const isEven = (currentCount %2 == 0);
         return isEven;

    }
})