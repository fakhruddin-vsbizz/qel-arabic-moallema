import React, { useContext, useRef, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import supabase from "@/supabaseClient";
import SuccessPrompt from "../layout/SuccessPrompt";

const Group = ["Both", "teachers", "students"];

const CreateAnnouncement = (props) => {
  const auth = useContext(AuthContext);

  const [selectedDays, setSelectedDays] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const titleRef = useRef();
  const batchNameRef = useRef();
  const decriptionRef = useRef();

  const options = auth.batchesList;

  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((res) => auth.setBatchesData(res.data));
  }, []);

  console.log("as");
  const onAnnouncementHandler = async (e) => {
    e.preventDefault();

    //getting the values
    const title = titleRef.current.value;
    const batch = batchNameRef.current.value;
    const description = decriptionRef.current.value;

    let groupValue;

    if (selectedValue === "Both") {
      groupValue = 0;
    } else if (selectedValue === "teachers") {
      groupValue = 1;
    } else if (selectedValue === "students") {
      groupValue = 2;
    }

    console.log(title);
    console.log(batch);
    console.log(groupValue);
    console.log(description);

    const { data, err } = await supabase.from("announcement").insert({
      batch_id: batch,
      group: groupValue,
      title: title,
      description: description,
    });

    props.update();
    titleRef.current.value = "";
    batchNameRef.current.value = "";
    decriptionRef.current.value = "";
    setSelectedValue("");
    setSubmitted(true);
  };

  return (
    <>
      <div className="mt-5 md:col-span-2 md:mt-0">
        {/* <form onSubmit={onBatchCreateHandler}> */}
        <h2 className="px-4 py-5 mb-4 text-3xl font-medium leading-6 text-gray-800">
          Create Announcement
        </h2>
        <form onSubmit={onAnnouncementHandler}>
          {submitted && (
            <SuccessPrompt
              title="Announcement Created Successfully"
              setSubmitted={setSubmitted}
            />
          )}
          <div className="overflow-hidden shadow sm:rounded-md md:mx-5">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6 ">
                <div className="col-span-6">
                  <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-4">
                      <h3>Announcement</h3>
                      <label
                        htmlFor="batch-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <input
                        ref={titleRef}
                        type="text"
                        name="batch-name"
                        id="first-name"
                        required
                        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                    <div className="col-span-9 sm:col-span-3">
                      <label
                        htmlFor="Type"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Select Batch
                      </label>

                      <select
                        ref={batchNameRef}
                        required
                        className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        {options.map((option) => (
                          <option key={option.id} value={option.batch_name}>
                            {option.batch_name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-span-4">
                      <h1>Select User Group</h1>
                      <div className="grid grid-cols-3 gap-5 lg:gap-10">
                        {Group.map((item) => (
                          <div className="col-span-2 pb-3 pl-1 border-2 border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer sm:col-span-1">
                            <input
                              value={item}
                              type="radio"
                              onChange={handleChange}
                              name="user"
                              className="block mt-1 border-solid rounded-full appearance-none day-card focus:outline-none after:border-none focus:border-none sm:text-sm"
                            />
                            <label
                              htmlFor="all"
                              className="block text-sm font-medium text-center text-gray-700 cursor-pointer"
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-4">
                      <label
                        htmlFor="book-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Discription
                      </label>
                      <input
                        ref={decriptionRef}
                        type="text"
                        name="book-name"
                        id="book-name"
                        required
                        className="block w-full h-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="items-center px-4 py-3 text-right bg-gray-50 sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Make Announcement
              </button>
            </div>
          </div>
        </form>
        {/* </form> */}
      </div>
    </>
  );
};

export default CreateAnnouncement;
