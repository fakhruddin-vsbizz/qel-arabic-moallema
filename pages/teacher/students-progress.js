import Navigation from "@/components/layout/Navigation";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import StudentProgress from "@/components/Teacher/StudentProgress";
import React from "react";
import grayBgImg from "@/components/src/grayBgImg.png"

     

const StudentsProgress = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="flex" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
        <TeacherSidebar />
        <div className="flex-1 h-screen p-7 ">
          {/* {Menus.map((Menu, index) => ( */}
          <div className="m-0">
          Students Progress
            <StudentProgress />
          </div>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default StudentsProgress;
