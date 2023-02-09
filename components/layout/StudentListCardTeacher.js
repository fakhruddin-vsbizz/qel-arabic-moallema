import Link from "next/link";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const StudentListCardTeacher = ({ email, setAttendance, enrollStudents }) => {
  const [selectedStudent, setSelectedStudent] = useState([]);

  const handleChange = (event) => {
    const student = event.target.value;
    if (event.target.checked) {
      setSelectedStudent([...selectedStudent, student]);
    } else {
      setSelectedStudent(
        selectedStudent.filter(
          (selectedStudents) => selectedStudents !== student
        )
      );
    }
  };
  setAttendance(selectedStudent);

  return (
    <>
      {enrollStudents && (
        <div className="m-2">
          {enrollStudents.map((user) => (
            <div className="flex  text-sm font-medium text-gray-700 shadow sm:rounded-md p-2 ">
              <span className="mt-1 font-normal w-4/5  ">
                <img
                  class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                  src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                />
                {user.student_id}
              </span>

              <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
                <span className="mr-auto  text-gray-500 p-2   hover:text-gray-700   font-normal ">
                  Mark Attendance
                </span>
                <input
                  type="checkbox"
                  value={user.student_id}
                  onChange={handleChange}
                  checked={selectedStudent.includes(user.student_id)}
                  className="m-1"
                />
              </span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default StudentListCardTeacher;

{
  /* <span id="" className="mt-1 ml-10 font-semibold w-2/5  ">
            <span
              // onClick={removeStudentFromBatch}
              className="mr-auto  text-red-500 p-2  border border-red-500 rounded-sm hover:text-red-700   font-normal "
            >
              Joined
            </span>
<input type="checkbox" name="joined" id="" className="m-2" />
</span> */
}
