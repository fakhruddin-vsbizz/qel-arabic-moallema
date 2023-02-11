import Link from "next/link";
import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const StudentListCard = ({
  email,
  type,
  batch,
  enrollStudents,
  click,
  typeTeacher,
}) => {
  const router = useRouter();

  const [added, setAdded] = useState(false);

  let present = enrollStudents.find((batch) => batch.student_id === email);

  const studentProfile = () => {
    router.push(`admin/${email}/students`);
  };

  const addStudentToBatch = async () => {
    const { data, error } = await supabase
      .from("batch_student_relation")
      .insert({ student_id: email, batch_id: batch })
      .select();
    setAdded(true);
    click((prev) => !prev);
  };

  const removeStudentFromBatch = async () => {
    console.log("removed");
    const { data, error } = await supabase
      .from("batch_student_relation")
      .delete()
      .match({ student_id: email, batch_id: batch });

    if (error) {
      console.log(error);
    }
    click((prev) => !prev);
  };

  return (
    <>
      {type === "addedStudents" && (
        <div className="m-2">
          <div className="flex p-2 text-sm font-medium text-gray-700 shadow sm:rounded-md ">
            <span className="w-4/5 mt-1 font-normal ">
              <img
                class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
              {email}
            </span>
            <span id="" className="w-2/5 mt-1 ml-10 font-semibold ">
              {" "}
              <button
                onClick={studentProfile}
                className="px-2 ml-5 mr-auto font-normal text-blue-500 hover:text-blue-700 "
              >
                View
              </button>
              <button
                onClick={removeStudentFromBatch}
                className="px-2 mr-auto font-normal text-red-500 hover:text-red-700 "
              >
                Remove
              </button>
            </span>
          </div>
        </div>
      )}
      {type !== "addedStudents" && (
        <div className="m-2">
          <div className="flex p-2 text-sm font-medium text-gray-700 shadow sm:rounded-md ">
            <span className="w-4/5 mt-1 font-normal ">
              <img
                class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              />
              {email}
            </span>
            <span id="" className="mt-1 ml-2 font-semibold ">
              {present && <span className="text-red-500 ">Enrolled</span>}
            </span>
            <span id="" className="mt-1 ml-2 font-semibold ">
              {!present && !added && (
                <button
                  onClick={!added && addStudentToBatch}
                  className="inline-flex justify-center px-2 py-1 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {!added && <span className="px-1 font-bold ">+</span>}
                </button>
              )}
            </span>
            {added && !present && <LoadingSpinner />}
          </div>
        </div>
      )}
    </>
  );
};

export default StudentListCard;
