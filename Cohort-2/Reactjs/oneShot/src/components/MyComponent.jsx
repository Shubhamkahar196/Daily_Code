// onchange = event handler used primarily with form Elements
//            ex. <input>, <textarea>, <select>, <radio>
//             Triggers a function every time the value of the input changes

import { useState } from "react";


function MyComponent(){
   
    const [name,setName] = useState("");

    function handleNameChange(event){
setName(event.target.value);
    }
    return (
        <div>
   <input type="text" value={name} onChange={handleNameChange} />
   <p>name: {name}</p>
        </div>
    )
}

export default MyComponent