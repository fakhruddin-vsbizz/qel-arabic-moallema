import React, { useContext } from "react";
import DisplayBatches from "../batches/DisplayBatches";
import AuthContext from "../store/auth-context";

const AssignBatchesTeacher = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;
  console.log(email);
  return <div>{email && <DisplayBatches emailUser={email} />}</div>;
};

export default AssignBatchesTeacher;
