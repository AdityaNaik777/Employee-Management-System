import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {
  // const [userName, setUserName] = useState('')
  // if(!data){
  //   setUserName('Admin')
  // }else{
  //   setUserName(data.firstName)
  // }

  const logoutUser=()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-semibold'>Hello <span className='text-3xl font-bold'>ji</span></h1>
      <button className='bg-red-500 text:lg font-medium text-white px-5 py-3 rounded-sm' onClick={logoutUser}>Log Out</button>
    </div>
  )
}

export default Header