import AllActivities from "@/components/Activity/AllActivities";
import HomeActivity from "@/components/Activity/HomeActivity";
import Navigation from "@/components/layout/Navigation";
import StudentSidebar from "@/components/Sidebar/StudentSidebar";
import AssignBatchesTeacher from "@/components/Teacher/AssignBatchesTeacher";
import grayBgImg from '@/components/src/grayBgImg.png'

import React from "react";

const index = () => {
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <div className="flex min-h-screen h-full " style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
          <StudentSidebar />
          <div className="flex-1 h-screen p-7  ">
            <AssignBatchesTeacher />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
