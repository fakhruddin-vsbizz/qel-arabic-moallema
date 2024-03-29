import React, { useState, useEffect } from "react";
import Navigation from "../layout/Navigation";
import supabase from "@/supabaseClient";
import AddStudentToBatch from "../batches/AddStudentToBatch";
import { createClient } from "@supabase/supabase-js";
import DeleteConfirmation from "../layout/DeleteConfirmation";
import { useRouter } from "next/router";
import SuccessPrompt from "../layout/SuccessPrompt";

const StudentTeacherProfile = (props) => {
  const router = useRouter();
  const [profileData, setProfileData] = useState([{}]);
  const [batchdata, setBatchData] = useState([]);
  const [showRemoveUser, setShowRemoveUser] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);

  const [showAddBatch, setShowAddBatch] = useState(false);
  const type = props.role;

  useEffect(() => {
    supabase
      .from(`${props.role}`)
      .select("*")
      .eq("email", props.email)
      .then((response) => setProfileData(response.data));
  }, [submitted]);

  //getting the batch data for the student
  useEffect(() => {
    supabase
      .from("batch_student_relation")
      .select("*")
      .eq("student_id", props.email)
      .then((res) => setBatchData(res.data));
  }, [submitted]);

  //show/hide the pop-up form
  const addStudentToBatch = () => {
    setShowAddBatch((prev) => !prev);
  };
  const removeUserHandler = () => {
    setShowRemoveUser((prev) => !prev);
  };

  const deleteUserByEmail = async () => {
    const supabase1 = createClient(
      "https://cdwdhedavgkgpexhthtx.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkd2RoZWRhdmdrZ3BleGh0aHR4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3NDcwNTQ1MiwiZXhwIjoxOTkwMjgxNDUyfQ.nYUbBvX4zKMmpc2ECrl9Aznvqoa6J5YqQ8kIsYwWZ_M",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );
    if (profileData[0].type === "student") {
      //remove from the relation
      const { data1, error1 } = await supabase
        .from("batch_student_relation")
        .delete()
        .match({ student_id: profileData[0].email });

      //remove from the relation
      const { data4, error4 } = await supabase
        .from("assignments")
        .delete()
        .match({ student_id: profileData[0].email });

      //remove from the relation
      const { data3, error3 } = await supabase
        .from("students")
        .delete()
        .match({ email: profileData[0].email });
    }

    if (profileData[0].type === "instructor") {
      console.log("inside teacher");
      //remove from the relation
      const { data3, error3 } = await supabase
        .from("teachers")
        .delete()
        .match({ email: profileData[0].email });

      const { data4, error4 } = await supabase
        .from("batches")
        .delete()
        .match({ teacher_email: profileData[0].email });
    }

    if (profileData[0].type === "instructor") {
      console.log("inside teacher");
      //remove from the relation
      const { data3, error3 } = await supabase
        .from("teachers")
        .delete()
        .match({ email: profileData[0].email });
    }

    const { data, error } = await supabase1.auth.admin.listUsers();
    const userList = data.users;

    const deleteUser = userList.filter(
      (user) => user.email === profileData[0].email
    );

    const userId = deleteUser[0].id;
    console.log(userId);

    if (userId) {
      console.log("inside");
      const { data1, error1 } = await supabase1.auth.admin.deleteUser(userId);
      console.log(data1);
    }
    /////////////////////////////////////////////////////////////

    //remove from the student_teacher_varification
    const { data2, error2 } = await supabase
      .from("student_teacher_verification")
      .delete()
      .match({ email: profileData[0].email });

    setDeleteUser(true);
    router.replace("/");
  };

  return (
    <>
      <Navigation />

      <header className="flex flex-wrap"></header>
      {submitted && (
        <SuccessPrompt
          setSubmitted={setSubmitted}
          title="Batch Added Successfully to Student"
        />
      )}

      <div className="h-screen grid grid-cols-3">
        <div className="lg:col-span-2 col-span-3 bg-indigo-50 space-y-8 px-12">
          <div className="rounded-md mt-12">
            <form id="payment-form" method="POST" action="">
              <section>
                <h2 className="uppercase tracking-wide text-lg font-semibold text-gray-700 my-2">
                  User Profile
                </h2>
                <fieldset className="mb-3 bg-white shadow-lg rounded text-gray-600">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <h3 className="text-lg font-bold mb-3 text-center">
                      {profileData[0].name}
                    </h3>
                    <p className="text-gray-600 mb-3 text-center">
                      {profileData[0].type}
                    </p>
                    <ul className="list-none p-0">
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Name - </span>
                        <span name="name" className="focus:outline-none px-3">
                          {profileData[0].name}
                        </span>
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Email - </span>
                        <span name="email" className="focus:outline-none px-3">
                          {profileData[0].email}
                        </span>
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Address - </span>
                        <span name="city" className="focus:outline-none px-3">
                          Ujain
                        </span>
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Contact - </span>
                        <span
                          name="contact"
                          className="focus:outline-none px-3"
                        >
                          {profileData[0].contact}
                        </span>
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className="text-right px-2">Role - </span>
                        <span name="role" className="focus:outline-none px-3">
                          {profileData[0].type}
                        </span>
                      </label>
                      <label className="flex border-b border-gray-200 h-12 py-3 items-center">
                        <span className=" px-2">Enroll In -</span>
                        {batchdata.map((batch) => (
                          <span
                            name="role"
                            className="focus:outline-none px-3 border-x-2"
                            key={batch.id}
                          >
                            {batch.batch_id}
                          </span>
                        ))}
                      </label>
                    </ul>
                  </div>
                </fieldset>
              </section>
            </form>
          </div>
          <div className="rounded-m w-20d"></div>
          <button
            onClick={removeUserHandler}
            className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-red-600 hover:bg-yellow-600
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-orange-500 mt-4 mb-4"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
            Remove {profileData[0].type}
          </button>
          {type === "students" && (
            <button
              onClick={addStudentToBatch}
              type="submit"
              className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-dark-purple 
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-orange-500 mt-4 mb-4"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Add Student To Batch
            </button>
          )}
        </div>
        <div className="col-span-1 bg-white lg:block hidden">
          <h1 className="py-6 border-b-2 text-xl text-gray-600 px-8 text-center mt-2">
            User Avtar
          </h1>

          <div className="col-span-1 self-center mt-20">
            <img
              src="https://avatars2.githubusercontent.com/u/24622175?s=60"
              alt="User Avatar"
              className="w-64 h-64 rounded-full mx-auto mb-6"
            />
          </div>
        </div>
        {showAddBatch && (
          <AddStudentToBatch
            submit={setSubmitted}
            show={setShowAddBatch}
            studentEmail={profileData[0].email}
            batch={batchdata}
          />
        )}
        {showRemoveUser && (
          <DeleteConfirmation
            setSubmitted={setSubmitted}
            deleteUserPopup={deleteUser}
            title={`Remove ${profileData[0].type}`}
            desc={"You are removing the user permanently"}
            deleteUser={deleteUserByEmail}
            close={removeUserHandler}
          />
        )}
      </div>
    </>
  );
};

export default StudentTeacherProfile;
