import React, { Children } from "react";

import UserContext from "./UserContext";


const UserContextProvider = ({Children}) =>{
  const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
          
          {Children}
        
        </UserContext.Provider>
    )
}

export defualt UserContextProvider