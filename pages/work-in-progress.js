import Link from 'next/link'
import React from 'react'

const workInProgress = () => {
  return (
    <div className='justify-center m-10 text-center align-middle'>
  
        <h1 className='m-5'>work-in-progress</h1>
        <img src="https://cdn-icons-png.flaticon.com/512/5038/5038308.png" alt="" className='mx-auto my-5 w-80 h-fit' />
        <Link href="/student" className='p-2 mt-5 text-white bg-blue-500' > {`<=`} Go Back</Link>
    </div>
  )
}

export default workInProgress