import Batches from "@/components/batches/Batches";
import Navigation from "@/components/layout/Navigation";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import React from "react";

const index = () => {
  return (
    <>
      <div className="">
        {/* <Navigation /> */}
        <div className="flex">
      <AdminSidebar/>
      <div className="flex items-center justify-center ">
          
          <Batches />
        </div>
        
      </div>
        
      </div>
    </>
  );
};

export default index;
