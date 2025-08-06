import React, { createContext, useEffect, useState } from 'react'
import { setLocalStorage, getLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

function AuthProvider({children}) {

  const [userData, setUserData] = useState(null)
  
  useEffect(() => {
    setLocalStorage()
    const {employees} = getLocalStorage()
    setUserData(employees)
  }, [])
  
  
  
  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider