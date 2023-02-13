import React, { useState, useEffect } from "react";
import supabase from "@/supabaseClient";
import AllActivities from "../Activity/AllActivities";

const BatchLayout = ({ title, data }) => (
  <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
    <div className="flex  text-sm font-medium text-gray-700">
      <span className="mt-1 font-normal w-2/5   ">{title}</span>
      <span id="" className="mt-1 ml-10 font-semibold w-3/5  ">
        {data}
      </span>
    </div>
  </div>
);

const BatchDetailStudent = ({ batchId, type }) => {
  const [batchDetail, setBatchDetail] = useState([]);
  const [enrollStudents, setEnrollStudents] = useState([]);
  const [scheduleDetail, setScheduleDetail] = useState();

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
        <div className="mt-10 sm:mt-20 mb-5">
          <div className="md:grid md:grid-cols-4 md:gap-6">
            <div className="mt-5 md:col-span-2 md:mt-0">
              <div className="overflow-hidden shadow ml-10 sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
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
                      <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                        <div className="flex  text-sm font-medium text-gray-700">
                          <span className="mt-1 font-normal w-2/5   ">
                            Teacher Name{" "}
                          </span>
                          <span
                            id=""
                            className="mt-1 ml-5 font-semibold w-3/5  "
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
              <div className="overflow-hidden shadow ml-10 mt-5 sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-4 gap-4 mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className=" text-2xl   font-medium leading-6 text-gray-700 mb-4 ">
                        Batch Shedule
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700 ">
                        <span className="mt-1 font-semibold w-2/6   ">
                          Daily On{" "}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          Timeing for a Day
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          Start Date
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-4 shadow-sm p-2">
                      <div className="flex  text-sm font-medium text-gray-700 ">
                        <span className="mt-1 font-semibold w-2/6   ">
                          {sheduleData[0].schedule.days.map((day) => (
                            <span
                              name="role"
                              className="focus:outline-none px-3 border-x-2"
                            >
                              {day}
                            </span>
                          ))}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          {sheduleData[0].schedule.time}
                        </span>
                        <span
                          id=""
                          className="mt-1 ml-10 font-semibold w-2/6  "
                        >
                          {sheduleData[0].schedule.startDate}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
            </div>
            {/* Second */}

            <div className="md:col-span-2 bg-white mr-10 shadow sm:rounded-md">
              <div className="items-center justify-center ">
                <div class="grid grid-cols-4 gap-4  mb-5 ">
                  <div class="col-span-3 ">
                    <h3 className=" text-2xl p-4  font-medium leading-6 text-gray-700 mb-4 ">
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
