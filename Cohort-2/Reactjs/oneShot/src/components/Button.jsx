// click event = An interaction when a user clicks on a
// specific element.
// we can respond to clicks by passing 
// a callback to the onClick event handler

function Button(){

    const handleClick = ()=>console.log("i am click")

    const handleClick2 = (name) =>console.log(`${name} stop clicking me`);

// return (<button onClick={handleClick}>Click me</button>)
return (<button onClick={()=>handleClick2("sk")}>Click me</button>)
}

export default Button