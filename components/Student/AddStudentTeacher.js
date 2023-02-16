import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import LoadingSpinner from "../layout/LoadingSpinner";

const AddStudentTeacher = () => {
  const [dataInserted, setInserted] = useState(false);

  const router = useRouter();
  const path = router.pathname;
  const userPath =
    path === "/admin/students/add-student" ? "student" : "instructor";

  let users;

  if (userPath === "student") {
    users = [{ email: "jayanjana51@gmail.com" }];
  } else {
    users = [{ email: "jayanjana51@gmail.com" }];
  }

  async function handleSubmit() {
    setInserted(true);

    const promises = users.map(async (user) => {
      const password = uuidv4() + "@123AM"; // Generate a unique password for each user
      const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: password,
        options: {
          data: {
            type: userPath,
          },
        },
      });

      if (error) {
        throw new Error(`Error creating user ${user.email}: ${error.message}`);
      }
      await axios
        .post("/api/send-email", {
          email: user.email,
          password,
          userPath,
        })
        .then((res) => console.log("res: ", res))
        .catch((err) => console.log("error: ", err));

      setInserted(false);
      console.log(`User ${data.email} created successfully`);
    });
    try {
      await Promise.all(promises);
      console.log("All users created successfully");
      await new Promise((resolve) => setTimeout(resolve, 30000));
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt="Workflow"
            />
            <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-800">
              Manage {userPath} Of Your Organization
            </h2>
          </div>
        </div>
      </div>
      <div
        className="group absolute ml-96
            py-2 px-4 border border-transparent text-sm font-medium"
      >
        {dataInserted && <LoadingSpinner />}
      </div>

      <button
        className="group relative float-right mr-20 
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-dark-purple hover:bg-dark-purple
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500 mb-4"
        onClick={handleSubmit}
      >
        Add {userPath}
      </button>
    </>
  );
};

export default AddStudentTeacher;
