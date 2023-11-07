import StudentSidebar from "@/components/Sidebar/StudentSidebar";
import AssignBatchesTeacher from "@/components/Teacher/AssignBatchesTeacher";
<<<<<<< Updated upstream
import grayBgImg from '@/components/src/grayBgImg.png'
=======
import bgImg from "@/components/src/teachersBatches5.png";
>>>>>>> Stashed changes

import React, { useContext, useEffect, useState } from "react";
import supabase from "@/supabaseClient";
import AuthContext from "@/components/store/auth-context";
import NewStudentTeacherForm from "@/components/layout/NewStudentTeacherForm";

const index = () => {
  const authCtx = useContext(AuthContext);
  const emailId = authCtx.userEmail;

  const [profileUpdated, setProfileUpdated] = useState(false);

  supabase
    .from("students")
    .select("*")
    .match({ email: emailId })
    .then((res) => {
      if (res.data[0]) {
        if (res.data[0].name === "null") {
          console.log(res.data);
          console.log("inside");
          setProfileUpdated(false);
        } else {
          console.log("outside");
          setProfileUpdated(true);
        }
      }
    });

  return (
    <>
<<<<<<< Updated upstream
      <div>
        {/* <Navigation /> */}
        <div className="flex min-h-screen h-full " style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
          <StudentSidebar />
          <div className="flex-1 h-screen p-7  ">
            <AssignBatchesTeacher />
=======
      {!profileUpdated && <NewStudentTeacherForm type="students" />}
      {profileUpdated && (
        <div>
          <div className="flex">
            <StudentSidebar />
            <div
              className="flex-1 h-screen p-7 "
              style={{
                backgroundImage: `url(${bgImg.src})`,
                backgroundSize: "cover",
              }}
            >
              <AssignBatchesTeacher />
            </div>
>>>>>>> Stashed changes
          </div>
        </div>
      )}
    </>
  );
};

export default index;
