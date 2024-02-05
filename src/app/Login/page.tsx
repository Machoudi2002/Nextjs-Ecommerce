import LoginForm from '@/Components/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div className='my-24'>
        <h1 className='text-2xl text-center font-bold my-10'>Login To Your Account</h1>
        <LoginForm />
    </div>
  )
}

export default page