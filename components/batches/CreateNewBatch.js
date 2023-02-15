import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";
import SuccessPrompt from "../layout/SuccessPrompt";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const CreateNewBatch = () => {
  const [error, setError] = useState(false);
  const [selectedDays, setSelectedDays] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  function convertTimeTo12HourFormat(time) {
    // Split the time into hours and minutes
    let [hours, minutes] = time.split(":");

    // Convert the hours to 12-hour format
    let hours12 = (hours % 12 || 12).toString();

    // Add leading zero to hours and minutes if they are single digits
    hours12 = hours12.padStart(2, "0");
    minutes = minutes.padStart(2, "0");

    // Determine the AM/PM suffix based on the hours
    const ampm = hours >= 12 ? "PM" : "AM";

    // Return the time in 12-hour format with AM/PM suffix
    return `${hours12}:${minutes} ${ampm}`;
  }

  const handleChange = (event) => {
    const day = event.target.value;
    if (event.target.checked) {
      setSelectedDays([...selectedDays, day]);
    } else {
      setSelectedDays(
        selectedDays.filter((selectedDay) => selectedDay !== day)
      );
    }
  };
  const nameRef = useRef();
  const bookNameRef = useRef();
  const typeRef = useRef();
  const teacherNameRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const gmeetLink = useRef();

  const authCtx = useContext(AuthContext);
  let options = authCtx.teachersList;

  useEffect(() => {
    supabase
      .from(`teachers`)
      .select("*")
      .then((response) => authCtx.setTeachersData(response.data));
  }, []);

  function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  const onBatchCreateHandler = async (e) => {
    e.preventDefault();

    //getting the values
    const enteredBatchName = nameRef.current.value;
    const enteredBookName = bookNameRef.current.value;
    const enteredType = typeRef.current.value;
    const enteredTeacherEmail = teacherNameRef.current.value;
    const time = timeRef.current.value;
    const date = dateRef.current.value;
    const glink = gmeetLink.current.value;

    let finalTime = convertTimeTo12HourFormat(time);

    console.log("finalTime: ", finalTime);

    const obj = {
      days: selectedDays,
      time: finalTime,
      startDate: date,
      batchName: enteredBatchName,
    };

    console.log(enteredBatchName);
    console.log(enteredBookName);
    console.log(enteredType);
    console.log(enteredTeacherEmail);

    console.log(date);
    console.log(selectedDays);

    //Inserting the Student data into student table
    supabase
      .from("batches")
      .insert({
        batch_name: enteredBatchName,
        teacher_email: enteredTeacherEmail,
        type: enteredType,
        book_name: enteredBookName,
        schedule: obj,
        g_meet: glink,
      })
      .select()
      .then((response) => {
        console.log(response.data);
        console.log(response.error);
        if (response.data) {
          setError(false);
          setSubmitted(true);
          nameRef.current.value = "";
          bookNameRef.current.value = "";
          timeRef.current.value = "";
          dateRef.current.value = "";
          dateRef.current.value = "";
          setSelectedDays([]);
        }
        if (response.error) {
          setError(true);
        }
      });
    if (error) {
      return;
    }

    console.log("er: ", error);
  };

  return (
    <>
      <div className="mt-10 sm:mt-20">
        {submitted && (
          <SuccessPrompt
            title="Batch Created Successfully"
            setSubmitted={setSubmitted}
          />
        )}
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="bg-gray-400 md:col-span-1">
            <div className="items-center justify-center px-4 pl-12 mt-44">
              <h2 className="mb-4 text-3xl font-medium leading-6 text-gray-700 ">
                Create Batch
              </h2>
              <p className="mt-1 text-gray-600 text-sms">
                Enter the details to create a new batch
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={onBatchCreateHandler}>
              <div className="overflow-hidden shadow sm:rounded-md md:mx-5">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6 ">
                    <div className="col-span-6">
                      <div className="grid grid-cols-8 gap-3">
                        <div className="col-span-8 sm:col-span-4">
                          <label
                            htmlFor="batch-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Batch name
                          </label>
                          <input
                            type="text"
                            name="batch-name"
                            id="first-name"
                            ref={nameRef}
                            autoComplete="given-name"
                            required
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                          {error && (
                            <p className=" text-red-500 mt-2">
                              Batch already exists
                            </p>
                          )}
                        </div>
                        <div className="col-span-8 sm:col-span-4">
                          <label
                            htmlFor="book-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Book name
                          </label>
                          <input
                            type="text"
                            name="book-name"
                            id="book-name"
                            ref={bookNameRef}
                            required
                            autoComplete="given-name"
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6">
                      <div className="grid grid-cols-9 gap-3">
                        <div className="col-span-9 sm:col-span-3">
                          <label
                            htmlFor="Teacher"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Select Type
                          </label>
                          <select
                            id="Teacher"
                            name="Teacher"
                            ref={typeRef}
                            autoComplete="teacher-name"
                            required
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option>Adult</option>
                            <option>Kid</option>
                          </select>
                        </div>
                        <div className="col-span-9 sm:col-span-3">
                          <label
                            htmlFor="Type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Select Teacher
                          </label>

                          <select
                            ref={teacherNameRef}
                            required
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            {options.map((option) => (
                              <option key={option.id} value={option.email}>
                                {option.name}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div className="col-span-9 sm:col-span-3">
                          <label
                            htmlFor="gmeet"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Add Google Meet
                          </label>
                          <input
                            ref={gmeetLink}
                            type="text"
                            name="gmeet"
                            required
                            placeholder="G Meet Link"
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-6 daily-on">
                      <h4 className="my-2">Weekly on.</h4>
                      <div className="grid grid-cols-8 gap-3 sm:grid-cols-7 lg:gap-5">
                        {days.map((day) => (
                          <div className="col-span-2 pb-3 pl-1 border-2 border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                            <input
                              type="checkbox"
                              id={day}
                              value={day}
                              name={day}
                              onChange={handleChange}
                              checked={selectedDays.includes(day)}
                              className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                            />
                            <label
                              htmlFor={day}
                              className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                            >
                              {day}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="col-span-6">
                      <div className="grid grid-cols-8 gap-3">
                        <div className="col-span-8 sm:col-span-4">
                          <label
                            htmlFor="time"
                            className="block text-sm font-medium text-gray-700"
                          >
                            At what time of day?
                          </label>
                          <input
                            type="time"
                            min="07:00"
                            max="20:00"
                            name="time"
                            id="time"
                            ref={timeRef}
                            required
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                        <div className="col-span-8 sm:col-span-4">
                          <label
                            htmlFor="date"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Starting Date
                          </label>
                          <input
                            type="date"
                            name="date"
                            id="date"
                            min={getCurrentDate()}
                            ref={dateRef}
                            required
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {error && <p className="text-red-400">{error}</p>}
                <div className="items-center px-4 py-3 text-right bg-gray-50 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Create Batch
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewBatch;

// supabase
// .from("batches")
// .insert({
//   batch_name: enteredBatchName,
//   teacher_email: enteredTeacherEmail,
//   type: enteredType,
//   book_name: enteredBookName,
// })
// .then((res) => {
//   if (!res.ok) {
//     setError(
//       "Teacher Already added to the batch please add a new teacher"
//     );
//     return;
//   }
// });

// const { data, error } = await supabase
// .from("teachers")
// .update({ batch_id_email: enteredTeacherEmail })
// .eq("email", enteredTeacherEmail)
// .select();

// if (error) {
// setError("Server Error");
// return;
// }

// console.log(data);
// console.log(error);
