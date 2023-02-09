import AuthContext from "@/components/store/auth-context";
import React, { useContext } from "react";

const Home = () => {
  const authCtx = useContext(AuthContext);

  return (
    <>
      {authCtx.isLoggedIn && (
        <div>
          <h1 className="text-center">Instructors Page</h1>
        </div>
      )}
    </>
  );
};
export default Home;
