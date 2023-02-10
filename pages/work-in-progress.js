import Link from 'next/link'
import React from 'react'

const workInProgress = () => {
  return (
    <div className='m-10 text-center'>
        <h1 className='m-5'>work-in-progress</h1>
        <Link href="/student" className='p-2 mt-5 text-white bg-blue-500' >Go Back</Link>
    </div>
  )
}

export default workInProgress