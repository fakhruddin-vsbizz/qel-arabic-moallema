import DisplayBatches from '@/components/batches/DisplayBatches'
import Navigation from '@/components/layout/Navigation'
import TeacherSidebar from '@/components/Sidebar/TeacherSidebar'
import Announcement from '@/components/Teacher/Announcement'
import React from 'react'

const MakeAnnouncements = () => {
  return (
    <div>
        <Navigation />
      <div className="flex">
      <TeacherSidebar/>
      <div  className="flex-1 h-screen p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="m-0" >
        Make Announcements
        <Announcement/>
        </div>
        {/* ))} */}
      </div>
        
      </div>
    </div>
  )
}

export default MakeAnnouncements