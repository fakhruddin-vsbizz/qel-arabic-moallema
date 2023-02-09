import React, { useContext, useEffect } from "react";
import StudentProgressCards from "../layout/StudentProgressCards";
import supabase from "@/supabaseClient";
import AuthContext from "../store/auth-context";
import StudentListBatch from "../Student/StudentListBatch";

const StudentProgress = () => {
  const auth = useContext(AuthContext);
  const emailUser = auth.userEmail;
  if (emailUser) {
    useEffect(() => {
      supabase
        .from("batches")
        .select("*")
        .eq("teacher_email", emailUser)
        .then((res) => auth.setBatchesData(res.data));
    }, []);
  }

  console.log(auth.batchesList);
  return (
    <>
      <div className="text-center">
        <h2 className=" text-center text-2xl font-extrabold text-dark-purple mb-10 ">
          Student Progress
        </h2>
        {auth.batchesList.map((batch) => (
          <StudentProgressCards name={batch.batch_name} />
        ))}
      </div>
      <div>
        <StudentListBatch />
      </div>
    </>
  );
};

export default StudentProgress;

// useEffect(() => {
//     fetch("/api/batch-detail-teacher").then((data) => console.log(data)
//     );
//   }, []);
