import React from 'react'
import CreateAnnouncement from '../Announcement/CreateAnnouncement'
import ShowAnnouncement from '../Announcement/ShowAnnouncement'

const Announcement = () => {
  return (
    <>
    <div className="">
      <div className=" md:grid md:grid-cols-4 md:gap-6">
        
        <div className="mt-4 md:col-span-2 ">
          {/* <form onSubmit={onBatchCreateHandler}> */}
           
            <CreateAnnouncement/>
          {/* </form> */}
        </div>
        <div className=" md:col-span-2">
        
          <ShowAnnouncement/>
        </div>
      </div>
    </div>
  </>
  )
}

export default Announcement