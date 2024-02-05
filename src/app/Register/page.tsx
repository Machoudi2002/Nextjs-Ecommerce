import RegisterForm from '@/Components/RegisterForm'
import React from 'react'

const page = () => {
  return (
    <div className='my-24'>
        <h1 className='text-2xl text-center font-bold my-10'>Create New Account</h1>
        <RegisterForm />
    </div>
  )
}

export default page