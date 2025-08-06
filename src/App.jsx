import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'


function App() {
  
  // useEffect(() => {
  //   // localStorage.clear()
  //   // setLocalStorage()
  //   // getLocalStorage()
  // })

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData, setUserData] = useContext(AuthContext)
  // console.log(authData.employees);

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])

  const handleLogin = (email, password) => {
    if(email == 'admin@me.com' && password == '123456'){
      setUser('admin')
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(userData){
      const employee = userData.find((e)=>email == e.email && password == e.password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({role:'employee', data:employee}))
      }
    }else{
      alert("Invelid Credentials")
    }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : user == 'admin' ? <AdminDashboard changeUser={setUser} /> : <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />}
    </>
  )
}

export default App