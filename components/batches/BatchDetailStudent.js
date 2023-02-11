import React, { useState, useEffect } from "react";
import supabase from "@/supabaseClient";
import AllActivities from "../Activity/AllActivities";
import Link from "next/link";

const BatchLayout = ({ title, data }) => (
  <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
    <div className="flex text-sm font-medium text-gray-700">
      <span className="w-2/5 mt-1 font-normal ">{title}</span>
      <span id="" className="w-3/5 mt-1 ml-10 font-semibold ">
        {data}
      </span>
    </div>
  </div>
);

const BatchDetailStudent = ({ batchId, type }) => {
  const [batchDetail, setBatchDetail] = useState([]);
  const [enrollStudents, setEnrollStudents] = useState([]);
  const [scheduleDetail, setScheduleDetail] = useState();

  const gmeet = "https://meet.google.com/";

  //getting the student for the selected batch
  useEffect(() => {
    supabase
      .from("batch_student_relation")
      .select("*")
      .then((response) => setEnrollStudents(response.data));
  }, []);

  const detailStudent = enrollStudents.filter((batch) => batch.id === +batchId);

  //getting the data of batches
  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((response) => setBatchDetail(response.data));
  }, []);

  let detail;
  if (detailStudent[0]) {
    detail = batchDetail.filter(
      (batch) => batch.batch_name === detailStudent[0].batch_id
    );
  }

  console.log(detail);

  //filtering the bathches data

  useEffect(() => {
    supabase
      .from("batches")
      .select("schedule")
      .then((response) =>
        setScheduleDetail(JSON.stringify(response.data, null, 2))
      );
  }, [+batchId]);

  let arr;
  if (scheduleDetail) {
    arr = JSON.parse(scheduleDetail);
    console.log(arr);
  }

  // filtering the batches data
  let sheduleData;
  if (detailStudent[0] && arr && detail[0]) {
    sheduleData = arr.filter(
      (sch) => sch.schedule.batchName === detail[0].batch_name
    );
  }

  console.log(sheduleData);

  return (
    <>
      {detailStudent[0] && sheduleData && (
        <div className="mt-10 mb-5 sm:mt-20">
          <div className="md:grid md:grid-cols-4 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="ml-10 overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Batch Details
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <BatchLayout
                      title="Batch Name"
                      data={detail[0].batch_name}
                    />
                    <BatchLayout title="Book Name" data={detail[0].book_name} />
                    <BatchLayout title="Batch Type" data={detail[0].type} />

                    {type !== "teacher" && (
                      <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                        <div className="flex text-sm font-medium text-gray-700">
                          <span className="w-2/5 mt-1 font-normal ">
                            Teacher Name{" "}
                          </span>
                          <span
                            id=""
                            className="w-3/5 mt-1 ml-5 font-semibold "
                          >
                            {" "}
                            <img
                              class="inline-block h-6 w-6 mx-3 rounded-full ring-2 ring-white"
                              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
                            />
                            {detail[0].teacher_email}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-5 ml-10 overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Batch Shedule
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700 ">
                        <span className="w-2/6 mt-1 font-semibold ">
                          Daily On{" "}
                        </span>
                        <span id="" className="w-2/6 mt-1 ml-10 font-semibold ">
                          Timeing for a Day
                        </span>
                        <span id="" className="w-2/6 mt-1 ml-10 font-semibold ">
                          Start Date
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700 ">
                        <span className="w-2/6 mt-1 font-semibold ">
                          {sheduleData[0].schedule.days.map((day) => (
                            <span
                              name="role"
                              className="px-3 focus:outline-none border-x-2"
                            >
                              {day}
                            </span>
                          ))}
                        </span>
                        <span id="" className="w-2/6 mt-1 ml-10 font-semibold ">
                          {sheduleData[0].schedule.time}
                        </span>
                        <span id="" className="w-2/6 mt-1 ml-10 font-semibold ">
                          {sheduleData[0].schedule.startDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
              <div className="mt-5 ml-10 overflow-hidden shadow sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Join Session
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-6 gap-6">
                    {/* <div className="col-span-2 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700 ">
                        <span className="w-2/6 mt-1 font-semibold ">
                          Daily On{" "}
                        </span>
                        <span
                          id=""
                          className="w-2/6 mt-1 ml-10 font-semibold "
                        >
                          Timeing for a Day
                        </span>
                        <span
                          id=""
                          className="w-2/6 mt-1 ml-10 font-semibold "
                        >
                          Start Date
                        </span>
                      </div>
                    </div> */}
                    <div className="col-span-4 p-2 shadow-sm ">
                      <h1>Click on Join Session to join the class</h1>
                    </div>
                    <div className="col-span-2 p-2 shadow-sm ">
                      <Link
                        href={gmeet} // "https://meet.google.com/"
                        // href="/teacher/batches/batch-detail/118"
                        className="w-2/6 p-2 mx-4 text-sm font-semibold text-center text-white border border-transparent rounded-md group bg-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        target="_blank"
                        
                      >
                        Join Class
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
            </div>
            {/* Second */}

            <div className="mr-10 bg-white shadow md:col-span-2 sm:rounded-md">
              <div className="items-center justify-center ">
                <div class="grid grid-cols-4 gap-4  mb-5 ">
                  <div class="col-span-3 ">
                    <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                      Activity List
                    </h3>
                  </div>
                </div>
                <AllActivities batch={detail[0].batch_name} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BatchDetailStudent;
