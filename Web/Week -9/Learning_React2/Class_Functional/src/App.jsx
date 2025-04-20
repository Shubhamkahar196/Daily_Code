
// Earlier, React code was written using Class based components. 
// Slowly functional components were introduced and today they are the ones you’ll se everywhere.
// Class components are  classes that extend React.
// Component, while functional components are simpler and can use Hooks.

// class based 

// import React, { Component } from 'react';

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }


// functional components


import React, { useState } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    
    function increment() {
	    setCount(count => count + 1)
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};


