import React from 'react'
import Card from '../layout/Card'
import ShowAnnouncemetCard from '../layout/ShowAnnouncemetCard'

const ShowAnnouncement = () => {
  return (
    <>
    {/* <div className="mt-10 sm:mt-20 bg-gray-50"> */}
    <div className="items-center justify-center p-4 overflow-auto h-96 snap-y">
            <h2 className="px-4 py-5 mb-4 text-3xl font-medium leading-6 text-gray-800">
              Announcement
            </h2>
            {/* <p className="mt-1 text-gray-600 text-sms">
              Announcement Card
            </p> */}
            <ShowAnnouncemetCard  title="Announcemet 1" msg="Discription massage" postDate="12/02/2023" />
            <ShowAnnouncemetCard  title="Announcemet 2" msg="Discription 2 massage" postDate="12/02/2023" />
            <ShowAnnouncemetCard  title="Announcemet 1" msg="Discription massage" postDate="12/02/2023" />
            <ShowAnnouncemetCard  title="Announcemet 2" msg="Discription 2 massage" postDate="12/02/2023" />
            <ShowAnnouncemetCard  title="Announcemet 1" msg="Discription massage" postDate="12/02/2023" />
            <ShowAnnouncemetCard  title="Announcemet 2" msg="Discription 2 massage" postDate="12/02/2023" />
          
          </div>
    {/* </div> */}
  </>
  )
}

export default ShowAnnouncement