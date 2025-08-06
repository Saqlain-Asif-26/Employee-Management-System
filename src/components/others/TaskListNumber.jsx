import React from 'react'

function TaskListNumber({data}) {
  return (
    <div id='tasklistnumber' className='flex mt-10 justify-between scroll-smooth overflow-x-auto gap-5'>
        <div className='min-w-[162px] sm:w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='min-w-[162px] sm:w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.active}</h2>
            <h3 className='text-xl font-medium'>Accepted</h3>
        </div>
        <div className='min-w-[162px] sm:w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
            <h3 className='text-xl font-medium'>Completed</h3>
        </div>
        <div className='min-w-[162px] sm:w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskCount.failed}</h2>
            <h3 className='text-xl font-medium'>Failed</h3>
        </div>
    </div>
  )
}

export default TaskListNumber