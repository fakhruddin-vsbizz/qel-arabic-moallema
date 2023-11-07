import React, { useContext, useState } from "react";
import NewStudentTeacherForm from "@/components/layout/NewStudentTeacherForm";
import AuthContext from "@/components/store/auth-context";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import AssignBatchesTeacher from "@/components/Teacher/AssignBatchesTeacher";
<<<<<<< Updated upstream
import grayBgImg from "@/components/src/grayBgImg.png"
=======
import supabase from "@/supabaseClient";
>>>>>>> Stashed changes

const index = () => {
  const authCtx = useContext(AuthContext);
  const [profileUpdated, setProfileUpdated] = useState(false);

  const type = authCtx.userType;
  const email = authCtx.userEmail;

  supabase
    .from("teachers")
    .select("*")
    .match({ email: email })
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
      {!profileUpdated && <NewStudentTeacherForm type="teachers" />}
      {profileUpdated && (
        <div>
          {/* <Navigation /> */}
          <div className="flex" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
            <TeacherSidebar />
            <div className="h-screen flex-1 p-7">
              <div className="m-0">
                <AssignBatchesTeacher />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default index;
