import AddStudentTeacher from "@/components/Student/AddStudentTeacher";
import React, { useContext } from "react";
import AuthContext from "@/components/store/auth-context";
import Navigation from "@/components/layout/Navigation";
import ManageStudentTeacherData from "@/components/Student/ManageStudentTeacherData";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import grayBgImg from "@/components/src/grayBgImg.png"

const index = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <>
        
     <div className="flex" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
      <AdminSidebar/>
      <div  className="flex-1 h-full p-7" >
      {/* {Menus.map((Menu, index) => ( */}
      {isLoggedIn && <Navigation />}
      {isLoggedIn && <AddStudentTeacher />}
      {isLoggedIn && <ManageStudentTeacherData />}
        {/* ))} */}
      </div>
      </div>
    </>
  );
};

export default index;
