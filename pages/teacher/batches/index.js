import Navigation from "@/components/layout/Navigation";
import React, { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import AssignBatchesTeacher from "@/components/Teacher/AssignBatchesTeacher";

const index = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.userType;
  const email = authCtx.userEmail;
  console.log("Email: ", email);
  console.log("type:", type);
  console.log("LoggedIn: ", authCtx.isLoggedIn);
  return (
    <>
      {
        <div>
          <Navigation />
          <div className="flex">
            <TeacherSidebar />
            <div className="h-screen flex-1 p-7">
              <div className="m-0">
                <AssignBatchesTeacher />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default index;
