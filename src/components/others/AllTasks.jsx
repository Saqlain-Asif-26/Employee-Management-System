import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTasks() {
    const [userData, setUserData] = useContext(AuthContext)
    // console.log(userData.employees);
    
  return (
    <div id='alltasks' className='bg-[#1c1c1c] rounded p-5 my-5'>
        <div id='index' className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5'>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5'>New Task</h3>
            <h5 className='text-lg font-medium w-1/5'>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5'>Completed</h5>
            <h5 className='text-lg font-medium w-1/5'>Failed</h5>
        </div>
        <div className=''>
            {userData.map((elem, idx)=>{
                // console.log(elem);
            return (
                <div key={idx} className='border-2 border-emerald-600 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='text-lg font-medium w-1/5 px-2'>{elem.firstName}</h2>
                    <h3 className='text-lg font-medium w-1/5 px-2 text-blue-400'>{elem.taskCount.newTask}</h3>
                    <h5 className='text-lg font-medium w-1/5 px-2 text-yellow-400'>{elem.taskCount.active}</h5>
                    <h5 className='text-lg font-medium w-1/5 px-2 text-white'>{elem.taskCount.completed}</h5>
                    <h5 className='text-lg font-medium w-1/5 px-2 text-red-600'>{elem.taskCount.failed}</h5>
                </div>
            )
            })}
        </div>
    </div>
  )
}

export default AllTasks