import React, { useEffect, useState } from 'react'

function Header(props) {

  const [userName, setUserName] = useState('')
  
  useEffect(() => {
    const name = JSON.parse(localStorage.getItem('loggedInUser'))
    
    if(name.role == 'admin'){
        setUserName('Saqlain (Admin)')
      }else if(name.role == 'employee'){
        setUserName(name.data.firstName)
      }
  
  }, [])
  


  
  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-xl sm:text-2xl font-medium'>Hello <br /> <span className='text-2xl sm:text-3xl font-semibold'>{userName}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 cursor-pointer text-white px-3 py-1 sm:px-5 sm:py-2 rounded-sm text-md sm:text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header