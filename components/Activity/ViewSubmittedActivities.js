import React, { useContext, useState, useEffect } from "react";
import AuthContext from "@/components/store/auth-context";
import supabase from "@/supabaseClient";
import ActivityCard from "../layout/ActivityCard";

const ViewSubmittedActivities = () => {
  const authCtx = useContext(AuthContext);
  const id = authCtx.userEmail;

  const [activityData, setActivityData] = useState([]);

  // *****************activity submission*************************** */
  if (authCtx) {
    useEffect(() => {
      supabase
        .from("assignments")
        .select("*")
        .eq("student_id", id)
        .then((res) => setActivityData(res.data));
    }, [id]);
  }

  console.log(activityData);
  return (
    <>
      <div className="flex justify-center items-center mt-20">
        {activityData.map((data) => (
          <ActivityCard key={data.id} path={data.submission} />
        ))}
      </div>
    </>
  );
};

export default ViewSubmittedActivities;
