import React from 'react'

function AcceptTask({data}) {


  return (
    <div className='flex-shrink-0 h-full w-[300px] p-5 rounded-xl bg-green-400'>
        <div className='flex justify-between items-center'>
            <h3 id='high' className='bg-red-600 text-sm px-2 py-0.5 rounded'>{data.category}</h3>
            <h4>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2'>{data.taskDescription}</p>
        <div className='flex justify-between mt-4'>
            <button className='rounded cursor-pointer hover:bg-yellow-600 bg-yellow-500 py-1 px-2 text-sm'>Mark as Completed</button>
            <button className='rounded cursor-pointer hover:bg-red-600 bg-red-500 py-1 px-2 text-sm'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask