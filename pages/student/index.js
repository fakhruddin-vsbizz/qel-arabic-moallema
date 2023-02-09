import AllActivities from "@/components/Activity/AllActivities";
import HomeActivity from "@/components/Activity/HomeActivity";
import Navigation from "@/components/layout/Navigation";
import StudentSidebar from "@/components/Sidebar/StudentSidebar";
import React from "react";

const index = () => {
  return (
    <>
      <div>
        {/* <Navigation /> */}
        <div className="flex">
          <StudentSidebar />
          <div className="flex-1 h-screen p-7 bg-slate-300">
            {/* {Menus.map((Menu, index) => ( */}
            <div className="m-0">
              <AllActivities   />
            </div>
            <div className="w-full h-full py-5 lg:h-screen bg-slate-400">
              <HomeActivity              
               />
            </div>
            {/* ))} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
