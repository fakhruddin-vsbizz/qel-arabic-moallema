import React, { useState } from "react";
import CardLayout from "../layout/CardLayout";
import CreateNewBatch from "./CreateNewBatch";
import DisplayBatches from "./DisplayBatches";

const Batches = () => {
  const [showCreateBatch, setShowCreateBatch] = useState(true);

  const showCreateBatchHandler = () => {
    console.log("sdf");
    setShowCreateBatch(true);
  };

  const showCreateBatchHandler2 = () => {
    console.log("sdf2");
    setShowCreateBatch(false);
  };

  console.log(showCreateBatch);

  return (
    <>
      <div className="bg-slate-100 w-full">
        <div className="px-4 sm:px-6 lg:px-8 ">
          <div>
            <div class="flex items-center justify-center mb-3 mt-2">
              <label
                for="Toggle4"
                className="inline-flex items-center p-1 cursor-pointer dark:bg-gray-300 dark:text-gray-800 rounded-sm"
              >
                <input id="Toggle4" type="checkbox" className="hidden peer" />
                <span
                  onClick={showCreateBatchHandler}
                  className="px-4 py-2 dark:bg-gray-500 peer-checked:dark:bg-gray-300 rounded-sm"
                >
                  Create Batch
                </span>
                <span
                  onClick={showCreateBatchHandler2}
                  className="px-4 py-2 dark:bg-gray-300 peer-checked:dark:bg-orange-400 rounded-sm"
                >
                  View Batches
                </span>
              </label>
            </div>
          </div>
          <div>
            {showCreateBatch && <CreateNewBatch />}
            {!showCreateBatch && <DisplayBatches />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Batches;
