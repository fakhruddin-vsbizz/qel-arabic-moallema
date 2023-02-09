import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

const TeacherSignUp = () => {
  const router = useRouter();
  const [isError, setIsError] = useState(false);

  const path = router.pathname;
  const user =
    path === "/admin/students/add-student" ? "Student" : "Instructor";

  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();
  const contactRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();

    //getting the values
    const enteredEmailValue = emailRef.current.value;
    const enteredPasswordValue = passwordRef.current.value;
    const enteredName = nameRef.current.value;
    const enteredContact = contactRef.current.value;

    //Checking the whether the user is invited or not
    //and email is verfied

    const { data, error } = await supabase
      .from("student_teacher_verification")
      .select("email")
      .eq("email", enteredEmailValue);

    let emailIsValid = data[0] ? true : false;

    if (emailIsValid) {
      const { data1, error1 } = await supabase.auth.updateUser({
        email: enteredEmailValue,
        password: enteredPasswordValue,
        data: { type: "instructor" },
      });

      const { data, error } = await supabase.auth.signUp({
        email: enteredEmailValue,
        password: enteredPasswordValue,
        options: {
          data: {
            type: "instructor",
          },
        },
      });

      const { errorTable } = await supabase
        .from("teachers")
        .insert({
          email: enteredEmailValue,
          name: enteredName,
          contact: enteredContact,
          type: "instructor",
        })
        .select();

      console.log(errorTable);

      if (error) {
        console.log(error);
        return;
      }
      //after user validation happens
      router.push("/");
    } else {
      setIsError(true);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
            Fill the details to rgister your profile
          </h2>
        </div>
        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                ref={emailRef}
                required
                className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-t-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm mt-4 mb-4"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                ref={passwordRef}
                className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm mr-11 mt-4 mb-4"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="Name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                ref={nameRef}
                className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm mr-4 mt-4 mb-4"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="Contact" className="sr-only">
                Contact
              </label>
              <input
                id="Contact"
                name="Contact"
                type="Contact"
                ref={contactRef}
                className="appearance-none rounded-none relative block
              w-full px-3 py-2 border border-gray-300
              placeholder-gray-500 text-gray-900 rounded-b-md
              focus:outline-none focus:ring-indigo-500
              focus:border-indigo-500 focus:z-10 sm:text-sm mt-4 mb-4"
                placeholder="+91 7000094869"
              />
            </div>
          </div>
          {isError && <p>Please Enter Correct Email</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center
            py-2 px-4 border border-transparent text-sm font-medium
            rounded-md text-white bg-indigo-600 hover:bg-indigo-700
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-indigo-500 mt-4 mb-4"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignUp;
