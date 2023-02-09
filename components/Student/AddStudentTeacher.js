import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const AddStudentTeacher = () => {
  const [showForm, setShowForm] = useState(false);
  const router = useRouter();
  const path = router.pathname;
  const user =
    path === "/admin/students/add-student" ? "student" : "instructor";

  const emailRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    //getting the values
    const enteredEmailValue = emailRef.current.value;

    //NOTE-->inviteUserByEmail this method is not working as we wanted(unable to redirect the email)
    // const { data, error } = await supabase.auth.admin.inviteUserByEmail(
    //   enteredEmailValue,
    //   {
    //     options: {
    //       emailRedirectTo: "http://localhost:3000/studentaccount",
    //     },
    //   }
    // );

    //NOTE-> as a alternative to the above method we are using this method to add the user.

    const { data, error } = await supabase.auth.signUp({
      email: enteredEmailValue,
      password: "hjkjhk@345435dfjgA__DioiOOPP45666$KKlop_O",
      options: {
        emailRedirectTo:
          user === "student"
            ? "http://localhost:3000/studentaccount"
            : "http://localhost:3000/teacheraccount",
      },
    });

    if (!error) {
      const { errorTable } = await supabase
        .from("student_teacher_verification")
        .insert({
          email: enteredEmailValue,
        })
        .select();
    }

    if (error) {
      console.log(error);
      return;
    }

    console.log(data);

    //after user validation happens
    router.push("/admin");
  };

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
              Manage {user} Of Your Organization
            </h2>
          </div>
          <div className="item-center">
            {showForm && (
              <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                <div className="fixed inset-0 transition-opacity">
                  <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>
                <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
                  <form onSubmit={submitHandler} className="px-10 py-10">
                    <div className="mb-5">
                      <label className="block font-medium mb-2" htmlFor="email">
                        Email
                      </label>
                      <input
                        className="w-full border border-gray-300 rounded-lg p-2"
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="Your email"
                        ref={emailRef}
                        required
                      />
                    </div>
                    <button
                      className="bg-dark-purple hover:bg-dark-purple text-white py-2 px-4 rounded"
                      type="submit"
                    >
                      Send Request
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-4"
                      onClick={() => setShowForm(false)}
                    >
                      Close
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <button
        className="group relative float-right mr-20 
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-dark-purple hover:bg-dark-purple
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500 mb-4"
        onClick={() => setShowForm(true)}
      >
        Add {user}
      </button>
    </>
  );
};

export default AddStudentTeacher;

// const { data, error } = await supabase.auth.signUp({
//   email: enteredEmailValue,
//   password: enteredPasswordValue,
//   options: {
//     data: {
//       first_name: enteredName,
//       contact: enteredContact,
//       type: path === "/admin/add-student" ? "student" : "instructor",
//     },
//   },
// });
