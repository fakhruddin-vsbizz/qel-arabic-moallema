import supabase from "@/supabaseClient";
import React, { useContext, useEffect, useRef, useState } from "react";
import AuthContext from "../store/auth-context";

const AddStudentToBatch = (props) => {
  const [error, setError] = useState(false);

  const auth = useContext(AuthContext);
  const batchName = useRef();
  const email = props.studentEmail;
  const batchData = props.batch;

  //getting the batches data from the batches table
  //and setting the batches data to (setBatchesData)
  useEffect(() => {
    supabase
      .from("batches")
      .select("*")
      .then((res) => auth.setBatchesData(res.data));
  }, [batchData]);

  const submitHandler = async (e) => {
    e.preventDefault();

    const selectedBatch = batchName.current.value;

    let present = batchData.find((batch) => batch.batch_id === selectedBatch);

    if (present) {
      setError(true);
      return;
    }

    const { data, error } = await supabase
      .from("batch_student_relation")
      .insert({ student_id: email, batch_id: selectedBatch })
      .select();

    props.show(false);
  };

  return (
    <>
      <div className="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          <form onSubmit={submitHandler} className="px-10 py-10">
            <div className="mb-5">
              <label className="block font-medium mb-2" htmlFor="batch">
                Select Batch Name
              </label>
              <select
                ref={batchName}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                {auth.batchesList.map((batch) => (
                  <option key={batch.id} value={batch.batch_name}>
                    {batch.batch_name}
                  </option>
                ))}
              </select>
              {error && (
                <p className="mt-2 px-2 text-red-500">Batch already added</p>
              )}
            </div>

            <button
              className="bg-dark-purple hover:bg-dark-purple text-white py-2 px-4 rounded"
              type="submit"
            >
              Add student to batch
            </button>
            <button
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded ml-4"
              onClick={() => props.show(false)}
            >
              Close
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddStudentToBatch;
