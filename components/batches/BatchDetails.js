import supabase from "@/supabaseClient";
import { useState, useEffect, useRef, useContext } from "react";

import StudentListCard from "../layout/StudentListCard";
import AuthContext from "../store/auth-context";
import StudentListCardTeacher from "../layout/StudentListCardTeacher";
import SessionPopup from "../layout/SessionPopup";
import { LinkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import BatchContext from "../store/batch-context";

const BatchDetails = (props) => {

  const type = props.type;
  console.log(props.type);

  //session Hooks
  const [clicked, setClicked] = useState(false);
  const [gmeet, setGmeet] = useState("https://meet.google.com/");
  const [sessionStarted, setSessionStarted] = useState(false);

  //user management hooks for batch
  const [showUserList, setshowUserList] = useState(false);
  const [batchDetail, setBatchDetail] = useState([]);
  const [enrollStudents, setEnrollStudents] = useState([]);
  const [scheduleDetail, setScheduleDetail] = useState();

  const authCtx = useContext(AuthContext);

  //getting the data of batches
  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((response) => setBatchDetail(response.data));
  }, []);

  //filtering the bathches data
  const detail = batchDetail.filter((batch) => batch.id === +props.batchId);

  useEffect(() => {
    supabase
      .from("batches")
      .select("schedule")
      .then((response) =>
        setScheduleDetail(JSON.stringify(response.data, null, 2))
      );
  }, []);

  let arr;
  if (scheduleDetail) {
    arr = JSON.parse(scheduleDetail);
    console.log(arr);
  }

  // filtering the batches data
  let sheduleData;
  if (detail[0] && arr) {
    sheduleData = arr.filter(
      (sch) => sch.schedule.batchName === detail[0].batch_name
    );
  }

  // filtering the batches data
  let batchStudents;
  if (detail[0]) {
    batchStudents = enrollStudents.filter(
      (batch) => batch.batch_id === detail[0].batch_name
    );
    // console.log(batchStudents);
  }

  //getting the student for the selected batch
  useEffect(() => {
    supabase
      .from("batch_student_relation")
      .select("*")
      .then((response) => setEnrollStudents(response.data));
  }, [clicked]);
  //getting the list of all students

  useEffect(() => {
    supabase
      .from("students")
      .select("*")
      .then((response) => authCtx.setStudentsData(response.data));
  }, [clicked]);

  //****************session****************** */

  //getting the list of present students
  const batchCtx = useContext(BatchContext);
  const attendanceList = batchCtx.attendanceList;

  console.log("List: ", attendanceList);

  const startSession = async () => {
    setSessionStarted(true);
    console.log("started");
    let currentTime = new Date();
    let currTime = currentTime.toLocaleString();

    const { data1, errorTable } = await supabase
      .from("session")
      .insert({
        starting_time: currTime,
        module_name: detail[0].book_name,
        students_present: { students: attendanceList },
        batch_id: detail[0].batch_name,
      })
      .select();
  };

  const closeList = () => {
    setshowUserList(false);
    setClicked(false);
  };
  const openList = () => {
    setshowUserList(true);
  };

  return (
    <>
      {sessionStarted && (
        <SessionPopup
          start={startSession}
          session={setSessionStarted}
          list={
            <div className="items-center justify-center ">
              <StudentListCardTeacher
                type="teacher"
                operation="attendanceList"
                enrollStudents={batchStudents}
              />
            </div>
          }
        />
      )}
      {detail[0] && arr && (
        <div className="mt-10 mb-5 sm:mt-20">
          <div className="md:grid md:grid-cols-5 md:gap-6">
            <div className="mt-5 md:col-span-3 md:mt-0">
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
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700 ">
                        <span className="w-2/5 mt-1 font-normal ">
                          Batch Name{" "}
                        </span>
                        <span id="" className="w-3/5 mt-1 ml-10 font-semibold ">
                          {detail[0].batch_name}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700">
                        <span className="w-2/5 mt-1 font-normal ">
                          Book Name{" "}
                        </span>
                        <span id="" className="w-3/5 mt-1 ml-10 font-semibold ">
                          {detail[0].book_name}
                        </span>
                      </div>
                    </div>
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4 ">
                      <div className="flex text-sm font-medium text-gray-700">
                        <span className="w-2/5 mt-1 font-normal ">
                          Batch Type{" "}
                        </span>
                        <span id="" className="w-3/5 mt-1 ml-10 font-semibold ">
                          {detail[0].type}
                        </span>
                      </div>
                    </div>
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
                {/* <p className="text-red-400">Error </p> */}
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
                        <span className="grid w-2/6 mt-1 font-semibold">
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
                        Google Meet 
                      </h3>
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-6">
                    <div className="col-span-6 p-2 shadow-sm sm:col-span-4">
                      <div className="flex text-sm font-medium text-gray-700 ">
                        <input
                          type="text"
                          placeholder="G Meet Link"
                          value={detail[0].g_meet}
                          onChange={(event) => setGmeet(event.target.value)}
                          className="w-4/6 border-2 rounded-md"
                        />
                        
                        <button onChange={(event) => setGmeet(event.target.value)} className="w-1/6 p-2 mx-4 text-sm font-semibold text-center text-white border border-transparent rounded-md group bg-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">Update Link</button>

                        <Link
                          href={detail[0].g_meet} // "https://meet.google.com/"
                          // href="/teacher/batches/batch-detail/118"
                          className="w-2/6 p-2 mx-4 text-sm font-semibold text-center text-white border border-transparent rounded-md group bg-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                          target="_blank"
                          onClick={() => setSessionStarted(true)}
                        >
                          Join Class
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <p className="text-red-400">Error </p> */}
              </div>
            </div>
            {/* Second */}
            {showUserList && (
              <div className="mr-10 bg-white shadow md:col-span-2 sm:rounded-md">
                <div className="items-center justify-center ">
                  <div class="grid grid-cols-4 gap-4  mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Add Student List
                      </h3>
                    </div>
                    <div class="align-end">
                      <button
                        onClick={closeList}
                        className="inline-flex justify-center px-4 py-2 m-2 text-sm font-medium text-white bg-gray-400 border border-transparent rounded-md shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="px-1 font-bold "> X </span>
                      </button>
                    </div>
                  </div>

                  {authCtx.studentsList.map((student) => (
                    <StudentListCard
                      email={student.email}
                      type={"addStudents"}
                      batch={detail[0].batch_name}
                      enrollStudents={batchStudents}
                      click={setClicked}
                    />
                  ))}
                </div>
              </div>
            )}
            {type === "teacher" && (
              <div className="mr-10 bg-white shadow md:col-span-2 sm:rounded-md">
                {/* Attandance */}
                <div className="items-center justify-center ">
                  <div class="grid grid-cols-4 gap-4  mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Student List
                      </h3>
                    </div>
                  </div>
                  <StudentListCardTeacher
                    type="teacher"
                    operation="studentList"
                    enrollStudents={batchStudents}
                  />
                </div>
                {type !== "teacher" && (
                  <div className="items-center justify-center ">
                    <div class="grid grid-cols-4 gap-4  mb-5 ">
                      <div class="col-span-3 ">
                        <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                          Student List
                        </h3>
                      </div>
                      <div class="align-end">
                        <button
                          onClick={openList}
                          className="inline-flex justify-center px-4 py-2 m-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                          <span className="px-1 font-bold "> + </span>
                        </button>
                      </div>
                    </div>

                    {batchStudents.map((student) => (
                      <StudentListCard
                        email={student.student_id}
                        type={"addedStudents"}
                        enrollStudents={batchStudents}
                        batch={detail[0].batch_name}
                        click={setClicked}
                      />
                    ))}

                    <div class="align-end m-2"></div>
                  </div>
                )}
              </div>
            )}
            {!showUserList && type !== "teacher" && (
              <div className="mr-10 bg-white shadow md:col-span-2 sm:rounded-md">
                <div className="items-center justify-center ">
                  <div class="grid grid-cols-4 gap-4  mb-5 ">
                    <div class="col-span-3 ">
                      <h3 className="p-4 mb-4 text-2xl font-medium leading-6 text-gray-700 ">
                        Student List
                      </h3>
                    </div>
                    <div class="align-end">
                      <button
                        onClick={openList}
                        className="inline-flex justify-center px-4 py-2 m-2 text-sm font-medium text-white bg-green-700 border border-transparent rounded-md shadow-sm hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="px-1 font-bold "> + </span>
                      </button>
                    </div>
                  </div>

                  {batchStudents.map((student) => (
                    <StudentListCard
                      email={student.student_id}
                      type={"addedStudents"}
                      enrollStudents={batchStudents}
                      batch={detail[0].batch_name}
                      click={setClicked}
                    />
                  ))}

                  <div class="align-end m-2"></div>
                </div>
              </div>
            )}
            {/* {type === "teacher" && (
              <button
                onClick={startSession}
                type="submit"
                className="relative flex justify-center w-full px-4 py-2 mt-4 mb-4 text-sm font-medium text-white border border-transparent rounded-md group ml-44 bg-dark-purple focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span>
                Start Session
              </button>
            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default BatchDetails;
