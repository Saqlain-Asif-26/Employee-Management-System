import React, { useState } from 'react'

function Login({handleLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // this data is for hamburger
    const adminData = JSON.parse(localStorage.getItem('admin'))
    const employeeData = JSON.parse(localStorage.getItem('employees'))

    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(prev => !prev);
    };

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    };

  return (
    <div className='flex flex-col h-screen w-screen items-center justify-center static'>
        <div onClick={toggleSidebar} className={`absolute top-0 left-0 p-3 bg-red-500 m-5 rounded-full cursor-pointer z-50 transition-transform duration-300 ${ showSidebar ? 'rotate-135' : 'rotate-0' }`} title='Login adminData'>
            <img className='h-5 w-5' src="/Employee-Management-System/plus.png" alt="plus-sign" />
        </div>
        {/* Hamburger */}
        <div className={`overflow-auto fixed top-0 left-0 h-full w-72 bg-white shadow-lg z-40 px-3 pb-3 pt-20 transform transition-transform duration-300 ${ showSidebar ? 'translate-x-0' : '-translate-x-[110%]' }`}>
              <h2 className='text-black text-xl font-bold mb-4'>Login Data</h2>
              <div className='text-black space-y-2 p-2 bg-gray-200 rounded-lg'>
                <h1 className='text-lg font-medium'>Admin account</h1>
                {adminData?.map((admin, index) => (
                    <div key={index} className="border-2 border-gray-300 p-2 rounded-md mb-2 bg-white">
                      <p className="text-black font-medium">Name: {admin.firstName}</p>
                      <p className="text-sm text-black">Email: <span className="text-blue-600">{admin.email}</span></p>
                      <p className="text-sm text-black">Password: <span className="text-blue-600">{admin.password}</span></p>
                    </div>
                ))}
                <div className='text-black space-y-2 p-2 bg-gray-200 rounded-lg mt-2'>
                <h1 className='text-lg font-medium'>Employee accounts</h1>
                {employeeData?.map((employee, index) => (
                    <div key={index} className="border-2 border-gray-300 p-2 rounded-md mb-2 bg-white">
                      <p className="text-black font-medium">Name: {employee.firstName}</p>
                      <p className="text-sm text-black">Email: <span className="text-blue-600">{employee.email}</span></p>
                      <p className="text-sm text-black">Password: <span className="text-blue-600">{employee.password}</span></p>
                    </div>
                ))}
              </div>
            </div>   
        </div>
        {/* Form */}
        <div className='border-2 py-20 px-[8vw] sm:p-20 border-emerald-600 rounded-xl'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required className='border-2 border-emerald-600 py-2 sm:py-3 px-4 sm:px-5 text-md sm:text-xl outline-none rounded-full bg-transparent placeholder:text-gray-400 w-60 sm:w-80' type="email" placeholder='Enter Your Email' />
                <input 
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='border-2 border-emerald-600 py-2 sm:py-3 px-4 sm:px-5 text-md sm:text-xl outline-none rounded-full bg-transparent placeholder:text-gray-400 w-60 sm:w-80 mt-3 sm:mt-4' type="password" placeholder='Enter Your Password' />
                <button className='w-full bg-emerald-600 py-2 sm:py-3 px-4 sm:px-5 text-md sm:text-xl outline-none rounded-full mt-6 sm:mt-8'>Log in</button>
            </form>
        </div>
    </div>
  )
}
export default Login