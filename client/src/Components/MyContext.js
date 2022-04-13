import React, { useState, useEffect } from 'react'

const UserContext = React.createContext(); 

const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value= {{

    }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
