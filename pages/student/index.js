import AllActivities from "@/components/Activity/AllActivities";
import HomeActivity from "@/components/Activity/HomeActivity";
import Navigation from "@/components/layout/Navigation";
import StudentSidebar from "@/components/Sidebar/StudentSidebar";
import AssignBatchesTeacher from "@/components/Teacher/AssignBatchesTeacher";
import bgImg from '@/components/src/teachersBatches5.png'

import React from "react";

const index = () => {
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <div className="flex">
          <StudentSidebar />
          <div className="flex-1 h-screen p-7 " style={{backgroundImage: `url(${bgImg.src})`,  backgroundSize: 'cover'}}>
            <AssignBatchesTeacher />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
