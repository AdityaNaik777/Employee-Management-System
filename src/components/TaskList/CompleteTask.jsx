import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='shrink-0 h-full w-75 bg-blue-500 rounded-xl p-5'>
        <div className='flex justify-between items-center'>
          <h3 className='bg-red-600 text-smpx-3 p-1 rounded'>{data.category}</h3>
          <h4>{data.taskdate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}
        </p>
        <div className='mt-2'>
          <button className='bg-green-500 py-1 px-2 text-sm w-full'>Completed</button>
        </div>
      </div>
  )
}

export default CompleteTask