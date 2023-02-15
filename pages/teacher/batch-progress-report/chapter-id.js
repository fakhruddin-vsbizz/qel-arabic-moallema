import ProgressCard from "@/components/Activity/ProgressCard";
import Navigation from "@/components/layout/Navigation";
import TeacherSidebar from "@/components/Sidebar/TeacherSidebar";
import StudentListCard from "@/components/layout/StudentListCard";
import React from "react";
import Link from "next/link";

const chapterId = () => {
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
          <div className="">
            <ProgressCard />
          </div>
          <div className="my-5">
            <div className="m-5 p-5">
              <h1 className="text-lg mt-4">Chapter 1</h1>
              <h1 className="text-sm">Time of start: 12:03 PM</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="col-span-1 ">
                <h1 className="my-3 text-lg text-green-500">
                  Attended Students
                </h1>
                <div className="m-2">
                  <div className="flex p-2 text-sm font-medium text-gray-700 shadow sm:rounded-md ">
                    <span className="w-4/5 mt-1 font-normal ">
                      <img
                        class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                      />
                      Email
                    </span>
                    <span id="" className="w-4/5 mt-1 ml-10 font-semibold ">
                      {" "}
                      <Link
                        href="/teacher/batch-progress-report/student-id-in-batch-id"
                        // onClick={studentProfile}
                        className="px-2 ml-5 mr-auto font-normal text-blue-500 hover:text-blue-700 bg-blue-200 p-1 rounded-md"
                      >
                        View
                      </Link>
                      <span
                        // onClick={studentProfile}
                        className="px-2 ml-5 mr-auto font-normal text-blue-500 hover:text-blue-700 "
                      >
                        Mark Attandance
                      </span>
                      <input
                        type="checkbox"
                        checked
                        // onClick={removeStudentFromBatch}
                        className="px-2 mr-auto font-normal text-red-500 hover:text-red-700 "
                      />
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <h1 className="my-3 text-lg text-gray-400">Absent Students</h1>
                <div className="m-2">
                  <div className="flex p-2 text-sm font-medium text-gray-700 shadow sm:rounded-md ">
                    <span className="w-3/5 mt-1 font-normal ">
                      <img
                        class="inline-block h-8 w-8 mx-3 rounded-full ring-2 ring-white"
                        src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                      />
                      Email
                    </span>
                    <span id="" className="w-4/5 mt-1 ml-10 font-semibold ">
                      {" "}
                      <Link
                        href="batch-progress-report/chapter-id/"
                        // onClick={studentProfile}
                        className="px-2 ml-5 mr-auto font-normal text-blue-500 hover:text-blue-700 bg-blue-200 p-1 rounded-md"
                      >
                        View
                      </Link>
                      <span
                        // onClick={studentProfile}
                        className="px-2 ml-5 mr-auto font-normal text-blue-500 hover:text-blue-700 "
                      >
                        Mark Attandance
                      </span>
                      <input
                        type="checkbox"
                        // onClick={removeStudentFromBatch}
                        className="px-2 mr-auto font-normal text-red-500 hover:text-red-700 "
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default chapterId;
