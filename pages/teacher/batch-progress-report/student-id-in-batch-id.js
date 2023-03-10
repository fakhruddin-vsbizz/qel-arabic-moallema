import ProgressCard from "@/components/Activity/ProgressCard";
import Navigation from "@/components/layout/Navigation";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import GeneralCard from "@/components/layout/GeneralCard";
import Link from "next/link";
import React from "react";

const StudentIdInBatchId = () => {
  return (
    <div>
      {/* <Navigation /> */}
      <div className="flex">
        <TeacherSidebar />
        <div className="flex-1 h-screen p-10 mx-5">
          <div className="grid grid-cols-3 gap-5 p-3 m-0 rounded-md shadow-md md:p-5 md:grid-cols-5 bg-slate-50">
            <div className="col-span-2 ">
              <label
                htmlFor="Teacher"
                className="m-auto text-2xl font-medium text-center text-gray-700 blockmt-2 text-large"
              >
                Select Batch
              </label>
            </div>
            <div className="col-span-3 ">
              <select
                id="Teacher"
                name="Teacher"
                // ref={typeRef}
                autoComplete="teacher-name"
                required
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Batch 1</option>
                <option>Batch 2</option>
                <option>Batch 3</option>
                <option>Batch 4</option>
                <option selected>--Select Batch--</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-5 mt-3 p-3 m-0 rounded-md shadow-md md:p-5 md:grid-cols-5 bg-slate-50">
            <div className="col-span-2 ">
              <label
                htmlFor="Teacher"
                className="m-auto text-2xl font-medium text-center text-gray-700 blockmt-2 text-large"
              >
                Select Student From Batch 1
              </label>
            </div>
            <div className="col-span-3 ">
              <select
                id="Teacher"
                name="Teacher"
                // ref={typeRef}
                autoComplete="teacher-name"
                required
                className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>Student 1</option>
                <option>Student 2</option>
                <option>Student 3</option>
                <option>Student 4</option>
                <option selected>--Select Batch--</option>
              </select>
            </div>
          </div>
          <div className="my-3 rounded-md shadow-md md:p-5 bg-slate-50">
            <h1 className="text-3xl font-bold">Student 1</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 my-3 ">
              {/* <ProgressCard /> */}  
              <div className="col-span-2 my-2 ">
                <h1 className=" font-bold">Batches attended 3/5</h1>
              </div>
              <div className="col-span-2  ">
                <h1 className=" font-bold">Assignment completed 3/4</h1>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-lg font-semibold text-green-500">
              Completed chapters
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 p-3 m-0 md:p-5 md:grid-cols-4">
            <div className="col-span-1">
              <GeneralCard
                title="Chapter 1"
                disc="Teacher remarks: Lorem ipsum dolor....."
                btnText="view"
                link=""
              />
            </div>
            <div className="col-span-1">
              <GeneralCard
                title="Chapter 2"
                disc="acvscdsv"
                btnText="view"
                link=""
              />
            </div>
            <div className="col-span-1">
              <GeneralCard
                title="chapter 3"
                disc="acvscdsv"
                btnText="view"
                link=""
              />
            </div>
          </div>
          <div className="mt-5">
            <h1 className="text-lg font-semibold text-red-500">
              Incoming chapters
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-5 p-3 m-0 md:p-5 md:grid-cols-4">
            <div className="col-span-1">
              <GeneralCard
                title="chapter 4"
                disc="Teacher remarks: Lorem ipsum dolor....."
                btnText="view"
                link=""
              />
            </div>
            <div className="col-span-1">
              <GeneralCard
                title="chapter 5"
                disc="acvscdsv"
                btnText="view"
                link=""
              />
            </div>
            <div className="col-span-1">
              <GeneralCard
                title="chapter 6"
                disc="acvscdsv"
                btnText="view"
                link=""
              />
            </div>
            <div className="col-span-1">
              <GeneralCard
                title="chapter 7"
                disc="acvscdsv"
                btnText="view"
                link=""
              />
            </div>
          </div>

          {/* <div className="my-5">
            <div className="m-5 p-5">
              <h1 className="text-lg mt-4">Chapter 1</h1>
              <h1 className="text-sm">Time of start: 12:03 PM</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1 ">
                
              </div>
              <div className="col-span-1 ">
                
              </div>
              
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StudentIdInBatchId;
