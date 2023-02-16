import Batches from "@/components/batches/Batches";
import Navigation from "@/components/layout/Navigation";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import React from "react";
import grayBgImg from "@/components/src/grayBgImg.png"

const index = () => {
  return (
    <>
      <div className="" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
        {/* <Navigation /> */}
        <div className="flex">
      <AdminSidebar/>
      <div className="flex items-center justify-center " >
          
          <Batches />
        </div>
        
      </div>
        
      </div>
    </>
  );
};

export default index;
