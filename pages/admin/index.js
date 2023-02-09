import Card from "@/components/layout/Card";
import Navigation from "@/components/layout/Navigation";
import AuthContext from "@/components/store/auth-context";
import React, { useContext } from "react";

const Admin = () => {
  const authCtx = useContext(AuthContext);
  console.log("LoggedIn: ", authCtx.isLoggedIn);

  return (
    <>
      <div className=" bg-slate-300">
        <div className="h-screen ">
          {authCtx.isLoggedIn && (
            <div>
              <Navigation />
              <div className="text-center"></div>
              <div className="flex justify-center items-center mt-36">
                <Card />
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
