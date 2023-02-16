import Card from "@/components/layout/Card";
import Navigation from "@/components/layout/Navigation";
import AuthContext from "@/components/store/auth-context";
import AdminSidebar from "@/components/Sidebar/AdminSidebar";
import grayBgImg from "@/components/src/grayBgImg.png"
import React, { useContext } from "react";


const Admin = () => {
  const authCtx = useContext(AuthContext);
  console.log("LoggedIn: ", authCtx.isLoggedIn);

  return (
    <>
      <div className=" "  >
        <div className="h-screen ">
          {authCtx.isLoggedIn && (
            <div>
              {/* <Navigation /> */}
              <div className="flex" style={{backgroundImage: `url(${grayBgImg.src})`, backgroundAttachment: 'fixed', backgroundSize: "100%", backgroundPosition: 'center top'}}>
                <AdminSidebar />
                <div className="flex-1 h-full min-h-screen p-7 ">
                  {/* {Menus.map((Menu, index) => ( */}
                  <div className="text-center"></div>
                  <div className="flex items-center justify-center mt-36">
                    <Card /> 
                  </div>
                </div>
              </div>
            </div>
          )}

          {!authCtx.isLoggedIn && <p>Admin Not Logged In</p>}
        </div>
      </div>
    </>
  );
};

export default Admin;
