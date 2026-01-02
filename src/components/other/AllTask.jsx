import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {
  const [userData,setUserData]=useContext(AuthContext)
  // console.log(userData.employees)
  return (
    <div className='bg-[#1C1C1C] p-5 w-full text-white'>
      <div className='flex justify-between bg-red-400 mb-2 rounded py-2 px-4'>
        <h2 className='text-lg font-medium w-1/5  rounded'>Employee Name</h2>
        <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
        <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
        <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
        <h5 className='text-lg font-medium w-1/5 '>Failed</h5>
      </div>
      <div className=''>
        {userData.map(function(elem,idx){
        return <div key={idx} className='flex justify-between mb-2 rounded py-2 px-4 border-2 border-emerald-500'>
        <h2 className='text-lg font-medium w-1/5 rounded'>{elem.firstname}</h2>
        <h3 className='text-lg font-medium w-1/5 text-blue-400'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='text-lg font-medium w-1/5 text-green-600 '>{elem.taskCounts.completed  }</h5>
        <h5 className='text-lg font-medium w-1/5 text-orange-600'>{elem.taskCounts.failed}</h5>
      </div>
      })}
      </div>
    </div>
  )
}

export default AllTask