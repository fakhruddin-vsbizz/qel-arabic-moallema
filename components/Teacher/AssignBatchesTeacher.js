import React, { useContext } from "react";
import DisplayBatches from "../batches/DisplayBatches";
import AuthContext from "../store/auth-context";

const AssignBatchesTeacher = () => {
  const authCtx = useContext(AuthContext);
  const type = authCtx.userType;
  const email = authCtx.userEmail;
  console.log(type);
  return (
    <div>
      {type && email && <DisplayBatches typeUser={type} email={email} />}
    </div>
  );
};

export default AssignBatchesTeacher;
