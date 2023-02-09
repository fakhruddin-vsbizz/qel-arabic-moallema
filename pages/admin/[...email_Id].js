import StudentTeacherProfile from "@/components/Student/StudentTeacherProfile";
import { useRouter } from "next/router";
import React from "react";

const TeacherProfile = () => {
  const router = useRouter();

  const id = router.query.email_Id[1];
  const role = router.query.email_Id[2];

  console.log(role);
  console.log(router.query.email_Id[1]);
  return <StudentTeacherProfile email={id} role={role} />;

  // return <StudentTeacherProfile email={id} role={role} />;
};

export default TeacherProfile;
