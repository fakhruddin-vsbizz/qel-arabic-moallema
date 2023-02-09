import AddStudentTeacher from "@/components/Student/AddStudentTeacher";
import React, { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import Navigation from "@/components/layout/Navigation";
import ManageStudentTeacherData from "@/components/Student/ManageStudentTeacherData";

const index = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
      {isLoggedIn && <Navigation />}
      {isLoggedIn && <AddStudentTeacher />}
      {isLoggedIn && <ManageStudentTeacherData />}
    </>
  );
};

export default index;
