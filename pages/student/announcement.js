import ShowAnnouncement from '@/components/Announcement/ShowAnnouncement'
import Navigation from '@/components/layout/Navigation'
import StudentSidebar from '@/components/Sidebar/StudentSidebar'
import React from 'react'

const announcement = () => {
  return (
    <div>
        
        <Navigation />
        <div className="flex">
          <StudentSidebar />
          <div className="flex-1 h-screen p-7 bg-slate-300">
          <ShowAnnouncement/>
          </div>
        </div>
      
        
    </div>
  )
}

export default announcement