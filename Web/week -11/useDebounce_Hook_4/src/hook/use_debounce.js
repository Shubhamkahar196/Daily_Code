


// useDeounee= > The useDebounce hook in React is a useful tool for delaying the execution of a function or API call 
// until a certain amount of time has passed since the last input or event.
//  This can help improve performance and prevent excessive API calls or computations.


// node.js for backend how useDebounce work
let curretnClock;

function searchBackend(){
    console.log("request send to backend");
    //fetch()
}

function debounceSearchBackend(){
    clearTimeout(curretnClock);
   curretnClock= setTimeout(searchBackend,30); // start a clock
}

debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();
debounceSearchBackend();