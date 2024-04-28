import React from 'react'
import notfound from '../images/Hands Contact.png'
const NotFound = () => {
  return (
    <div className=' absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col justify-center items-center'>
      <img src={notfound} alt="" />
      <h1 className='text-md mt-3'>Contacts Not Found!</h1>
    </div>
  )
}

export default NotFound
