import supabase from "@/supabaseClient";
import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import AuthContext from "../store/auth-context";

const NewStudentTeacherForm = ({ type }) => {
  const nameRef = useRef();
  const contactRef = useRef();
  const router = useRouter();

  const authCtx = useContext(AuthContext);
  const emailId = authCtx.userEmail;

  const submitDetail = async (e) => {
    console.log("yess");
    e.preventDefault();

    const userName = nameRef.current.value;
    const contact = contactRef.current.value;

    console.log("name: ", userName);
    console.log("contact: ", contact);
    console.log("id: ", emailId);
    console.log("type: ", type);

    const { error } = await supabase
      .from(type === "students" ? "students" : "teachers")
      .update({ name: userName, contact: contact })
      .match({ email: emailId });

    let routeStudentTeacher =
      type === "students" ? "/student" : "/teacher/batches";
    router.push(routeStudentTeacher);
    console.log("okl");
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className=" w-fit m-5 p-10 border-2 rounded-lg shadow-md bg-slate-50">
          <div className="p-5">
            <h1 className="text-2xl">
              Please enter the name and contact info to proceed
            </h1>
          </div>
          <form onSubmit={submitDetail}>
            <div className="p-5">
              <div className="grid grid-cols-4 gap-5">
                <div className="col-span-1">
                  <label htmlFor="name pt-3">Name</label>
                </div>
                <div className="col-span-3">
                  <input
                    type="text "
                    ref={nameRef}
                    name="name"
                    id="name"
                    required
                    className="p-2 bg-transparent rounded-md border-2 border-gray-500 w-full"
                  />
                </div>
              </div>
              <div className="grid grid-cols-4 gap-5 my-5">
                <div className="col-span-1">
                  <label htmlFor="contact pt-3">Contact</label>
                </div>
                <div className="col-span-3">
                  <input
                    type="number "
                    ref={contactRef}
                    name="contact"
                    required
                    id="contact"
                    className="p-2 bg-transparent rounded-md border-2 border-gray-500 w-full"
                  />
                </div>
              </div>

              <div className="w-96">
                <button className="px-5 py-2 w-full mx-20 mt-5 text-white bg-blue-500 hover:bg-blue-700 rounded-md">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default NewStudentTeacherForm;
