import supabase from "@/supabaseClient";
import React, { useContext, useEffect } from "react";
import Link from "next/link";
import AuthContext from "../store/auth-context";
import { useRouter } from "next/router";

const CourseCard = ({ title, book, id, path }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg items-center justify-center bg-white">
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base">Book Name - {book}</p>

      <div className="bg-gray-100 mt-4 py-2">
        <Link
          href={`${path}/batch-detail/${id}`}
          className="inline-flex justify-center rounded-md border border-transparent bg-dark-purple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-dark-purple focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          See Details
        </Link>
      </div>
    </div>
  </div>
);
const DisplayBatches = ({ emailUser }) => {
  const auth = useContext(AuthContext);

  const router = useRouter();
  const path = router.pathname;

  //getting the data for batches
  console.log(emailUser);
  if (!emailUser) {
    console.log("outside");
    useEffect(() => {
      supabase
        .from("batches")
        .select("*")
        .then((res) => auth.setBatchesData(res.data));
    }, []);
  } else if (emailUser) {
    console.log("inside email");
    useEffect(() => {
      supabase
        .from("batches")
        .select("*")
        .eq("teacher_email", emailUser)
        .then((res) => auth.setBatchesData(res.data));
    }, []);
  }

  console.log(auth.batchesList);

  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto mt-10"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-2xl font-extrabold text-gray-800">
          {!emailUser && <p>Manage Batches Of Your Organization</p>}
          {emailUser && <p>Manage Your Batches</p>}
        </h2>
      </div>
      <div className="w-full  h-screen bg-slate-300">
        <div className="flex flex-wrap m-4 item-center mt-12 ml-16  pt-10">
          {auth.batchesList.map((batch) => (
            <div className="w-1/3 p-4" key={batch.id}>
              <CourseCard
                title={batch.batch_name}
                book={batch.book_name}
                path={path}
                id={batch.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayBatches;
