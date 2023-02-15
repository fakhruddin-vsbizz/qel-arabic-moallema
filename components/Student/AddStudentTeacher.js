import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import csrf from "csrf-token";
import axios from "axios";

const apiKey =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOTlkMzJjYTFlZGVlZmIyMmUzZGNmYWYxNjUwNDdmMGQzYTViNTdlMThhZDFlOGIwN2FiMGVlYzdmNTc0ZDVjY2FjYmQ4NzI1ZTIwZTE1MmEiLCJpYXQiOjE2NzYyODQ2OTMuNzA1OTE3LCJuYmYiOjE2NzYyODQ2OTMuNzA1OTE4LCJleHAiOjQ4MzE5NTgyOTMuNzAwMzYsInN1YiI6IjM1MTA3NCIsInNjb3BlcyI6W119.fOFl0kYuzm4yF2pco2MmJ604FjJm6pfiPtw07o-WmmRuk130QnLqAJptoDsQphkSlK37UmQB6olejt9ePICQ52rvnCOcbLuu-uxL--h1ow5yuZDJ1AnSIPxYGZL74cxrUudd1Pgku5VbtJhsvlLQEhRQp18eY7xQAisBeM49WLQTczUfAh0B7ztIqxGQ-jOpPCK8xTiGz4RI9p9b9T68cYza0NZQ1b6OsNks8Jv-H5KkBYckfvDZLgGMCgOAjE1kOdHOhB-mdX6an3XUHImfX2Ea4dAfUpy5DzlZb_Re1f8tbIj_9P1UhxMfHCX11ZKLUaO_-JvMxUFk41zOWfJoeqe6Lx71g9YeP5aBkxLosWtHo-gB651yE27Chsv553__0fAFjB2YKfCAEGyIfxa8y9gzztHOyAyHk2SAxKUrif7X74cD7jnHkzFOdWvDDtLCTOLIv8E7ZqktmkuditrbkfL66qOUS46SHZSdneBgxnfW7ycxujP1gXcfnJETKopvYx-VFVxKxlOUnB54D7ZRmYprrs7jiGpoC-WrNVaNRqeR9Rbgr0Ypqn36kc5XC4Kw-VPAoazTWZ--UHiJvTGl4xx7BFpNPeXkedUPZNhwhiDOCtHWFNkQEf7rq31MNsXCmKVArRR9jelneyIm7XTUBh3Lkau4vd_G0rzubNzM9jE";

const instructor = 79992404802799400;
const studentGroup = 79992375630366290;

const AddStudentTeacher = () => {
  const [showForm, setShowForm] = useState(false);
  const [errorState, setError] = useState(false);
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

    console.log(data);

    supabase
      .from("student_teacher_verification")
      .select("*")
      .match({ email: enteredEmailValue })
      .then((res) => {
        if (res.data[0]) {
          console.log("inside first if");
          setError((prev) => !prev);
        } else {
          console.log("else");
          setError((prev) => !prev);
        }
      });
    console.log("okl");
    if (errorState == true) {
      console.log("inside second if");
    }

    if (!error) {
      const { errorTable } = await supabase
        .from("student_teacher_verification")
        .insert({
          email: enteredEmailValue,
          type: user === "instructor" ? "teachers" : "students",
        })
        .select();
    }

    console.log("error", errorState);
    if (error) {
      console.log(error);
      return;
    }

    if (user === "student" && errorState) {
      router.replace(
        `/admin/students/add-student/sendInvite/${enteredEmailValue}`
      );
    } else if (user === "instructor" && errorState) {
      router.replace(
        `/admin/teachers/add-teacher/sendInvite/${enteredEmailValue}`
      );
    }
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
                    {errorState && (
                      <p className=" text-red-500 mb-4">
                        {" "}
                        User Already Invited
                      </p>
                    )}
                    <button
                      className="bg-dark-purple hover:bg-dark-purple text-white py-2 px-4 rounded"
                      type="submit"
                    >
                      Send Request
                    </button>
                    <button
                      className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-4"
                      onClick={() => {
                        setShowForm(false);
                        setError(false);
                      }}
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

// fetch("https://api.mailerlite.com/api/v2/groups/student/subscribers", {
//   mode: "no-cors",
//   method: "POST",
//   headers: {
//     accept: "application/json",
//     "X-MailerLite-ApiDocs": "true",
//     "content-type": "application/json",
//     "X-MailerLite-ApiKey":
//       "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZjVhMzRhNGYyMzE1N2RmZGZiMjg3ZWNiY2U5OTY1ZjgxNTlhMDJhMTQyOGUwODVmYzE5OWNhNThmMTI2ZGFlODAyNTNhYWVmYjgzMzg1ZWIiLCJpYXQiOjE2NzYyNjkwNzMuNjAyNjQxLCJuYmYiOjE2NzYyNjkwNzMuNjAyNjQyLCJleHAiOjQ4MzE5NDI2NzMuNTk4MDE3LCJzdWIiOiIzNTEwNzQiLCJzY29wZXMiOltdfQ.TaPlkb_KNka-53ofBJ950BknTl2SoVnZ-HYCFvdQrJEOu578MzqGGZK6ERoWAwSgmbapWdqT5tFT1TDHsFJw34Pdbbl6fHKaJMugywReD0OxISHfukP04agt8tW7BxY-HzeyNJVc-6YXnz9XlMReWpKKEDfQ_x7TDwS5Kxf9DdcWQXkDZxIcGoksLqun9YXUSEXSM4kGSnQaVOalceEtd964EQxF6ZsixpOTLOmd6SYhKiQ1mZVdc6_0VH1Gbtp9-P9WZD0H_Rzft5uC4yHNdwoCXmWjXQRS0mcwlvMdb18gVyFh0C4X1jyoGHtMDQtyCZlQuENQq5uAj9Xcv59yKwMAcxq5PQn8kfyva48Eksm1wUJv2r1bTR9tax7MWZ_UbWO5VAEEugryz3wPb6KwCqUQ_nkLMZ6fVxanJCYTYzWdUcrMhJEzw8NeH2dw0UahC9vTdx8-y1d77mv_xInMhp08i8VN5JZ5s4A_7RbhCp-kZYpV3WtpidLEk3jivkFNzAci-HdsDK3qVwIv7mv9QuvrY6OGSKAZC0Yq49lVHjBz2jNOLHMm3ksy6gdBL6CG7zZy_yz-8QkQUYbpXYZiCF9Ki4JOhB0-KZ8jFMTA96tvpudnD7jOXL7Aavc2uJZARqth8j49c8h79Ek-JRIUYbKidaIN1P8EBTv7BuSD6DI",
//   },
//   body: JSON.stringify({
//     email: "someshanjana26@gmail.com",
//     fields: {
//       first_name: "John",
//       last_name: "Doe",
//     },
//     type: "active",
//   }),
// })
//   .then((response) => response)
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// return;

// const token = csrf.createSync("I like secure forms");
// console.log("token: ", token);
// const instance = axios.create({
//   baseURL: "https://connect.mailerlite.com/",
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Headers": "*",
//     "X-CSRF-Token": token,
//     accept: "application/json",
//     "X-MailerLite-ApiDocs": "true",
//     "content-type": "application/json",
//     "X-MailerLite-ApiKey": apiKey,
//   },
// });

// const options = {
//   method: "POST",
//   data: {
//     email: "someshanjana@gmail.com",
//     resubscribe: false,
//     autoresponders: true,
//     type: "active",
//     name: "null",
//   },
// };

// instance
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

// return;
