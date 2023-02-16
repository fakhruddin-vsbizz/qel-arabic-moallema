import AnnouncementForm from "@/components/Announcement/AnnouncementForm";
import Navigation from "@/components/layout/Navigation";
import Announcement from "@/components/Teacher/Announcement";
import AdminSidebar from '@/components/Sidebar/AdminSidebar'
import React from "react";
import grayBgImg from "@/components/src/grayBgImg.png"

const index = () => {
  return (
    <div className="min:h-screen h-full"  style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
      {/* <Navigation /> */}
      <div className="flex">
      <AdminSidebar 
       />
      <div  className="flex-1 h-full p-7">
      {/* {Menus.map((Menu, index) => ( */}
        <div className="p-0 m-0" >
        <Announcement/>
        </div>
        {/* ))} */}
      </div>
        
      </div>

    </div>
  );
};

export default index;
