import Navigation from '@/components/layout/Navigation'
import TeacherSidebar from '@/components/Sidebar/TeacherSidebar'
import React from 'react'

const BatchProgressReport = () => {
  return (
    <div>
        <Navigation />
      <div className="flex">
      <TeacherSidebar/>
      <div  className="h-screen flex-1 p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="m-0" >
        Batch Progress Report
        </div>
        {/* ))} */}
      </div>
        
      </div>
      </div>
  )
}

export default BatchProgressReport